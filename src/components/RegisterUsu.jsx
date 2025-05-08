function RegisterUsu() {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light vh-100">
        <div className="bg-white shadow rounded p-4" style={{ width: '500px' }}>
          <h2 className="h4 text-center text-dark mb-4">Cadastro de Usuário</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label fw-semibold">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                className="form-control"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                className="form-control"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                className="form-control"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="senha" className="form-label fw-semibold">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Digite a sua senha"
                className="form-control"
              />
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success w-100 fw-semibold"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default RegisterUsu;
  