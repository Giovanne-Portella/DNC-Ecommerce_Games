import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const CarrinhoModal = ({ dados, onClose, onFinalize }) => {
  if (!dados) return null;

  return (
    <div className="cart-modal" onClick={onClose}>
      <div className="cart-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal__left">
          <img src={dados.imagem} alt={dados.nome} />
        </div>
        <div className="cart-modal__right">
          <h2 className="cart-modal__title">Meu Carrinho</h2>
          <h1 className="cart-modal__name">{dados.nome}</h1>
          <p className="cart-modal__price">{dados.preco}</p>
          <p className="cart-modal__color-label">
            Cor: {dados.cor.filter(Boolean).join(', ') || 'Padrão'}
          </p>
          <div className="cart-modal__swatches">
            {dados.cor.filter(Boolean).map((cor, index) => (
              <span
                key={index}
                className="cart-modal__swatch"
                style={{ backgroundColor: cor }}
              />
            ))}
          </div>
          <div className="cart-modal__actions">
            <Link to="/home" className="cart-modal__btn cart-modal__btn--primary">
              Continuar Comprando
            </Link>
            <button
              type="button"
              className="cart-modal__btn cart-modal__btn--secondary"
              onClick={onFinalize}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrinhoModal;
