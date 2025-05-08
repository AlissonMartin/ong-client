import { useState } from "react";
import Header from "../components/Header.jsx";

function Login() {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="bg-white shadow rounded p-4" style={{ width: "500px" }}>
          <h2 className="h4 fw-semibold text-center text-dark mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="senha" className="form-label fw-semibold">Senha</label>
              <input
                type="password"
                className="form-control"
                id="senha"
                name="senha"
                placeholder="Digite a sua senha"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success fw-semibold">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
