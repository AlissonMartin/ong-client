import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

function HeaderLog() {
    const navigate = useNavigate();

    function home() {
        navigate('/');
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

            <div className="text-white fw-semibold me-3">

            </div>

            <div>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="light" className="btn-outline-success rounded-pill">
                        Bem vindo, Usuário
                        <span className="visually-hidden">Menu</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Usuário</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Configuração</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default HeaderLog;
