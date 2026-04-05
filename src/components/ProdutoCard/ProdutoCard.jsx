import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const ProdutoCard = ({ dados }) => {
  return (
    <div className="card">
      <img src={dados.imagem} alt={dados.nome} />
      <div className="card__produto">
        <p>{dados.nome}</p>
        <button className="card__btn">
          <Link to={`/produto/${dados.id}`}>Ver Mais</Link>
        </button>
      </div>
    </div>
  );
};

export default ProdutoCard;
