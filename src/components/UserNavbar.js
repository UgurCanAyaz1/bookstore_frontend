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
        <div className="title">
          <h4>
            Bookoe
            <i className="fa-solid fa-grid" />
          </h4>
          <small>Book Store Website</small>
        </div>
      </div>
      <div className="search-box">
        <div className="search-field">
          <input type="text" placeholder="Search over 30 million Book titles" />
          <button className="search-icon">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <div className="nav-end">
        <button className="likebtn">
          <i className="fa-regular fa-heart" /> <span>35</span>
        </button>
        <button className="cart">
          <a href="cart-item.html">
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
