import React from 'react';
import '../Home/index.scss';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import Footer from '../../components/Footer/Footer';
import propaganda from '/propaganda.svg'




export const Home = ({dados}) => {
  return (
    <div className='home'>
      <Nav />
      <img className='home__propaganda' src={propaganda} alt="" />
      <div className='home__conteiner'>
        {
          dados.map(produto => (<ProdutoCard key={produto.id} dados={produto}/>))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home