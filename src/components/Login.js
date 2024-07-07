import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../static/css/style.css";
import { useDispatch } from 'react-redux';
import { SlicerLogin } from '../store/slices/userSlice';
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // Defining local function for login using redux action 
  const handleLogin = (user) => {
    dispatch(SlicerLogin(user));
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5234/api/user/LoginUser', values);

      // If authentication request is true, update user state and navigate user to home page
      if (response.data.authenticateResult === true) {

        const user = {
          username: values.username,
          authToken: response.data.authToken,
          authenticateResult: response.data.authenticateResult
        };

        // Update User state and save updated user state to local storage
        handleLogin(user); 

        toast.success(
          <>
            Welcome {user.username}!
            <br />
            Redirecting to Home Page in 4 seconds!
          </>
        );

        setTimeout(() => {
          // Navigate user to home page after successful login 
          navigate("/")
        }, 4000); 
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
        <ToastContainer 
        position="top-center" 
        autoClose={2000}
        draggable={false}
        pauseOnHover={false}
        containerId="containerB"
      />
      </section>
    </>
  );
};

export default Login;
