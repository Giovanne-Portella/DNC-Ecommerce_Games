import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const Carrinho = () => {
  return (
    <div>
      <Nav />
      <main style={{ padding: '40px', textAlign: 'center', minHeight: '60vh' }}>
        <h1>Meu Carrinho</h1>
        <p style={{ marginTop: '16px', color: '#666' }}>Seu carrinho está vazio.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Carrinho;
