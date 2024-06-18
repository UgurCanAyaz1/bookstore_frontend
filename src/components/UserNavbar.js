import React from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";
import logo from "../static/images/logo.png";

function UserNavbar() {
  return (
    <nav className="navbar-2">
      <div className="logo">
        <div className="img">
          <img src={logo} alt="/" />
        </div>
        <div className="logo-header">
          <h4>
            <a href="/">Bookoe</a>
          </h4>
          <small>Book Store Website</small>
        </div>
      </div>
      <a href="/">Home</a>

      <div className="dropdown">
        <button className="dropbtn">Books</button>
        <div className="dropdown-content">
          <a href="/books/action">Action</a>
          <a href="/books/adventure">Adventure</a>
          <a href="/books/comedy">Comedy</a>
          <a href="/books/crime">Crime</a>
          <a href="/books/drama">Drama</a>
        </div>
      </div>
      <a href="/contact">Contact</a>
      <div className="nav-end">
        <button className="likebtn">
          <a href="/">
            <i className="fa-regular fa-heart" /> <span>35</span>
          </a>
        </button>
        <button className="cart">
          <a href="/cart">
            <i className="fa-solid fa-cart-shopping" /> <span>4</span>
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
  );
}

export default UserNavbar;
