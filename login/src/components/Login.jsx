
import Ripples from 'react-ripples'
import Logo from '../imgs/logo.png'
import '../styles/Login.css'
import { MdLock, MdEmail,MdPerson } from "react-icons/md";
import React, { useState, useEffect} from 'react';
import axios from "axios";
const Login = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
          //api falsa aqui
        loginData
      );
      console.log(response.data); // mostra a resposta da API falsa no console
    } catch (error) {
      console.error(error);
      console.log('enviado - obs:o erro aparece pois não existe api')
      console.log(loginData)

    }
  };
  const handleSubmitCadastro = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        //api falsa aqui
        cadastroData
      );
      console.log(response.data); // mostra a resposta da API falsa no console
  
    } catch (error) {
      console.error(error);
      console.log('enviado - obs:o erro aparece pois não existe api')
      console.log(cadastroData)
    }
  };
  const [isActive, setIsActive] = useState(false); 
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const [concordo, setConcordo] = useState(true);
  
  const handleRegistro = () => {
    setIsActive(true);
  };
  
  const handleLogin = () => {
    setIsActive(false);
  };
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    lembrarSenha: lembrarSenha
  });
  
  const [cadastroData, setCadastroData] = useState({
    name: "",
    email: "",
    password: "",
    concordo: concordo
  });
  
  useEffect(() => {
    const emailRect = document.getElementById("emaillogin");
    const passwordRect = document.getElementById("passwordlogin");
    const emailRectr = document.getElementById("emailcad");
    const passwordRectr = document.getElementById("passwordcad");
    const nameReact = document.getElementById("name");
  
    if (loginData.email !== "" && loginData.email.length >= 11) {
      emailRect.setAttribute("fill", "#22AE75");
    } else {
      emailRect.setAttribute("fill", "#fff");
    }
  
    if (loginData.password !== "" && loginData.password.length >= 6) {
      passwordRect.setAttribute("fill", "#22AE75");
    } else {
      passwordRect.setAttribute("fill", "#fff");
    }
  
    if (cadastroData.email !== "" && cadastroData.email.length >= 11) {
      emailRectr.setAttribute("fill", "#22AE75");
    } else {
      emailRectr.setAttribute("fill", "#fff");
    }
  
    if (cadastroData.password !== "" && cadastroData.password.length >= 6) {
      passwordRectr.setAttribute("fill", "#22AE75");
    } else {
      passwordRectr.setAttribute("fill", "#fff");
    }
  
    if (cadastroData.name !== "" && cadastroData.name.length >= 6) {
      nameReact.setAttribute("fill", "#22AE75");
    } else {
      nameReact.setAttribute("fill", "#fff");
    }
  }, [loginData, cadastroData]);
  
  const handleLoginChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setLembrarSenha(checked);
    }
    setLoginData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
      lembrarSenha: type === "checkbox" ? checked : lembrarSenha,
    }));
  };

  const handleCadastroChange = (event) => {
    const { name, value } = event.target;
    setCadastroData((prevState) => ({ ...prevState, [name]: value }));
  };
  



  return (
    <>
    <div className={`card ${isActive ? 'active' : ''}`} >
      <div className='formbox login'>
        <img src={Logo} alt="Logo Site Mine" />
        <form onSubmit={handleSubmit}>
          <div className='inputbox'>
            <span className='icon'><MdEmail id='emaillogin'/></span>
            <input id="emaillogin" type='email'
      name="email"
      value={loginData.email}
      onChange={handleLoginChange} required minLength={11} />
            <label htmlFor="email">Email</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock id='passwordlogin'/></span>
            <input type='password' id="passwordlogin"
      name="password"
      value={loginData.password}
      onChange={handleLoginChange} required minLength={6}/>
            <label htmlFor="senhal">Senha</label>
          </div>
          <div className='lembrar'><label><input  type="checkbox"
  checked={lembrarSenha}
  onChange={(event) => setLembrarSenha(event.target.checked)} />Lembrar minha senha </label><a href="#">Esqueceu a Senha?</a></div>
          <Ripples className='ripplesub'><button type="submit" className='btn'>Entrar na Conta</button></Ripples>
          
          <div className='cadastrar'><p>Você não tem conta? </p><a href="#" onClick={handleRegistro}>Registrar</a></div>
        </form>
      </div>
      <div className='cadastro formbox'>
        <img src={Logo} alt="Logo Site Mine" />
        <form onSubmit={handleSubmitCadastro} >
        <div className='inputbox'>
            <span className='icon'><MdPerson id='name' /></span>
            <input  type="text"
      id="name"
      name="name"
      value={cadastroData.name}
      onChange={handleCadastroChange} required minLength={6} />
            <label htmlFor="nome">Nome de Usuário</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdEmail id='emailcad'/></span>
            <input  type="email"
      id="emailcad"
      name="email"
      value={cadastroData.email}
      onChange={handleCadastroChange} required minLength={11}/>
            <label htmlFor="email">Email</label>
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock id='passwordcad'/></span>
            <input type="password"
      id="passwordcad"
      name="password"
      value={cadastroData.password}
      onChange={handleCadastroChange} required minLength={6} />
            <label htmlFor="senhal">Senha</label>
          </div>
          <div className='lembrar'><label><input type='checkbox' checked={concordo}
  onChange={(event) => setConcordo(event.target.checked)} />Eu concordo com os Termos & Condições </label></div>
          <Ripples className="ripplesub"><button type="submit" className='btn'>Cadastrar-se</button></Ripples>
          
          <div className='registrar'><p>Você uma conta? </p><a href="#"onClick={handleLogin} >Login</a></div>
        </form>
      </div>
      

    </div>
    </>
  )
}

export default Login;