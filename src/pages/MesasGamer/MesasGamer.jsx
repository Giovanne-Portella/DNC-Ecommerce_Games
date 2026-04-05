import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './index.scss';

const setups = [
  {
    nome: 'Mesa Gamer RGB Pro 160cm',
    preco: 'R$ 1.299,00',
    destaques: ['Iluminação RGB personalizável', 'Suporte p/ 2 monitores', 'Gancho para headset', 'MDF 25mm resistente'],
  },
  {
    nome: 'Mesa Gamer Compact 120cm',
    preco: 'R$ 899,00',
    destaques: ['Design minimalista', 'Borda arredondada', 'Passagem de cabos integrada', 'Ideal para espaços compactos'],
  },
  {
    nome: 'Cadeira Gamer ThunderX3',
    preco: 'R$ 1.799,00',
    destaques: ['Reclinável 180°', 'Apoio lombar e cervical', 'Rodinhas de nylon', 'Espuma memory foam'],
  },
  {
    nome: 'Suporte de Monitor Articulado Duplo',
    preco: 'R$ 349,00',
    destaques: ['Suporta até 32"', 'Braço articulado 360°', 'Gestão de cabos', 'Compatível VESA 75/100'],
  },
];

const MesasGamer = () => {
  return (
    <div className="mesas-page">
      <Nav />
      <section className="mesas-page__hero">
        <span className="mesas-page__tag">🖥 SETUPS GAMER</span>
        <h1>Monte o Setup dos Seus Sonhos</h1>
        <p>Mesas, cadeiras e suportes que elevam o nível da sua experiência gamer.</p>
      </section>

      <section className="mesas-page__section">
        <h2>Produtos em Destaque</h2>
        <div className="mesas-page__grid">
          {setups.map((item, i) => (
            <div key={i} className="mesas-page__card">
              <div className="mesas-page__card-icon">🎮</div>
              <h3>{item.nome}</h3>
              <p className="mesas-page__card-price">{item.preco}</p>
              <ul>
                {item.destaques.map((d, j) => (
                  <li key={j}>✔ {d}</li>
                ))}
              </ul>
              <button className="mesas-page__btn">Ver Produto</button>
            </div>
          ))}
        </div>
      </section>

      <section className="mesas-page__tips">
        <h2>💡 Dicas para o Setup Perfeito</h2>
        <div className="mesas-page__tips-grid">
          {[
            { icon: '🌡', title: 'Ventilação', text: 'Mantenha seus equipamentos em local arejado para evitar superaquecimento.' },
            { icon: '💡', title: 'Iluminação', text: 'LED por trás do monitor reduz o cansaço visual durante longas sessões.' },
            { icon: '🎧', title: 'Áudio', text: 'Um bom headset ou caixas de som fazem diferença na imersão dos jogos.' },
            { icon: '🖱', title: 'Periféricos', text: 'Mouse e teclado mecânico gamer garantem precisão e durabilidade.' },
          ].map((tip, i) => (
            <div key={i} className="mesas-page__tip-card">
              <span className="mesas-page__tip-icon">{tip.icon}</span>
              <h4>{tip.title}</h4>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MesasGamer;
