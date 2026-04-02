import React from 'react'
import { useParams } from 'react-router-dom'
import '../Produto/index.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import DetalhedoProduto from '../../components/DetalhedoProduto/DetalhedoProduto'

const Produto = ({ dados }) => {
   const {produtoId} = useParams() ;
   
   const selectedProduto = dados.find(produto =>
     produto.id == produtoId)
  //  console.log(selectedProduto);

  return (
    <div>
      <Nav/>

      <DetalhedoProduto dados={selectedProduto}/>

            
      <Footer/>


      
    </div>
  )
}

export default Produto