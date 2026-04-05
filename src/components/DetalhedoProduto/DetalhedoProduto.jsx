import React, { useState } from 'react';
import './index.scss';
import carrinhoDir from '../../assets/carrinhoDir.svg';
import CarrinhoModal from '../CarrinhoModal/CarrinhoModal';
import PayModal from '../PayModal/PayModal';

const DetalhedoProduto = ({ dados }) => {
  const [showCart, setShowCart] = useState(false);
  const [showPay, setShowPay] = useState(false);

  if (!dados) {
    return <p className="detalhe-produto__not-found">Produto não encontrado.</p>;
  }

  const coresValidas = dados.cor.filter(Boolean);

  return (
    <div className="detalhe-produto">
      <div className="detalhe-produto__esquerdo">
        <div className="detalhe-produto__card">
          <img className="detalhe-produto__imagem" src={dados.imagem} alt={dados.nome} />
          <p>{dados.nome}</p>
        </div>
        <div className="detalhe-produto__descricao border-bottom">
          <h2>Descrição</h2>
          <p>{dados.descricao}</p>
        </div>
      </div>

      <div className="detalhe-produto__direito">
        <h2 className="border-bottom">{dados.nome}</h2>
        <div className="detalhe-produto__preco">
          <p>{dados.preco}</p>
        </div>
        <div className="detalhe-produto__cor">
          Cor: {coresValidas.length > 0 ? coresValidas.join(', ') : 'Padrão'}
        </div>
        {coresValidas.length > 0 && (
          <div className="detalhe-produto__cubocor">
            {coresValidas.map((cor, index) => (
              <div
                key={index}
                className="detalhe-produto__swatch"
                style={{ backgroundColor: cor }}
              />
            ))}
          </div>
        )}
        <button
          className="detalhe-produto__btn-carrinho"
          type="button"
          onClick={() => setShowCart(true)}
        >
          <img src={carrinhoDir} alt="" className="detalhe-produto__btn-icon" />
          Adicionar ao Carrinho
        </button>
      </div>

      {showCart && (
        <CarrinhoModal
          dados={dados}
          onClose={() => setShowCart(false)}
          onFinalize={() => {
            setShowCart(false);
            setShowPay(true);
          }}
        />
      )}

      {showPay && (
        <PayModal
          onClose={() => setShowPay(false)}
          onConfirm={() => {}}
        />
      )}
    </div>
  );
};

export default DetalhedoProduto;

