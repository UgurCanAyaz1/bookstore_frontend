import React from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";
import { useSelector } from 'react-redux';

function CartSubtotal() {

  // Get total amount state from redux
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <section className="discount-summary">
      <div className="summary-section" style={{}}>
        <h4>Cart Subtotal</h4>
        <div className="order-detail-table" style={{display:"grid"}}>
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
          <button>
            <a href="./Checkout">Proceed To Checkout</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartSubtotal;
