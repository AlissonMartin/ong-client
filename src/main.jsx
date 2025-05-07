import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import EditUsu from './pages/EditUsu';
import ShowUsu from './pages/ShowUsu';

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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
