import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../static/css/style.css";

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const onSubmit = async (values) => {
  try {
    const response = await axios.post('http://localhost:5234/api/user/LoginUser', values); // URL'yi uygun şekilde değiştirin
    console.log(response.data);
    // Başarılı giriş işleminden sonra yapılacaklar
  } catch (error) {
    console.error('Login error', error);
  }
};

const Login = () => {
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="input-form">
              <div className="input-field">
                <label htmlFor="username">Username *</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your Username"
                />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password *</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <p>
                Forgot Password? <a href="/">Click Here</a>
              </p>
              <button type="submit">Login Account</button>
              <p>
                Don't Have an Account? <a href="/registration">Create Account</a>
              </p>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Login;
