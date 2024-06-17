import React from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";
import logo from "../static/images/logo.png";

function HomeNavbar() {
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
            <a href="../pages/service.html">Service</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="../pages/book-filter.html">Books</a>
          </li>
          <button className="login">
            <a href="/login">Log In</a>
          </button>
          <button className="signup">
            <i className="fa-solid fa-user" />
            <a href="/registration">Sign Up</a>
          </button>
        </ul>
        <div className="hamburger">
          <div className="line" />
          <div className="line" />
        </div>
      </nav>
    </header>
  );
}

export default HomeNavbar;
