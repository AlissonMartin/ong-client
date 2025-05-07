import { useNavigate } from "react-router-dom"
import logo from "../img/logo.png"
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

function HeaderLog () {
    const navegate = useNavigate();
        function home() {
            navegate('/')
    }

    return(
        <div className="bg-lime-600 pt-6 pb-6 flex">
                <div className="flex items-center basis-10/12">
                    <img className="text-2xl pl-4 cursor-pointer" onClick={home} src={logo} style={{width: "90px", height: "60px"}}></img>
                </div>
                <div className="px-6 py-3 mr-3 text-white font-semibold">
                Bem vindo, Usuario
                </div>
                <div className="flex items-center">
                <Dropdown>
                    <Dropdown.Toggle variant="outline-light" className="rounded-circle" id="dropdown-basic">
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Usuario</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Configuração</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
        </div>
    )
}

export default HeaderLog 