import { React, useState} from 'react'
import Logo from '../imgs/logo.png'
import Style from '../styles/Navbar.module.css'
import Ripples from 'react-ripples'
const Navbar = () => {
  const [IsMenuActive, setIsMenuActive] = useState(true)

  

  return (
    <>
    <header className={`header ${Style.header} ${!IsMenuActive? 'active' : ''}`}>
    <a href='#' className={Style.logo}>
      <img src={Logo} alt="Logo Mine" /> <h1>MINE</h1>
      
    </a>
    <ul className={` ${!IsMenuActive? 'active' : ''}`}>
        
        <li><a href='#'>
          Fórum</a></li>
          <li><a href='#'>
          Sobre</a></li>
          <li><a href='#'>
          Mojang</a></li>
          <li><a href=''>
          Perguntas</a></li>
          <Ripples className={Style.entrar}>
            <button>Entrar</button>
          </Ripples>
      </ul>
      <div className={`mobile-menu ${!IsMenuActive? 'active' : ''}`} onClick={() => {!IsMenuActive? setIsMenuActive(true) : setIsMenuActive(false)}}>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
      </div>
    </header>
    
    </>
  )
}

export default Navbar;