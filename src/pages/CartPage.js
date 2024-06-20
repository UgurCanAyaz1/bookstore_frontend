import React from 'react'
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer'
import Cart from '../components/Cart';
import CartSubtotal from '../components/CartSubtotal';

function CartPage() {
  return (
    <>
    <UserNavbar/>
    <Cart/>
    <CartSubtotal/>
    <Footer/>
    </>
  )
}

export default CartPage