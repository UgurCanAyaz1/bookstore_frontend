import React from 'react'
import Footer from '../components/Footer';
import UserNavbar from '../components/UserNavbar';
import '../static/css/style.css'
import '../static/css/book-filter.css'
import Login from '../components/Login';




function LoginPage() {
  return (
    <>
    <UserNavbar/>
    <Login/>
    <Footer/>
    </>
  )
}

export default LoginPage