import React from "react";
import student from "../static/images/student.png";
import { useSelector } from 'react-redux';

function capitalizeFirstLetter(string) {
    return(string[0].toUpperCase() + string.slice(1));
}

function WelcomeMessage() {

    const user = useSelector(state => state.user);
    const username = capitalizeFirstLetter(user.username);

    return (
        <section className="hero">
        <div className="main">
            <div className="content">
            <small>Website of  Our Bookstore</small>
            <h2>Welcome! {username}</h2>
            {
            username ?

            <>
            <p>
                To See Our Available Books Please Continue with the Buttons Below
            </p>
            <div className="btns">
                <button>
                    <a href="/books">Books</a>
                    <i className="fa-solid fa-arrow-right" />
                </button>
                <button>
                    <a href="/cart">Cart</a>
                </button>
            </div>
            </>


            :
            <>
            <p>
                Please Login or Register to See Our Special Offers Just For You!
            </p>
            <div className="btns">
                <button>
                    <a href="/login">Login</a>
                    <i className="fa-solid fa-arrow-right" />
                </button>
                <button>
                    <a href="/Registration">Create Account</a>
                </button>
            </div>
            </>

            }

            </div>
            <div className="img">
            <img
                src={student}
                alt=""
            />
            </div>
        </div>
        <div className="square-dot">
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
            <i className="fa-solid fa-square" />
        </div>
        <div className="orange-circle" />
        <div className="blue-circle" />
        </section>
    );
}


export default WelcomeMessage;
