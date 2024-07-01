import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeBook, addOneBook,removeOneBook } from '../store/slices/cartSlice';

import "../static/css/style.css";
import "../static/css/book-filter.css";

function Cart() {
  const dispatch = useDispatch();

  // Get bookList from redux
  const bookList = useSelector(state => state.cart.books);
  
  // Defining local function for adding one book using redux action 
  const handleAddOne = (book) => {
    dispatch(addOneBook(book));
  };

  // Defining local function for removing book using redux action 
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  // Defining local function for removing one book using redux action 
  const handleRemoveOneBook = (book) => {
    dispatch(removeOneBook(book));
  };

  // Defining local function for removing whole books using redux action 
  const handleRemoveBooks = () => {
    dispatch(clearCart());
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
                <td>${book.price * book.cartQuantity}</td>
                <td>
                  <i 
                    className="fa-solid fa-trash" 
                    onClick={() => handleRemoveBook(book)} 
                    style={{cursor: 'pointer'}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <section className="discount-summary">
        <div className="summary-section" style={{}}>
          <div className="order-detail-table" style={{display:"grid"}}>
            <button className="order-detail-table">
              <a onClick={handleRemoveBooks}>Clear Cart</a>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Cart;
