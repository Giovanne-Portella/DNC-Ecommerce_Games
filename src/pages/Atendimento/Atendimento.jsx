import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './index.scss';

const faqs = [
  {
    pergunta: 'Quais formas de pagamento vocês aceitam?',
    resposta: 'Aceitamos cartão de crédito (até 12x sem juros), Pix com 10% de desconto, boleto bancário e carteiras digitais como PayPal e Mercado Pago.',
  },
  {
    pergunta: 'Qual o prazo de entrega?',
    resposta: 'Para capitais: 2 a 4 dias úteis. Para interior e demais regiões: 5 a 10 dias úteis. Frete grátis em compras acima de R$ 299.',
  },
  {
    pergunta: 'Os produtos têm garantia?',
    resposta: 'Sim! Todos os nossos produtos possuem garantia do fabricante. Consoles: 12 meses. Acessórios: 6 a 12 meses. Além disso, oferecemos 7 dias para troca ou devolução.',
  },
  {
    pergunta: 'Como faço para rastrear meu pedido?',
    resposta: 'Após a confirmação do pagamento você receberá um e-mail com o código de rastreio dos Correios ou transportadora. Você também pode consultar diretamente na sua conta no site.',
  },
  {
    pergunta: 'Os produtos são originais?',
    resposta: 'Absolutamente! Somos revendedores autorizados de Microsoft, Sony, Nintendo e dos principais publishers de jogos. Todos os produtos possuem nota fiscal e garantia oficial.',
  },
  {
    pergunta: 'Posso cancelar ou alterar meu pedido?',
    resposta: 'Pedidos podem ser cancelados até 2 horas após a compra. Após esse prazo, entre em contato com nosso suporte. Não é possível alterar um pedido já confirmado — será necessário cancelar e refazer.',
  },
];

const Atendimento = () => {
  const [aberto, setAberto] = useState(null);

  const toggle = (i) => setAberto(prev => (prev === i ? null : i));

  return (
    <div className="atend-page">
      <Nav />
      <section className="atend-page__hero">
        <span className="atend-page__tag">💬 SUPORTE GAMER 24/7</span>
        <h1>Central de Atendimento</h1>
        <p>Estamos aqui para resolver tudo. Sem enrolação.</p>
      </section>

      <section className="atend-page__channels">
        <div className="atend-page__channel">
          <span className="atend-page__icon">💬</span>
          <h3>Chat Online</h3>
          <p>Atendimento imediato, disponível 24h</p>
          <button className="atend-page__btn">Iniciar Chat</button>
        </div>
        <div className="atend-page__channel">
          <span className="atend-page__icon">📧</span>
          <h3>E-mail</h3>
          <p>suporte@gamevault.com.br</p>
          <button className="atend-page__btn atend-page__btn--outline">Enviar E-mail</button>
        </div>
        <div className="atend-page__channel">
          <span className="atend-page__icon">📱</span>
          <h3>WhatsApp</h3>
          <p>(11) 9 9999-0000 &mdash; Seg à Sex, 9h–20h</p>
          <button className="atend-page__btn atend-page__btn--green">Chamar no WhatsApp</button>
        </div>
      </section>

      <section className="atend-page__faq">
        <h2>Perguntas Frequentes</h2>
        <div className="atend-page__faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`atend-page__faq-item${aberto === i ? ' atend-page__faq-item--open' : ''}`}
            >
              <button
                className="atend-page__faq-q"
                onClick={() => toggle(i)}
                aria-expanded={aberto === i}
              >
                {item.pergunta}
                <span className="atend-page__faq-arrow">{aberto === i ? '▲' : '▼'}</span>
              </button>
              {aberto === i && (
                <p className="atend-page__faq-a">{item.resposta}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Atendimento;
