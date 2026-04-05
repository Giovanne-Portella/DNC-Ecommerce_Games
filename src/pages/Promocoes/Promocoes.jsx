import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { mock } from '../../mock/produtos.mock';
import './index.scss';

const Promocoes = () => {
  const emPromocao = mock.filter(p => p.desconto > 0);

  const calcDesconto = (precoNum, desconto) => {
    return (precoNum * (1 - desconto / 100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="promo-page">
      <Nav />
      <section className="promo-page__hero">
        <span className="promo-page__tag">🔥 OFERTAS IMPERDÍVEIS</span>
        <h1>Promoções GameVault</h1>
        <p>Economize em consoles, jogos e acessórios. Estoque limitado!</p>
        <div className="promo-page__countdown">
          <span>⏱ Aproveite antes que acabe!</span>
        </div>
      </section>

      {emPromocao.length > 0 ? (
        <section className="promo-page__grid-section">
          <h2>{emPromocao.length} produtos em promoção</h2>
          <div className="promo-page__grid">
            {emPromocao.map(produto => (
              <Link
                key={produto.id}
                to={`/produto/${produto.id}`}
                className="promo-page__card"
              >
                <div className="promo-page__badge">-{produto.desconto}%</div>
                <img src={produto.foto} alt={produto.nome} className="promo-page__img" />
                <div className="promo-page__info">
                  <h3>{produto.nome}</h3>
                  <p className="promo-page__original">
                    De: {produto.preco}
                  </p>
                  {produto.precoNum > 0 && (
                    <p className="promo-page__discounted">
                      Por: {calcDesconto(produto.precoNum, produto.desconto)}
                    </p>
                  )}
                  <span className="promo-page__cta">Ver Oferta →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="promo-page__empty">
          <p>Nenhuma promoção no momento. Volte em breve!</p>
        </div>
      )}

      <section className="promo-page__newsletter">
        <h2>📧 Receba Ofertas Exclusivas</h2>
        <p>Cadastre-se e seja o primeiro a saber das promoções mais quentes.</p>
        <form className="promo-page__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="seu@email.com" />
          <button type="submit">Quero Ofertas!</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Promocoes;
