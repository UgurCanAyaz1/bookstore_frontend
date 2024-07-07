import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeBook, addOneBook, removeOneBook } from '../store/slices/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YesNoModal from './YesNoModal';

import "../static/css/style.css";
import "../static/css/book-filter.css";

function Cart() {
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.cart.books);

  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddOne = (book) => {
    dispatch(addOneBook(book));
    if (book.quantity>book.cartQuantity){
      toast.success(`The quantity of "${book.name}" is increased!`);
    }
  };

  const handleRemoveOneBook = (book) => {
    dispatch(removeOneBook(book));
    console.log(book)
    if (book.cartQuantity>0){
      toast.info(`The quantity of "${book.name}" is decreased!`);
    }
  };

  const handleRemoveBook = (book) => {
    setSelectedBook(book);
    setIsShowModal(true);
  };

  const confirmRemoveBook = () => {
    if (selectedBook) {
      dispatch(removeBook(selectedBook));
      toast.warn(`The book "${selectedBook.name}" is removed from cart!`);
      setSelectedBook(null);
      setIsShowModal(false);
    }
  };

  const handleRemoveBooks = () => {
    dispatch(clearCart());
    toast.error('All books are removed from cart!');
  };

  return (
    <section className="cart-item page">
      <h2>Book Cart</h2>
      <div className="product-table">
        <table cellSpacing={0}>
          <tbody>
            <tr className="heading">
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
            {bookList.map((book, key) => (
              <tr className="data" key={key}>
                <td>{book.name}</td>
                <td>₺{book.price}</td>
                <td>
                  <div className="input-group">
                    <div className="quantity">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus"
                        data-field="quantity"
                        onClick={() => handleRemoveOneBook(book)}
                      />
                      <input
                        type="text"
                        step={1}
                        min={1}
                        value={book.cartQuantity}
                        name="quantity"
                        className="quantity-field"
                        readOnly
                        style={{ width: "4.5rem" }}
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus"
                        data-field="quantity"
                        onClick={() => handleAddOne(book)}
                      />
                    </div>
                  </div>
                </td>
                <td>₺{book.price * book.cartQuantity}</td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => handleRemoveBook(book)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="discount-summary">
        <div className="summary-section">
          <div className="order-detail-table" style={{ display: "grid" }}>
            <button className="order-detail-table">
              <a onClick={handleRemoveBooks}>Clear Cart</a>
            </button>
          </div>
        </div>
      </section>
      <YesNoModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        title="Confirm Removal"
        desc="Are you sure you want to remove this book?"
        onClickYes={confirmRemoveBook}
      />
      <ToastContainer 
      position="top-center" 
      autoClose={2000}
      />
    </section>
  );
}

export default Cart;
