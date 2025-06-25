import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import OngList from "../pages/OngList";
import EditUsu from "../pages/user/EditUsu";
import ShowUsu from "../pages/user/ShowUsu";
import EditOng from "../pages/ong/EditOng";
import ShowOng from "../pages/ong/ShowOng";
import ListaConquistas from "../pages/ListaConquistas";
import OngToUsu from "../pages/ong/OngToUsu";
import { isLogged } from "../helpers/AuthHandler";

const MainRoutes = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const path = window.location.pathname;
        if (isLogged() && (path === "/login" || path === "/cadastro")) {
            navigate("/", { replace: true });
        }
    }, [navigate]);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/editUsu" element={<EditUsu />} />
            <Route path="/showUsu" element={<ShowUsu />} />
            <Route path="/editOng" element={<EditOng />} />
            <Route path="/showOng" element={<ShowOng />} />
            <Route path="/OngList" element={<OngList />} />
            <Route path="/listaConquistas" element={<ListaConquistas />} />
            <Route path="/ongToUsu" element={<OngToUsu />} />
        </Routes>
    );
};

export default MainRoutes;