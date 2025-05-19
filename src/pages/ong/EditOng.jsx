import HeaderLog from "../../components/HeaderLog";

function EditOng() {
    return (
        <div>
            <HeaderLog />
            <div className="mt-5">
                <div className="container">
                    <div className="mx-auto bg-white p-4 rounded shadow" style={{ maxWidth: "600px" }}>
                        <h2 className="h4 fw-bold mb-4 text-dark">Editar Ong</h2>

                        <form className="d-grid gap-3">
                            <div>
                                <label htmlFor="name" className="form-label">Nome da Ong</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    defaultValue="Usuario"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    defaultValue="voce@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="form-label">Nova Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    defaultValue="••••••••"
                                />
                            </div>

                            <div>
                                <label htmlFor="bio" className="form-label">Descrição</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows="3"
                                    className="form-control"
                                    defaultValue="O que sua ONG realiza..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="form-label">Foto de Perfil</label>
                                <div className="d-flex align-items-center gap-3 mt-2">
                                    <img
                                        src={"noPic"}
                                        alt="Foto atual"
                                        className="rounded-circle"
                                        style={{ width: "64px", height: "64px", objectFit: "cover" }}
                                    />
                                    <input
                                        type="file"
                                        className="form-control form-control-sm"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2 mt-3">
                                <button type="reset" className="btn btn-secondary">Cancelar</button>
                                <button type="submit" className="btn btn-success">Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOng;
