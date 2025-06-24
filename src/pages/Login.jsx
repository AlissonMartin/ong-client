import { useState } from "react";
import Header from "../components/Header.jsx";
import api from "../services/api.js";

function Login() {
  const [isUser, setIsUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.login({ email, password });
      const data = await res.json();
      if (res.ok && data.token) {
        window.sessionStorage.setItem("token", data.token);
        // Redirect or update UI as needed
      } else {
        setError(data.message || "Falha no login");
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor");
    }
  };
  

  return (
    <div className="bg-light min-vh-100">
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="bg-white shadow rounded p-4" style={{ width: "500px" }}>
          <h2 className="h4 fw-semibold text-center text-dark mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}

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
