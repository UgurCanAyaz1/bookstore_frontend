import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../static/css/style.css'
import '../static/css/book-filter.css'
import Login from '../components/Login';




function LoginPage() {
  return (
    <>
    <Navbar/>
    <Login/>
    <Footer/>
    </>
  )
}

export default LoginPage