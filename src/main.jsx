import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.scss';
import { mock } from './mock/produtos.mock';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer/CartDrawer';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import Carrinho from './pages/Carrinho/Carrinho';
import Pay from './pages/Pay/Pay';
import Novidades from './pages/Novidades/Novidades';
import Jogos from './pages/Jogos/Jogos';
import VideoGames from './pages/VideoGames/VideoGames';
import MesasGamer from './pages/MesasGamer/MesasGamer';
import Promocoes from './pages/Promocoes/Promocoes';
import Atendimento from './pages/Atendimento/Atendimento';

const Root = () => (
  <CartProvider>
    <Outlet />
    <CartDrawer />
  </CartProvider>
);

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Home dados={mock} /> },
      { path: "/produto/:produtoId", element: <Produto dados={mock} /> },
      { path: "/carrinho/:carrinhoId", element: <Carrinho dados={mock} /> },
      { path: "/pay/:payId", element: <Pay dados={mock} /> },
      { path: "/novidades", element: <Novidades /> },
      { path: "/jogos", element: <Jogos /> },
      { path: "/videogames", element: <VideoGames /> },
      { path: "/mesas-gamer", element: <MesasGamer /> },
      { path: "/promocoes", element: <Promocoes /> },
      { path: "/atendimento", element: <Atendimento /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
