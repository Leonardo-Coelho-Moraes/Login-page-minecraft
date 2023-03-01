import React from 'react'
import Logo from '../imgs/logo.png'
import Style from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <>
    <header className={Style.header}>
    <a href='#' className={Style.logo}>
      <img src={Logo} alt="Logo Mine" /> <h1>MINE</h1>
      
    </a>
    <ul>
        
        <li><a href='#'>
          Fórum</a></li>
          <li><a href='#'>
          Sobre</a></li>
          <li><a href='#'>
          Mojang</a></li>
          <li><a href=''>
          Perguntas</a></li>
          <button><a href='#'> Entrar
          </a></button>
      </ul>
    </header>
    
    </>
  )
}

export default Navbar;