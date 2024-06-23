import React from "react";
import {jwtDecode} from 'jwt-decode';
import student from "../static/images/student.png";
import { useSelector } from 'react-redux';

function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return '';
    }
    return string[0].toUpperCase() + string.slice(1);
}

function WelcomeMessage() {

    // Getting user state from redux
    const user = useSelector(state => state.user);
    const authToken = user.authToken;

    // by decoding the jwt returning true if the user is admin
    const isAdmin = () => {
        if (!authToken) return false;
        try {
            const decodedToken = jwtDecode(authToken);
            return decodedToken.Role === "admin";
        } catch (error) {
            console.error('Invalid token', error);
            return false;
        }
    };

    // if the user is admin, role is set to true. This is used at conditional rendering
    const role = isAdmin();

    // Capitalize initial letter of the username
    const username = capitalizeFirstLetter(user.username);

    return (
        <section className="hero">
        <div className="main">
            <div className="content">
            <small>Website of  Our Bookstore</small>
            <h2>Welcome! {username}</h2>

            {/* Conditional Rendering of the username */}
            {/* If username exists show books and cart endpoints */}
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
                {
                    role ?
                    <button>
                        <a href="/admin">Admin Panel</a>
                    </button>
                    :
                    null
                }
            </div>
            </>

            // If username does not exist, show login and sign up endpoints
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
