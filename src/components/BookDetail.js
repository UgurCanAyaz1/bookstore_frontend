import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addOneBook,removeOneBook } from '../store/slices/cartSlice';
import axios from 'axios';

function BookDetail() {

  const dispatch = useDispatch();

  // useStates

  // useState for holding book data received via axios
  const [BookData, setBookData] = useState([]);

  // useSelectors

  // useSelector for holding related book id from search 
  const detailbookID = useSelector(state => state.detail.bookid);


  const bookList = useSelector(state => state.cart.books);
  const basketCount = useSelector(state => state.cart.basketCount);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  // UseEffects

  // useEffect for receiving the book info based on book id
  useEffect(() => {
    getBookByID(detailbookID);
  }, [detailbookID]);

  // Functions

  // Function for receiving book data via axios
  const getBookByID = async (id) => {
    try {
      let response = await axios.get(`http://localhost:5234/api/Book/GetById${id}`, {});
      // set received book data
      setBookData(response.data);
    } catch (error) {
      console.log('Get Book by ID Error', error);
    }
  };

  // Function for adding book to cart

  const handleAddToCart = (book) => {dispatch(addToCart(book));};

  const handleRemoveOneBook = (book) => {dispatch(removeOneBook(book));};

  const handleAddOne = (book) => {dispatch(addOneBook(book));};


  return (
    <section className="book-overview">
      <div className="img">
        <img src={BookData.image} alt="" />
      </div>
      <div className="book-content w-full">
        <h4>{BookData.name}</h4>
        <div className="meta">
          <div className="review"></div>
        </div>
        <div className="footer">
          <div className="author-detail">
            <div className="author">
              <strong>Written by</strong>
              <strong>{BookData.author}</strong>
            </div>
            <div className="year">
              <strong>Year</strong>
              <strong>2019</strong>
            </div>
            <div className="year">
              <strong>Stock</strong>
              <strong>{BookData.quantity}</strong>
            </div>
          </div>
          <div className="badge">
            <span>
              <i className="fa-solid fa-bolt-lightning" />
              free shipping
            </span>
            <span>
              <i className="fa-solid fa-shield" />
              in stocks
            </span>
          </div>
        </div>
        <div className="book-price">
          <div className="price">
            <strong>Price: ₺{BookData.price}</strong>
          </div>
          <div className="input-group">
            <button className="cartbtn"
            onClick={() => handleAddToCart(BookData)}
            >
              <i className="fa-solid fa-cart-shopping" />
              Add to Cart
            </button>
            <button className="like">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;
