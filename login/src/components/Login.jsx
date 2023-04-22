
import Ripples from 'react-ripples'
import Logo from '../imgs/logo.png'
import '../styles/Login.css'
import { MdLock, MdEmail,MdPerson } from "react-icons/md";
import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
const Login = () => {
 
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState:{errors} } = useForm();
  const { register: registerCadastro, handleSubmit: handleSubmitCadastro,  formState:{errors: errorsCadastro}} = useForm();

  const onSubmitLogin = (data) =>{ console.log(data)};
  const onSubmitCadastro = (data) =>{ console.log(data)};

  const enviarLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
          //api falsa aqui
          onSubmitLogin
      );
      console.log(response.data); // mostra a resposta da API falsa no console
      alert('Enviado com Sucesso')
    } catch (error) {
      console.error(error);
      alert('Não foi possível enviar =(')
    }
  };
  const enviarCadastro = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        //api falsa aqui
        onSubmitCadastro
      );
      console.log(response.data); // mostra a resposta da API falsa no console
      alert('Enviado com Sucesso')
    } catch (error) {
      console.error(error);
      alert('Não foi possível enviar =(')
    }
  };

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
        <form onSubmit={enviarLogin}>
          <div className='inputbox'>
            <span className='icon'><MdEmail /></span>
            <input name='email' value={null} type='email' {...registerLogin("email", {required: true})}/>
            <label htmlFor="email">Email</label>
            {errors.email && <p className="error">Campo obrigatório</p>}
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock /></span>
            <input name='senhal' type='password' {...registerLogin("password", {required: true})}  />
            <label htmlFor="senhal">Senha</label>
            {errors.password && <p className="error">Campo obrigatório</p>}
          </div>
          <div className='lembrar'><label><input  type="checkbox" {...registerLogin("lembrarsenha")} />Lembrar minha senha </label><a href="#">Esqueceu a Senha?</a></div>
          <Ripples className='ripplesub'><button type="submit" className='btn' onClick={() => handleSubmitLogin(onSubmitLogin)()} >Entrar na Conta</button></Ripples>
          
          <div className='cadastrar'><p>Você não tem conta? </p><a href="#" onClick={handleRegistro}>Registrar</a></div>
        </form>
      </div>
      <div className='cadastro formbox'>
        <img src={Logo} alt="Logo Site Mine" />
        <form onSubmit={enviarCadastro} >
        <div className='inputbox'>
            <span className='icon'><MdPerson/></span>
            <input name='nome'  type="text" {...registerCadastro("name", {required: true})}/>
            <label htmlFor="nome">Nome de Usuário</label>
            {errorsCadastro.name && <p className="error">Campo obrigatório</p>}
          </div>
          <div className='inputbox'>
            <span className='icon'><MdEmail/></span>
            <input name='email'  type="email"  {...registerCadastro("email", {required: true})}/>
            <label htmlFor="email">Email</label>
            {errorsCadastro.email && <p className="error">Campo obrigatório</p>}
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock /></span>
            <input name='senhac' type="password"  {...registerCadastro("password", {required: true})}  />
            <label htmlFor="senhac">Senha</label>
            {errorsCadastro.password && <p className="error">Campo obrigatório</p>}
          </div>
          <div className='inputbox'>
            <span className='icon'><MdLock /></span>
            <input name='senhac' type="password"  {...registerCadastro("password", {required: true})}  />
            <label htmlFor="senhac">Comfirmar Senha</label>
            {errorsCadastro.password && <p className="error">Campo obrigatório</p>}
          </div>
          <div className='lembrar'><label><input type='checkbox' {...registerCadastro("termosCondicao", {required: true})}/> Eu concordo com os Termos & Condições </label></div>
          <Ripples className="ripplesub"><button type="submit" className='btn' onClick={() => handleSubmitCadastro(onSubmitCadastro)()}>Cadastrar-se</button></Ripples>
          
          <div className='registrar'><p>Você uma conta? </p><a href="#" onClick={handleLogin} >Login</a></div>
        </form>
      </div>
      

    </div>
    </>
  )
}

export default Login;