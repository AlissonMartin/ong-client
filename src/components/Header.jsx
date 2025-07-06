import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  function sobreNos() {
    navigate("/about");
  }
  function home() {
    navigate("/");
  }
  function login() {
    navigate("/login");
  }
  function cadastro() {
    navigate("/register");
  }

  return (
    <div className="bg-success py-3 d-flex align-items-center justify-content-between px-4">
      <div className="d-flex align-items-center flex-grow-1">
        <img
          src={logo}
          onClick={home}
          className="me-auto"
          style={{ width: "90px", height: "60px", cursor: "pointer" }}
          alt="Logo"
        />
      </div>
      <div className="d-flex">
        <button onClick={cadastro} className="btn btn-outline-light me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Cadastrar
        </button>
        <button onClick={login} className="btn btn-outline-light me-2">
          <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login
        </button>
        <button onClick={sobreNos} className="btn btn-outline-light">
          <FontAwesomeIcon icon={faInfoCircle} className="me-1" /> Sobre a gente
        </button>
      </div>
    </div>
  );
}

export default Header;
