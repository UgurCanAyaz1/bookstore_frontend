import React from "react";
import "../static/css/style.css";

function Registration() {
  return (
    <>
    <ul className="breadcrumb" style={{ listStyleType: "none", display: "flex", padding: 40, margin: 0 }}>
    <li style={{ marginRight: "10px" }}>
        <a href="/" style={{ color: "#6c5dd4" }}>Home</a>
    </li>
    <li>
        <a href="/registration">Registration</a>
    </li>
</ul>
    <section className="registration">
      <h3>Registration</h3>
      <div className="registration-form">
        <h4>Create New Account</h4>
        <p>If you don't have an account with us, Please Create new account.</p>
        <div className="input-form">
          <div className="input-field">
            <label htmlFor="name">Username *</label>
            <input type="text" name="" id="name" placeholder="Your Name" />
          </div>
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
          <div className="input-field">
            <label htmlFor="cpassword">Confirm Password *</label>
            <input
              type="password"
              name=""
              id="cpassword"
              placeholder="Confirm Password"
            />
          </div>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="/">privacy policy</a>
          </p>
          <button>Create Account</button>
          <p>
            Already Have an Account ? <a href="login.html">Login Now</a>
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Registration;
