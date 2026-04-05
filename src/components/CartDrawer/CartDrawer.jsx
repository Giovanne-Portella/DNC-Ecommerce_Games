import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import PayModal from '../PayModal/PayModal';
import './index.scss';

const CartDrawer = () => {
  const { items, removeFromCart, updateQty, clearCart, showCart, setShowCart, cartTotal } = useCart();
  const [showPay, setShowPay] = React.useState(false);

  if (!showCart) return null;

  const formatTotal = (val) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <div className="cart-drawer__overlay" onClick={() => setShowCart(false)} />
      <aside className="cart-drawer">
        <div className="cart-drawer__header">
          <h2>Meu Carrinho</h2>
          <button
            className="cart-drawer__close"
            onClick={() => setShowCart(false)}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Seu carrinho está vazio.</p>
            <Link
              to="/home"
              className="cart-drawer__continue"
              onClick={() => setShowCart(false)}
            >
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.id} className="cart-drawer__item">
                  <img src={item.imagem} alt={item.nome} className="cart-drawer__item-img" />
                  <div className="cart-drawer__item-info">
                    <p className="cart-drawer__item-name">{item.nome}</p>
                    <p className="cart-drawer__item-price">{item.preco}</p>
                    <div className="cart-drawer__qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="cart-drawer__remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remover item"
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__footer">
              <p className="cart-drawer__total">
                Total: <strong>{formatTotal(cartTotal)}</strong>
              </p>
              <Link
                to="/home"
                className="cart-drawer__btn cart-drawer__btn--outline"
                onClick={() => setShowCart(false)}
              >
                Continuar Comprando
              </Link>
              <button
                className="cart-drawer__btn cart-drawer__btn--primary"
                onClick={() => setShowPay(true)}
              >
                Finalizar Compra
              </button>
              <button className="cart-drawer__clear" onClick={clearCart}>
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </aside>

      {showPay && (
        <PayModal
          onClose={() => setShowPay(false)}
          onConfirm={() => { clearCart(); setShowCart(false); }}
        />
      )}
    </>
  );
};

export default CartDrawer;
