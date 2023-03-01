import React from 'react'
import Navbar from './Navbar';
import Login from "./Login";
import Footer from "./Footer";
const Container = () => {
  return (
    <section>
         <Navbar/>
    <Login/>
    <Footer/>
    </section>
  )
}

export default Container;