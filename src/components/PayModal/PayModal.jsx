import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';

const PayModal = ({ onClose, onConfirm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onConfirm(data);
    onClose();
  };

  return (
    <div className="pay-modal" onClick={onClose}>
      <div className="pay-modal__content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)} className="pay-modal__form">
          <h1 className="pay-modal__title">Finalizar compra:</h1>

          <label className="pay-modal__label">Nome completo:</label>
          <input
            placeholder="Digite seu nome"
            className="pay-modal__input"
            {...register('firstName', { required: true, minLength: 3, maxLength: 50 })}
          />
          {errors.firstName && <span className="pay-modal__error">Nome inválido (mín. 3 caracteres)</span>}

          <label className="pay-modal__label">CPF:</label>
          <input
            placeholder="000.000.000-00"
            type="text"
            className="pay-modal__input"
            {...register('CPF', {
              required: true,
              pattern: /^(\d{3}\.){2}\d{3}-\d{2}$/,
            })}
          />
          {errors.CPF && <span className="pay-modal__error">CPF inválido (ex: 000.000.000-00)</span>}

          <label className="pay-modal__label">Endereço:</label>
          <input
            placeholder="Rua, número, bairro, cidade"
            className="pay-modal__input"
            {...register('address', { required: true, minLength: 10, maxLength: 100 })}
          />
          {errors.address && <span className="pay-modal__error">Endereço inválido (mín. 10 caracteres)</span>}

          <label className="pay-modal__label">Forma de Pagamento:</label>
          <input
            placeholder="Crédito, débito, Pix..."
            className="pay-modal__input"
            {...register('payment', { required: true, minLength: 3, maxLength: 30 })}
          />
          {errors.payment && <span className="pay-modal__error">Informe a forma de pagamento</span>}

          <button type="submit" className="pay-modal__btn">
            Confirmar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayModal;
