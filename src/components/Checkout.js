import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { clearCart } from '../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const CheckoutForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const bookList = useSelector((state) => state.cart.books);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
  
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      try {
        const response = await fetch('http://localhost:5234/api/Stripe/processPayment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount: totalAmount,
            // Example test account for showing the handling of the process. 
            stripeAccountId: 'acct_1Nv0FGQ9RKHgCVdK'
          }),
        });
  
        const responseData = await response.json();
  
        if (!response.ok) {
          throw new Error(responseData.error || 'Payment failed');
        }
  
        setPaymentResult(responseData);

        // Show success toast notification
        toast.success('Payment Successful! Redirecting to Home Page in 5 seconds.');

        // Start the timeout after a successful payment
        setTimeout(() => {
          handleClearCart();
          navigate("/");
        }, 5000); 
  
      } catch (err) {
        setError(err.message);
      } finally {
        setProcessing(false);
      }
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <section className="checkout-section page">
        <h2>Checkout</h2>
        <div className="main">
          <div className="your-order">
            <h4>Your Order</h4>
            <div className="order-table">
              <table cellSpacing={0}>
                <tbody>
                  <tr className="heading">
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Total</th>
                  </tr>
                  {bookList.map((book, key) => (
                    <tr key={key}>
                      <td>
                        <img src={book.image} alt="" />
                      </td>
                      <td>{book.name}</td>
                      <td>{book.cartQuantity}</td>
                      <td>₺{book.price * book.cartQuantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="detail-payment">
        <div className="summary-section">
          <h4>Order Total</h4>
          <div className="order-detail-table">
            <table>
              <tbody>
                <tr>
                  <td>Order Subtotal</td>
                  <td>₺{totalAmount}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free Shipping</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>₺{totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="payment-section mt-20">
          <h4>Payment Method</h4>
          <form onSubmit={handleSubmit} className="payment-form">
            <CardElement />
            {error && <div className="card-errors" role="alert">{error}</div>}
            <button type="submit" disabled={!stripe || processing}>
              {processing ? 'Processing...' : 'Place Order Now'}
            </button>
          </form>
          <ToastContainer 
        position="top-center" 
        autoClose={4000}
        />
        </div>
      </section>
    </>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
