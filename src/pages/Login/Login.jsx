import React, { useState } from 'react';
import logo from "../../assets/DncDetalhe.svg";
import { Link } from 'react-router-dom';

import './index.scss';


const Login = () => {

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let cpfValidSubmit = true;
    let passwordValidSubmit = true;


    if (cpf.trim() === '') {
      setCpfError('Por favor, insira seu CPF.');
      cpfValidSubmit = false;
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setCpfError('Por favor, insira um CPF válido.');
      cpfValidSubmit = false;
    } else {
      setCpfError('');
    }

    if (password.trim() === '') {
      setPasswordError('Por favor, insira sua senha.');
      passwordValidSubmit = false;
    } else {
      setPasswordError('');
    }

    if (cpfValidSubmit && !cpfError) {
      setCpfError('');
    }

    if (cpfValidSubmit && passwordValidSubmit) {
      setIsConfirmed(true);
      setTimeout(() => {
        setIsConfirmed(true);
        console.log('Login realizado com sucesso!');
        setIsSubmitted(true);
      }, 2000);
    } else {
      setIsSubmitted(true);
    }
  };
  return (
    <div>
      <section className="login no-scroll">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 id='titulo_login'>Acesse com seu login ou cadastre-se!</h1>
          <h2>Você pode entrar com o seu CPF</h2>
          <div className="login__input-wrapper">
            <label htmlFor="cpf">Digite seu CPF:</label>
            <input
              type="text"
              placeholder="000.000.000-00"
              id="cpf"
              className="login__input-name"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            {cpfError && <p className="login__error">{cpfError}</p>}
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="login__error">{passwordError}</p>}
          </div>
          {isSubmitted && isConfirmed ? (
            <Link to={`/Home/`}>
              <button id='buttonEntrar'>Entrar</button>
            </Link>
          ) : (
            <button id='buttonEntrar' type="submit">Entrar</button>
          )}


        </form>
        {isConfirmed && (
          <p>Login realizado com sucesso!</p>
        )}
      </section>
    </div>
  );
};
export default Login;

