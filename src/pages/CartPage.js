import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Cart from '../components/Cart';
import CartSubtotal from '../components/CartSubtotal';

function CartPage() {
  return (
    <>
    <Navbar/>
    <Cart/>
    <CartSubtotal/>
    <Footer/>
    </>
  )
}

export default CartPage