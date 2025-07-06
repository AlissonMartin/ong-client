import { useNavigate, Link } from "react-router-dom";
import logo from "../img/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { doLogout, getUserRole } from "../helpers/AuthHandler";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faTrophy, faHeart, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

function HeaderLog() {

    const [isInstitution, setIsInstitution] = useState(false);
    const navigate = useNavigate();

    function home() {
        navigate('/');
    }

    const logout = () => {
        doLogout();
        window.location.reload();
    }

    useEffect(() => {
        const role = getUserRole();
        setIsInstitution(role === "INSTITUTION");
    }, []);

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
            {!isInstitution &&
                <div className="d-flex align-items-center">
                    <Link to="/ong/list" className="text-white text-decoration-none mx-2">
                        <FontAwesomeIcon icon={faHandsHelping} className="me-1" /> ONGs
                    </Link>
                    {/* <Link to="/doacoes" className="text-white text-decoration-none mx-2">
                        <FontAwesomeIcon icon={faHeart} className="me-1" /> Doações
                    </Link> */}
                </div>
            }

            <div>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="light" className="btn-outline-success rounded-pill">
                        Bem vindo, Usuário
                        <span className="visually-hidden">Menu</span>
                    </Dropdown.Toggle>

                    {!isInstitution &&
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/users/show">
                                <FontAwesomeIcon icon={faUser} className="me-2" /> Usuário
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/users/job-applications">
                                <FontAwesomeIcon icon={faTrophy} className="me-2" /> Minhas Candidaturas
                            </Dropdown.Item>
                            <Dropdown.Item onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sair
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    }
                    {isInstitution &&
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/users/show">
                                <FontAwesomeIcon icon={faUser} className="me-2" /> Usuário
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/ong/me">
                                <FontAwesomeIcon icon={faTrophy} className="me-2" /> Minha ONG
                            </Dropdown.Item>
                            <Dropdown.Item onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sair
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    }
                </Dropdown>
            </div>
        </div>
    );
}

export default HeaderLog;
