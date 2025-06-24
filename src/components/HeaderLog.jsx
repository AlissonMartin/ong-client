import { useNavigate, Link } from "react-router-dom";
import logo from "../img/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { doLogout } from "../helpers/AuthHandler";

function HeaderLog() {
    const navigate = useNavigate();

    function home() {
        navigate('/');
    }
    function listaConquistas() {
        navigate('/listaConquistas');
    }

    const logout = ()=> {
        doLogout()
        navigate("/")
    }

    return (
        <div className="bg-success py-3 d-flex align-items-center justify-content-between px-4">
            <div className="d-flex align-items-center flex-grow-1">
                <img
                    src={logo}
                    alt="Logo"
                    onClick={home}
                    className="cursor-pointer"
                    style={{ width: "90px", height: "60px", cursor: "pointer" }}
                />
            </div>
            <div className="d-flex align-items-center">
                <Link to="/" className="text-white text-decoration-none mx-2">Início</Link>
                <Link to="/ongs" className="text-white text-decoration-none mx-2">ONGs</Link>
                <Link to="/projetos" className="text-white text-decoration-none mx-2">Projetos</Link>
                <Link to="/doacoes" className="text-white text-decoration-none mx-2">Doações</Link>
            </div>

            <div>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="light" className="btn-outline-success rounded-pill">
                        Bem vindo, Usuário
                        <span className="visually-hidden">Menu</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/showUsu">Usuário</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/editUsu">Configuração</Dropdown.Item>
                        <Dropdown.Item onClick={listaConquistas}>Conquistas</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/ongToUsu">ONGs que sigo</Dropdown.Item>
                        <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default HeaderLog;
