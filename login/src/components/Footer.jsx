import React from 'react'
import { TbPower,TbUser, TbDeviceGamepad2,TbMoodKid} from "react-icons/tb";
import { BsPhoneVibrate } from "react-icons/bs";

import Style from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={Style.footer}>
    <div className={Style.ul}>
      <div className={Style.li}>
        <a href="#">
          <TbPower/>
          <h2>Jogue também offline</h2>
        </a>
      </div>
      <div className={Style.li}>
        <a href="#">
          <TbUser/>
          <h2>67 jogadores</h2>
        </a>
      </div>
      <div className={Style.li}>
        <a href="#">
          <TbDeviceGamepad2/>
          <h2>Compatível com uso remoto</h2>
        </a>
      </div >
      <div className={Style.li}>
        <a href="#">
          <BsPhoneVibrate/>
          <h2>Vibração no controle</h2>
        </a>
      </div >
      <div className={Style.li}>
        <a href="#">
          <TbMoodKid/>
          <h2>Permitido para menores</h2>
        </a>
      </div>
      
    </div>
    
    </footer>
  )
}

export default Footer;