import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/DncDetalhe.svg';
import carrinho from '../../assets/carrinhoEsq.svg';
import lupa from '../../assets/lupa.svg';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__top">
        <img src={logo} alt="DNC Games" className="nav__logo" />
        <div className="nav__search">
          <img src={lupa} alt="pesquisar" className="nav__search-icon" />
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="nav__input"
          />
        </div>
        <img src={carrinho} alt="carrinho" className="nav__carrinho" />
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
          <li className="nav__item nav__item--bold">Novidades</li>
          <li className="nav__item">Jogos</li>
          <li className="nav__item">Video Games</li>
          <li className="nav__item">Mesas Gamer</li>
          <li className="nav__item">Promoções</li>
          <li className="nav__item">Atendimento</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
