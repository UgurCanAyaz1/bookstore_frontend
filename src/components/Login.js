import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../static/css/style.css";
import { useDispatch, useSelector } from 'react-redux';
import { SlicerLogin } from '../store/slices/userSlice';
import { useNavigate } from "react-router-dom"

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = (user) => {
    dispatch(SlicerLogin(user));
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5234/api/user/LoginUser', values);
      if (response.data.authenticateResult === true) {

        const user = {
          username: values.username,
          authToken: response.data.authToken,
          authenticateResult: response.data.authenticateResult
        };

        // Update User state
        handleLogin(user); 
        navigate("/")
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

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
