import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import EditUsu from "../pages/user/EditUsu";
import ShowUsu from "../pages/user/ShowUsu";
import EditOng from "../pages/ong/EditOng";
import ShowOng from "../pages/ong/ShowOng";
import OngToUsu from "../pages/ong/OngToUsu";
import RegisterOngFull from "../pages/ong/RegisterOngFull";
import ProfileOng from "../pages/ong/ProfileOng";
import OngPage from "../pages/OngList";
import InstitutionRoutes from "../helpers/InstitutionRoutes";
import UserRoutes from "../helpers/UserRoutes";
import JobApplicationsList from "../pages/user/JobApplicationsList";
import LoggedRoutes from "../helpers/LoggedRoutes";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Cadastro />} />
            <Route path="/ong/show" element={<ShowOng />} />
            <Route element={<LoggedRoutes />}>
                <Route path="/users/edit" element={<EditUsu />} />
                <Route path="/users/show" element={<ShowUsu />} />

                <Route element={<InstitutionRoutes />}>
                    <Route path="/ong/edit" element={<EditOng />} />
                    <Route path="/ong/me" element={<ProfileOng />} />
                </Route>
                <Route element={<UserRoutes />}>
            <Route path="/ongToUsu" element={<OngToUsu />} />
                    <Route path="/users/job-applications" element={<JobApplicationsList />} />
                </Route>

            </Route>
            <Route path="/ong/list" element={<OngPage />} />
            <Route path="/institutions/create" element={<RegisterOngFull />} />
        </Routes>
    );
};

export default MainRoutes;