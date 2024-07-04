import React, { useEffect, useState } from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";
import logo from "../static/images/logo.png";
import { SlicerLogout } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getdetailId } from '../store/slices/detailSlice';

function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useStates

  // useState that stores book data from axios
  const [BookData, setBookData] = useState([]);

  // useState for holding search input data
  const [searchTerm, setSearchTerm] = useState("");

  const favCount = useSelector(state => state.fav.favCount);

  // UseEffects

  // UseEffect for getting all books
  useEffect(() => {
    getAllBooks();
  }, []);

  // Function that is called by useEffect that receives book data
  const getAllBooks = async () => {
    try {
      let response = await axios.get('http://localhost:5234/api/Book/GetAll');

      // useState stores response from the request
      setBookData(response.data);
    } catch (error) {
      console.log('Get All Products Error', error);
    }
  };



  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    return string[0].toUpperCase() + string.slice(1);
  }

  // Defining local function for log out using redux action 
  const handleLogOut = (user) => {
    dispatch(SlicerLogout(user));
    navigate("/");
  };

  // Defining local function for storing the search's book id 
  const handleDetail = (bookid) => {;
    dispatch(getdetailId(bookid));
    navigate("/Book/Detail");
    window.location.reload();
  };

  // Get state values from Redux
  const user = useSelector(state => state.user);
  const username = capitalizeFirstLetter(user.username);
  const authenticateResult = user.authenticateResult;
  const cartCount = useSelector(state => state.cart?.basketCount || 0);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <nav className="navbar">
        <div className="logo">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="logo-header">
            <h4>
              <a href="/">Bookoe</a>
            </h4>
            <small>Book Store Website</small>
          </div>
        </div>
        <div className="search-field ml-5 justify-center">
          <input
            style={{ width: "90%" }}
            type="text"
            placeholder="Search Book"
            value={searchTerm}
            onChange={handleSearchChange}
            list="book-recommendations"
          />
          <button className="search-icon">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
          {searchTerm && BookData.length > 0 && (
            <div className="search-results">
              {/* Filtering the books based on search and displaying the results */}
              {BookData.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase())).map((book, index) => (
                <div key={index} className="search-result">
                  {/* <a style={{}} href={`/books/${book.id}`}>{book.name}</a> */}
                  {/* <a style={{}} href={"/Book/Detail"}>{book.name}</a> */}
                  <a style={{}} onClick={() => handleDetail(book.id)}>{book.name}</a>
                </div>
              ))}
            </div>
          )}
        </div>
        <ul className="nav-list">
          <div className="logo">
            <div className="title">
              <div className="img">
                <img src={logo} alt="" />
              </div>
              <div className="logo-header">
                <h4>
                  <a href="/">Bookoe</a>
                </h4>
                <small>Book Store Website</small>
              </div>
            </div>
            <button className="close">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="/books" className="dropbtn">Books</a>
              <div className="dropdown-content">
                <a href="/books/action">Action</a>
                <a href="/books/adventure">Adventure</a>
                <a href="/books/comedy">Comedy</a>
                <a href="/books/crime">Crime</a>
                <a href="/books/drama">Drama</a>
              </div>
            </div>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>

          {authenticateResult ? (
            <>
              <li>
                <a onClick={handleLogOut}>Log Out</a>
              </li>
              <nav className="navbar-2">
                <div className="nav-end">
                  <button className="likebtn">
                    <a href="/fav">
                      <i className="fa-regular fa-heart" /> <span>{favCount}</span>
                    </a>
                  </button>
                  <button className="cart">
                    <a href="/cart">
                      <i className="fa-solid fa-cart-shopping" /> <span>{cartCount}</span>
                    </a>
                  </button>
                  <div className="profile-img">{username}</div>
                </div>
              </nav>
            </>
          ) : (
            <>
              <button className="login">
                <a href="/login">Log In</a>
              </button>
              <button className="signup">
                <i className="fa-solid fa-user" />
                <a href="/registration">Sign Up</a>
              </button>
            </>
          )}
        </ul>
        <div className="hamburger">
          <div className="line" />
          <div className="line" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
