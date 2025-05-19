import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
import Cadastro from './pages/Cadastro';
import EditUsu from './pages/user/EditUsu';
import ShowUsu from './pages/user/ShowUsu';
import EditOng from './pages/ong/EditOng';
import ShowOng from './pages/ong/ShowOng';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/editUsu",
    element: <EditUsu />,
  },
  {
    path: "/showUsu",
    element: <ShowUsu />,
  },
  {
    path: "/editOng",
    element: <EditOng />,
  },
  {
    path: "/showOng",
    element: <ShowOng />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
