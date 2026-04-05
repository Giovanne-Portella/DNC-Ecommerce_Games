import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './index.scss';
import logo from '../../assets/DncDetalhe.svg';
import carrinho from '../../assets/carrinhoEsq.svg';
import lupa from '../../assets/lupa.svg';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setShowCart } = useCart();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      navigate(`/home?q=${encodeURIComponent(e.target.value.trim())}`);
      setMenuOpen(false);
    }
  };

  const handleSearchIcon = () => {
    const val = inputRef.current?.value.trim();
    if (val) navigate(`/home?q=${encodeURIComponent(val)}`);
    else inputRef.current?.focus();
  };

  return (
    <nav className="nav">
      <div className="nav__top">
        <Link to="/home" className="nav__logo-link">
          <img src={logo} alt="DNC Games" className="nav__logo" />
        </Link>
        <div className="nav__search">
          <button className="nav__search-btn" onClick={handleSearchIcon} aria-label="Pesquisar">
            <img src={lupa} alt="pesquisar" className="nav__search-icon" />
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="O que você está procurando?"
            className="nav__input"
            onKeyDown={handleSearch}
          />
        </div>
        <button className="nav__cart-btn" onClick={() => setShowCart(true)} aria-label="Abrir carrinho">
          <img src={carrinho} alt="carrinho" className="nav__carrinho" />
          {cartCount > 0 && <span className="nav__badge">{cartCount}</span>}
        </button>
        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav__menu${menuOpen ? ' nav__menu--open' : ''}`}>
        <ul>
          <li className="nav__item nav__item--bold">
            <Link to="/novidades" onClick={() => setMenuOpen(false)}>Novidades</Link>
          </li>
          <li className="nav__item">
            <Link to="/jogos" onClick={() => setMenuOpen(false)}>Jogos</Link>
          </li>
          <li className="nav__item">
            <Link to="/videogames" onClick={() => setMenuOpen(false)}>Video Games</Link>
          </li>
          <li className="nav__item">
            <Link to="/mesas-gamer" onClick={() => setMenuOpen(false)}>Mesas Gamer</Link>
          </li>
          <li className="nav__item">
            <Link to="/promocoes" onClick={() => setMenuOpen(false)}>Promoções</Link>
          </li>
          <li className="nav__item">
            <Link to="/atendimento" onClick={() => setMenuOpen(false)}>Atendimento</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
