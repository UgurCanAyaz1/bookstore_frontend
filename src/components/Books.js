import React from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";


function Books() {

  return (
    <div className="book-collections">
      <h4>Books</h4>
      <div className="books">
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../static/images/book-1.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>The Giver</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-2.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>The Wright ..</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-5.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>To Kill a ...</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-6.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>Harry Potter</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-7.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>Heroes of ...</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-9.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>The ruins of...</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-10.jpg" alt="" />
            </a>
            <button className="like" id="likebtn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>Percy Jackson</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
        <div className="book-card">
          <div className="img">
            <a href="book-detail.html">
              <img src="../images/book-11.jpg" alt="" />
            </a>
            <button id="likebtn" className="like">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
          <h5>Clever Land</h5>
          <small>
            <a href="">Adventure,</a>
            <a href="">Thriller,</a>
            <a href="">Drama</a>
          </small>
          <div className="star-rating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="data-shown">
          <p>Showing 8 from 50 data</p>
        </div>
        <div className="pagination">
          <button>
            <i className="fa fa-chevron-left" />
            Previous
          </button>
          <div className="number">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
          </div>
          <button>
            Next
            <i className="fa fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Books;
