import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, clearFav, removeFav  } from '../store/slices/favSlice';
import { addToCart } from '../store/slices/cartSlice';
import { useNavigate } from "react-router-dom";

import "../static/css/style.css";
import "../static/css/book-filter.css";

function Fav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get bookList from redux

  const favBooks = useSelector(state => state.fav.favBooks);
  
  // Defining local function for adding one book using redux action 
  const handleNavigateToCart = (book) => {
    navigate("/cart");
  };

  // Defining local function for removing book using redux action 
  const handleRemoveBook = (book) => {
    dispatch(removeFav(book));
  };

  // Defining local function for removing whole books using redux action 
  const handleClearFav = () => {
    dispatch(clearFav());
  };

  const handleAddToCart = (book) => {
    console.log("here!")
    dispatch(addToCart(book));
  };

  return (
    <section className="cart-item page">
      <h2>Favorite Books</h2>
      <div className="product-table">
        <table cellSpacing={0}>
          <tbody>
            <tr className="heading">
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Add to Cart</th>
              <th>Delete</th>
            </tr>
            {favBooks.map((book, key) => (
              <tr className="data" key={key}>
                <td>{book.name}</td>
                <td>₺{book.price}</td>
                <td>
                  <i 
                    className="fa-solid fa-cart-shopping" 
                    onClick={() => handleAddToCart(book)} 
                    style={{cursor: 'pointer'}}
                  />
                </td>
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
              <a onClick={handleClearFav}>Clear Favorite Books</a>
            </button>
            <button className="order-detail-table">
              <a onClick={handleNavigateToCart}>Navigate To Cart</a>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Fav;
