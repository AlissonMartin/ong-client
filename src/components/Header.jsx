import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  const navigate = useNavigate();

  function sobreNos() {
    navigate("/sobre");
  }
  function home() {
    navigate("/");
  }
  function login() {
    navigate("/login");
  }
  function cadastro() {
    navigate("/cadastro");
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
        <button
          onClick={cadastro}
          className="btn btn-outline-light me-2"
        >
          Cadastrar
        </button>
        <button
          onClick={login}
          className="btn btn-outline-light me-2"
        >
          Login
        </button>
        <button
          onClick={sobreNos}
          className="btn btn-outline-light"
        >
          Sobre a gente
        </button>
      </div>
    </div>
  );
}

export default Header;
