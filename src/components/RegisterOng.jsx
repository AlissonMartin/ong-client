function RegisterOng() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-80">
            <div className="bg-white shadow rounded p-4" style={{ width: '500px' }}>
                <h2 className="h4 text-center text-dark mb-4">Cadastro de ONG</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="cnpj" className="form-label fw-semibold">CNPJ</label>
                        <input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            placeholder="Digite o CNPJ"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Digite o nome da ONG"
                            className="form-control"
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
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="senha" className="form-label fw-semibold">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
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

export default RegisterOng;
