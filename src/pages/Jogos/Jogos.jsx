import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import { mock } from '../../mock/produtos.mock';
import './index.scss';

const Jogos = () => {
  const jogos = mock.filter((p) => p.tipo === 'jogo');

  return (
    <div className="jogos-page">
      <Nav />
      <section className="jogos-page__hero">
        <span className="jogos-page__tag">🎮 JOGOS</span>
        <h1>Catálogo de Jogos</h1>
        <p>RPG, ação, corrida e muito mais. Encontre seu próximo game favorito.</p>
      </section>

      <section className="jogos-page__filters">
        <span className="jogos-page__filter jogos-page__filter--active">Todos</span>
        <span className="jogos-page__filter">RPG</span>
        <span className="jogos-page__filter">Ação</span>
        <span className="jogos-page__filter">Corrida</span>
        <span className="jogos-page__filter">Adventure</span>
        <span className="jogos-page__filter">Battle Royale</span>
      </section>

      <section className="jogos-page__section">
        <div className="jogos-page__grid">
          {jogos.map((p) => (
            <ProdutoCard key={p.id} dados={p} />
          ))}
        </div>
      </section>

      <section className="jogos-page__promo">
        <h2>🏆 Top Rated em 2025</h2>
        <div className="jogos-page__ranking">
          {['Elden Ring', 'Baldur\'s Gate 3', 'Final Fantasy XVI', 'Starfield', 'Diablo IV'].map(
            (game, i) => (
              <div key={i} className="jogos-page__rank-item">
                <span className="jogos-page__rank-num">#{i + 1}</span>
                <span>{game}</span>
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jogos;
