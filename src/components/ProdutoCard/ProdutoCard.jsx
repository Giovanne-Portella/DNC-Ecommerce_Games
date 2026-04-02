import React from 'react';
import {Link} from 'react-router-dom';
import '../ProdutoCard/index.scss';

export const ProdutoCard = ({dados}) => {
  return (
    <div className='card'>
      <img src={dados.imagem} alt="model" />
      <div className='card__produto'>
        <p>{dados.nome}</p>
        <button id='botaoCard'>
          <Link to={`/produto/${dados.id}`}>Ver Mais</Link>
        </button>
      </div>
    </div>
  )
}

export default ProdutoCard