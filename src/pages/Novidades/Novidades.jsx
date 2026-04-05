import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import { mock } from '../../mock/produtos.mock';
import './index.scss';

const Novidades = () => {
  const novidades = mock.filter((p) => p.novidade);
  const destaques = mock.slice(0, 3);

  return (
    <div className="novidades-page">
      <Nav />
      <section className="novidades-page__hero">
        <span className="novidades-page__tag">✨ NOVIDADES</span>
        <h1>O que há de novo no universo gamer</h1>
        <p>Fique por dentro dos lançamentos mais quentes do mercado</p>
      </section>

      <section className="novidades-page__section">
        <h2>🔥 Recém chegados</h2>
        <div className="novidades-page__grid">
          {novidades.length > 0
            ? novidades.map((p) => <ProdutoCard key={p.id} dados={p} />)
            : destaques.map((p) => <ProdutoCard key={p.id} dados={p} />)}
        </div>
      </section>

      <section className="novidades-page__banner">
        <div className="novidades-page__banner-content">
          <h2>🎮 Game Pass Ultimate</h2>
          <p>Mais de 100 jogos inclusos por uma mensalidade. Jogue no console, PC e mobile.</p>
          <span className="novidades-page__pill">A partir de R$ 44,99/mês</span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Novidades;
