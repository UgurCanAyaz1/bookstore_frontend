import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../static/css/style.css";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Initial values for Formik
const initialValues = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Username should not contain special characters')
    .required('Username is required'),
  firstname: Yup.string()
    .matches(/^[a-zA-Z]*$/, 'First name should only contain letters')
    .required('First name is required'),
  lastname: Yup.string()
    .matches(/^[a-zA-Z]*$/, 'Last name should only contain letters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]*$/, 'Password should not contain special characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm Password is required'),
});


const Registration = () => {

  const navigate = useNavigate();

  // function that will be processed once form is submitted
  // function sends a put request, resulting in creating a new user with default role "user"
  const onSubmit = async (values) => {
    try {
      const response = await axios.put('http://localhost:5234/api/user/AddUser', {
        firstName: values.firstname,
        lastName: values.lastname,
        userName: values.username,
        emailAddress: values.email,
        passwordHash: values.password,
      });
      console.log(response.data);

      // Show success toast notification
      toast.success('Registration Successful! Redirecting to Login Page in 5 seconds.');

      // Start the timeout after a successful payment
      setTimeout(() => {
        navigate("/login");
      }, 5000); 

    } catch (error) {
      console.error('Registration error', error);
    }
  };


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
          <p>If you don't have an account with us, please create a new account.</p>
          <Formik

            // Setting Initial values for Formik
            initialValues={initialValues}

            // Setting Validation Schema for Formik
            validationSchema={validationSchema}

            // Function that will be processed once form is submitted
            onSubmit={onSubmit}
          >
            <Form className="input-form">
              <div className="input-field">
                <label htmlFor="username">Username *</label>
                <Field type="text" id="username" name="username" placeholder="Your Username"/>
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="input-field">
                <label htmlFor="firstname">First name *</label>
                <Field type="text" id="firstname" name="firstname" placeholder="Your First Name"/>
                <ErrorMessage name="firstname" component="div" className="error" />
              </div>
              <div className="input-field">
                <label htmlFor="lastname">Last name *</label>
                <Field type="text" id="lastname" name="lastname" placeholder="Your Last Name"/>
                <ErrorMessage name="lastname" component="div" className="error" />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email *</label>
                <Field type="email" id="email" name="email" placeholder="Your Email"/>
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password *</label>
                <Field type="password" id="password" name="password" placeholder="Password"/>
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className="input-field">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our <a href="/">privacy policy</a>.
              </p>
              <button type="submit">Create Account</button>
              <p>
                Already have an account? <a href="/login">Login Now</a>
              </p>
            </Form>
          </Formik>
        </div>
      </section>
      <ToastContainer 
        position="top-center" 
        autoClose={2000}
        draggable={false}
        pauseOnHover={false}
        containerId="containerB"
      />
    </>
  );
};

export default Registration;
