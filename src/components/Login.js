import React from "react";
import "../static/css/style.css";

function Login() {
  return (
    <>
            <ul className="breadcrumb" style={{ listStyleType: "none", display: "flex", padding: 40, margin: 0 }}>
            <li style={{ marginRight: "10px" }}>
                <a href="/" style={{ color: "#6c5dd4" }}>Home</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
      <section className="login">
        <h3>Login</h3>
        <div className="login-form">
          <h4>Login</h4>
          <p>If you have an account with us, please log in.</p>
          <div className="input-form">
            <div className="input-field">
              <label htmlFor="email">Email *</label>
              <input type="email" name="" id="email" placeholder="Your Email" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Password"
              />
            </div>
            <p>
              Forgot Password ?<a href="/"> Click Here</a>
            </p>
            <button>Login Account</button>
            <p>
              Don't Have an Account ?{" "}
              <a href="/registration">Create Account</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
