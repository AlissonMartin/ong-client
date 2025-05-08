import { useState } from "react";
import Header from "../components/Header.jsx";
import RegisterOng from "../components/RegisterOng.jsx";
import RegisterUsu from "../components/RegisterUsu.jsx";

function Cadastro() {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="bg-white shadow p-4 rounded" style={{ width: "500px" }}>
          <h2 className="h4 fw-semibold text-center text-dark mb-4">Cadastro</h2>

          <button
            className="btn btn-success w-100 fw-semibold mb-3"
            onClick={() => setIsUser(true)}
          >
            Usuário
          </button>

          <button
            className="btn btn-success w-100 fw-semibold"
            onClick={() => setIsUser(false)}
          >
            ONG
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        {isUser ? <RegisterUsu /> : <RegisterOng />}
      </div>
    </div>
  );
}

export default Cadastro;
