import React from 'react';
import './index.scss';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner__particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="hero-banner__particle" />
        ))}
      </div>
      <div className="hero-banner__content">
        <p className="hero-banner__eyebrow">⚡ LANÇAMENTOS 2025</p>
        <h1 className="hero-banner__title">
          Bem-vindo à<br />
          <span>DNC Games</span>
        </h1>
        <p className="hero-banner__subtitle">
          Os melhores consoles, jogos e acessórios para a sua configuração gamer.
          Frete grátis acima de R$ 299.
        </p>
        <div className="hero-banner__badges">
          <span>🎮 &nbsp;Estoque garantido</span>
          <span>🚀 &nbsp;Entrega expressa</span>
          <span>🔒 &nbsp;Compra segura</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
