import React from "react";
import "../static/css/style.css";
import logo from "../static/images/logo.png";

function Footer() {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div className="logo-description">
          <div className="logo">
            <div className="img">
              <img src={logo} alt="deneme" />
            </div>
            <div className="title">
              <h4>Bookie</h4>
              <small>Book Store Website</small>
            </div>
          </div>
          <div className="logo-body">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              voluptates eius quasi reiciendis recusandae provident veritatis
              sequi, dolores architecto dolor possimus quos
            </p>
          </div>
          <div className="social-links">
            <h4>Follow Us</h4>
            <ul className="links">
              <li>
                <button href="/">
                  <i className="fa-brands fa-facebook-f" />
                </button>
              </li>
              <li>
                <button href="/">
                  <i className="fa-brands fa-youtube" />
                </button>
              </li>
              <li>
                <button href="/">
                  <i className="fa-brands fa-twitter" />
                </button>
              </li>
              <li>
                <button href="/">
                  <i className="fa-brands fa-linkedin" />
                </button>
              </li>
              <li>
                <button href="/">
                  <i className="fa-brands fa-instagram" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="categories list">
          <h4>Book Categories</h4>
          <ul>
            <li>
              <a href="/books/action">Action</a>
            </li>
            <li>
              <a href="/books/adventure">Adventure</a>
            </li>
            <li>
              <a href="/books/comedy">Comedy</a>
            </li>
            <li>
              <a href="/books/crime">Crime</a>
            </li>
            <li>
              <a href="/books/drama">Drama</a>
            </li>
          </ul>
        </div>
        <div className="quick-links list">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/books">Books</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/registration">Sign Up</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/checkout">Checkout</a>
            </li>
          </ul>
        </div>
        <div className="our-store list">
          <h4>Our Store</h4>
          <div className="map" style={{ marginTop: "1rem" }}>
            <iframe
              title="deneme"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6310.594819201665!2d-122.42768319999999!3d37.73616639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e60a337d5f5%3A0xfa0bb626904e5ab2!2z4KSV4KWJ4KSy4KWH4KScIOCkueCkv-Cksiwg4KS44KS-4KSoIOCkq-CljeCksOCkvuCkguCkuOCkv-CkuOCljeCkleCliywg4KSV4KWI4KSy4KWA4KSr4KWL4KSw4KWN4KSo4KS_4KSv4KS-LCDgpK_gpYLgpKjgpL7gpIfgpJ_gpYfgpKEg4KS44KWN4KSf4KWH4KSf4KWN4oCN4KS4!5e0!3m2!1shi!2sin!4v1686917463994!5m2!1shi!2sin"
              height={70}
              style={{ width: "100%", border: "none", borderRadius: 5 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ul>
            <li>
              <a href="">
                <i className="fa-solid fa-location-dot" />
                832 Thompson Drive,San Fransisco CA 94 107,United States
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-phone" />
                +12 1345678991
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-envelope" />
                support@bookoe.id
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
