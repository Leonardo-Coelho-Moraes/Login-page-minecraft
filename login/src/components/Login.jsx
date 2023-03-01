
import Logo from '../imgs/logo.png'
import '../styles/Login.css'
import { MdLock, MdEmail,MdPerson } from "react-icons/md";
import React, { useState} from 'react';
const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegistro = () => {
    setIsActive(true);
  };
  const handleLogin = () => {
    setIsActive(false);
  };

  return (
    <>
    <div className={`card ${isActive ? 'active' : ''}`} >
      <div className='formbox login'>
        <img src={Logo} alt="Logo Site Mine" />
        <form >
          <div className='inputbox'>
            <span className='icon'><MdEmail/></span>
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock/></span>
            <input type="password" name="senhal" id="senhal" required />
            <label htmlFor="senhal">Senha</label>
          </div>
          <div className='lembrar'><label><input type="checkbox" />Lembrar minha senha </label><a href="#">Esqueceu a Senha?</a></div>
          <button type="submit" className='btn'>Entrar na Conta</button>
          
          <div className='cadastrar'><p>Você não tem conta? </p><a href="#" onClick={handleRegistro}>Registrar</a></div>
        </form>
      </div>
      <div className='cadastro formbox'>
        <img src={Logo} alt="Logo Site Mine" />
        <form >
        <div className='inputbox'>
            <span className='icon'><MdPerson/></span>
            <input type="text" name="nome" id="nome" required />
            <label htmlFor="nome">Nome de Usuário</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdEmail/></span>
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock/></span>
            <input type="password" name="senhal" id="senhal" required />
            <label htmlFor="senhal">Senha</label>
          </div>
          <div className='lembrar'><label><input type="checkbox" />Eu concordo com os Termos & Condições </label></div>
          <button type="submit" className='btn'>Cadastrar-se</button>
          
          <div className='registrar'><p>Você uma conta? </p><a href="#"onClick={handleLogin} >Login</a></div>
        </form>
      </div>
      

    </div>
    </>
  )
}

export default Login;