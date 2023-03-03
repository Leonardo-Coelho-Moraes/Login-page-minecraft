
import Logo from '../imgs/logo.png'
import '../styles/Login.css'
import { MdLock, MdEmail,MdPerson } from "react-icons/md";
import React, { useState, useEffect} from 'react';
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('enviou')
  }
  

  const handleRegistro = () => {
    setIsActive(true);
  };
  const handleLogin = () => {
    setIsActive(false);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailcad, setEmailcad] = useState("");
  const [passwordcad, setPasswordcad] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const emailRect = document.getElementById("emaillogin");
    const passwordRect = document.getElementById("passwordlogin");
    const emailRectr = document.getElementById("emailcad");
    const passwordRectr = document.getElementById("passwordcad");
    const nameReact = document.getElementById("name");

    if (email !== "" && email.length >= 11) {
      emailRect.setAttribute("fill", "#22AE75");
    } else {
      emailRect.setAttribute("fill", "#fff");
    }

    if (password !== "" && password.length >= 6) {
      passwordRect.setAttribute("fill", "#22AE75");
    } else {
      passwordRect.setAttribute("fill", "#fff");
    }

    if (emailcad !== "" && emailcad.length >= 11) {
      emailRectr.setAttribute("fill", "#22AE75");
    } else {
      emailRectr.setAttribute("fill", "#fff");
    }

    if (passwordcad !== "" && passwordcad.length >= 6) {
      passwordRectr.setAttribute("fill", "#22AE75");
    } else {
      passwordRectr.setAttribute("fill", "#fff");
    }
    
    if (name !== "" && name.length >= 6) {
      nameReact.setAttribute("fill", "#22AE75");
    } else {
      nameReact.setAttribute("fill", "#fff");
    }
  }, [email, password, name, emailcad, passwordcad]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange2 = (event) => {
    setEmailcad(event.target.value);
  };

  const handlePasswordChange2 = (event) => {
    setPasswordcad(event.target.value);
  };
  
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };




  return (
    <>
    <div className={`card ${isActive ? 'active' : ''}`} >
      <div className='formbox login'>
        <img src={Logo} alt="Logo Site Mine" />
        <form onSubmit={handleSubmit}>
          <div className='inputbox'>
            <span className='icon'><MdEmail id='emaillogin'/></span>
            <input type="email" name="email" id="email" required minLength={11} onChange={handleEmailChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock id='passwordlogin'/></span>
            <input type="password" name="senhal" id="senhal" required minLength={6} onChange={handlePasswordChange}/>
            <label htmlFor="senhal">Senha</label>
          </div>
          <div className='lembrar'><label><input type="checkbox" />Lembrar minha senha </label><a href="#">Esqueceu a Senha?</a></div>
          <button type="submit" className='btn'>Entrar na Conta</button>
          
          <div className='cadastrar'><p>Você não tem conta? </p><a href="#" onClick={handleRegistro}>Registrar</a></div>
        </form>
      </div>
      <div className='cadastro formbox'>
        <img src={Logo} alt="Logo Site Mine" />
        <form onSubmit={handleSubmit} >
        <div className='inputbox'>
            <span className='icon'><MdPerson id='name' /></span>
            <input type="text" name="nome" id="nome" required minLength={6} onChange={handleNameChange} />
            <label htmlFor="nome">Nome de Usuário</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdEmail id='emailcad'/></span>
            <input type="email" name="emailcad" id="emailcad" required minLength={11} onChange={handleEmailChange2}/>
            <label htmlFor="email">Email</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock id='passwordcad'/></span>
            <input type="password" name="senhacad" id="senhacad" required minLength={6} onChange={handlePasswordChange2}/>
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