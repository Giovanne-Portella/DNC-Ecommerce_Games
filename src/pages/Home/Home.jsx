import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../Home/index.scss';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

export const Home = ({dados}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filtered = query
    ? dados.filter(p => p.nome.toLowerCase().includes(query.toLowerCase()))
    : dados;

  return (
    <div className='home'>
      <Nav />
      <HeroBanner />
      {query && (
        <p className='home__search-info'>
          {filtered.length > 0
            ? `${filtered.length} resultado(s) para "${query}"`
            : `Nenhum produto encontrado para "${query}"`}
        </p>
      )}
      <div className='home__conteiner'>
        {filtered.map(produto => (<ProdutoCard key={produto.id} dados={produto}/>))}
      </div>
      <Footer />
    </div>
  )
}

export default Home