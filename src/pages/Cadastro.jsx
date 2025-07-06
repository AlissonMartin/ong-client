import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {

  const navigate = useNavigate();
  
  const [isUser, setIsUser] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    federalTaxId: "",
    role: isUser ? "USER" : "INSTITUTION"
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await api.register(form);
      const data = await response.json();
      if (response.ok) {
        if (data.token) {
          sessionStorage.setItem("token", data.token);
          navigate("/");
        }
        setSuccess("Cadastro realizado com sucesso!");
        setForm({ name: "", email: "", password: "", federalTaxId: "" });
      } else {
        setError(data.message || "Erro ao cadastrar.");
      }
    } catch (err) {
      setError("Erro ao cadastrar.");
    }
    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
      <div className="bg-white shadow rounded p-4" style={{ width: '500px' }}>
        <h2 className="h4 text-center text-dark mb-4">Cadastro</h2>
        <div className="d-flex gap-2 mb-4">
          <button
            className={`btn btn-success w-50 fw-semibold${isUser ? '' : ' btn-outline-success'}`}
            onClick={() => setIsUser(true)}
            type="button"
          >
            Usuário
          </button>
          <button
            className={`btn btn-success w-50 fw-semibold${!isUser ? '' : ' btn-outline-success'}`}
            onClick={() => setIsUser(false)}
            type="button"
          >
            ONG
          </button>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={isUser ? "Digite seu nome" : "Digite o nome da ONG"}
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu Email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite a sua senha"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="federalTaxId" className="form-label fw-semibold">{isUser ? "CPF" : "CNPJ"}</label>
            <input
              type="text"
              name="federalTaxId"
              id="federalTaxId"
              placeholder={isUser ? "Digite o CPF" : "Digite o CNPJ"}
              className="form-control"
              value={form.federalTaxId}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success w-100 fw-semibold"
              disabled={loading}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
