import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/DncDetalhe.svg';
import './index.scss';

const Login = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!cpf.trim()) {
      setCpfError('Por favor, insira seu CPF.');
      valid = false;
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setCpfError('Por favor, insira um CPF válido.');
      valid = false;
    } else {
      setCpfError('');
    }

    if (!password.trim()) {
      setPasswordError('Por favor, insira sua senha.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigate('/home');
    }
  };

  return (
    <div className="login">
      <nav className="login__nav">
        <img src={logo} alt="DNC Games" />
      </nav>
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Acesse com seu login ou cadastre-se!</h1>
        <h2 className="login__subtitle">Você pode entrar com o seu CPF</h2>
        <div className="login__input-wrapper">
          <label htmlFor="cpf">Digite seu CPF:</label>
          <input
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
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
        <button className="login__btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;

