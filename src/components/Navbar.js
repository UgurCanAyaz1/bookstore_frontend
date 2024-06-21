import React from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";
import logo from "../static/images/logo.png";
import { SlicerLogout } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

  const dispatch = useDispatch();

  const handleLogOut = (user) => {
    dispatch(SlicerLogout(user));
  };
  const user = useSelector(state => state.user);
  const authenticateResult = user.authenticateResult;
  const cartCount = useSelector(state => state.cart?.basketCount || 0);

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
                    <a href="/">
                      <i className="fa-regular fa-heart" /> <span>35</span>
                    </a>
                  </button>
                  <button className="cart">
                    <a href="/cart">
                      <i className="fa-solid fa-cart-shopping" /> <span>{cartCount}</span>
                    </a>
                  </button>
                  <div className="profile-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM0o_5tIn0DAmbB2wKS4GvurHctTwxD5om2vi4NOsj1ODDSGULrviZ-QV3ul8JYEMfO0&usqp=CAU"
                      alt=""
                    />
                  </div>
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
