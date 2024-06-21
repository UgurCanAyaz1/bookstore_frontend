import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../static/css/style.css'
import '../static/css/book-filter.css'
import WelcomeMessage from '../components/WelcomeMessage';


function HomePage() {
  return (
    <>
    <Navbar/>
    <WelcomeMessage/>
    <Footer/>
    </>
  )
}

export default HomePage