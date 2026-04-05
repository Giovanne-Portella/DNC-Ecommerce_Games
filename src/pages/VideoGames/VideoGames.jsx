import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import { mock } from '../../mock/produtos.mock';
import './index.scss';

const VideoGames = () => {
  const consoles = mock.filter((p) => p.tipo === 'console');

  const specs = [
    { console: 'Xbox Series X', cpu: '8-core Zen 2 3.8GHz', gpu: '12 TFLOPS RDNA 2', ram: '16GB GDDR6', storage: '1TB NVMe SSD' },
    { console: 'Xbox Series S', cpu: '8-core Zen 2 3.6GHz', gpu: '4 TFLOPS RDNA 2', ram: '10GB GDDR6', storage: '512GB NVMe SSD' },
    { console: 'Nintendo Switch OLED', cpu: 'NVIDIA Tegra X1+', gpu: 'Maxwell 384 CUDA', ram: '4GB LPDDR4X', storage: '64GB eMMC' },
  ];

  return (
    <div className="vg-page">
      <Nav />
      <section className="vg-page__hero">
        <span className="vg-page__tag">🕹 VIDEO GAMES</span>
        <h1>Consoles da nova geração</h1>
        <p>Desempenho extremo, gráficos impressionantes e velocidade incomparável.</p>
      </section>

      <section className="vg-page__section">
        <div className="vg-page__grid">
          {consoles.map((p) => (
            <ProdutoCard key={p.id} dados={p} />
          ))}
        </div>
      </section>

      <section className="vg-page__compare">
        <h2>⚡ Compare os consoles</h2>
        <div className="vg-page__table-wrap">
          <table className="vg-page__table">
            <thead>
              <tr>
                <th>Console</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>RAM</th>
                <th>Armazenamento</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr key={i}>
                  <td>{s.console}</td>
                  <td>{s.cpu}</td>
                  <td>{s.gpu}</td>
                  <td>{s.ram}</td>
                  <td>{s.storage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoGames;
