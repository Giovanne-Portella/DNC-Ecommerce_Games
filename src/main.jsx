import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.scss';
import { mock } from './mock/produtos.mock';
import  Carrinho  from './pages/Carrinho/Carrinho';
import  Login  from './pages/Login/Login';
import  Pay from './pages/Pay/Pay';
import  Home  from './pages/Home/Home';
import Produto from './pages/Produto/Produto';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
     path: "/home",
     element: <Home dados={mock}/>,
   },
  {
    path: "/produto/:produtoId",
    element: <Produto dados={mock}/>,
  },
  {
    path: "/carrinho/:carrinhoId",
    element: <Carrinho dados={mock}/>,
  },
  {
    path: "/pay/:payId",
    element: <Pay dados={mock}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
