import HeaderLog from "../../components/HeaderLog";
import { useNavigate } from "react-router-dom";

function ShowOng() {
    const navigate = useNavigate();

    function editOng() {
        navigate('/editOng');
    }
    return (
        <div>
            <HeaderLog />
            <div className="d-flex justify-content-center m-4">
                <div className="bg-white rounded shadow p-4 w-100" style={{ maxWidth: "600px" }}>
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src={"noPic"}
                            alt="Foto do Usuário"
                            className="rounded-circle mb-3 shadow"
                            style={{ width: "96px", height: "96px", objectFit: "cover" }}
                        />

                        <h2 className="h4 fw-bold text-dark mb-3">Sopro de vida</h2>

                        <div className="w-100 small text-secondary">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-medium">Email:</span>
                                <span>joao@email.com</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-medium">Telefone:</span>
                                <span>(11) 91234-5678</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-medium">Senha:</span>
                                <span>••••••••</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button onClick={editOng} className="btn btn-success px-4 py-2">Editar Perfil da Ong</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowOng;
