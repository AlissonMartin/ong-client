import HeaderLog from "../components/HeaderLog";

const conquistas = [
    { id: 1, nome: "Iniciante", descricao: "Concluiu o primeiro desafio", desbloqueada: true, image: "https://placehold.co/100x100" },
    { id: 2, nome: "Persistente", descricao: "Completou 5 desafios", desbloqueada: false, image: "https://placehold.co/100x100" },
    { id: 3, nome: "Veterano", descricao: "Concluiu 30 desafios", desbloqueada: false, image: "https://placehold.co/100x100" },
    { id: 4, nome: "Explorador", descricao: "Visitou todas as seções", desbloqueada: true, image: "https://placehold.co/100x100" },
    //imagens das conquistas devem permanecer 100x100 caso contrario podem quebrar a formatação do site
];

function ConquistaCard({ conquista }) {
    const { nome, descricao, desbloqueada, image } = conquista;

    return (
        <div>

            <div className={`container-fluid card mb-3 ${desbloqueada ? "border-success" : "border-secondary"}`}>
                <div className="card-body row">
                    <img className="col" src={image} alt="" />
                    <div className="col-10 pt-2">
                        <h5 className={`card-title ${desbloqueada ? "text-success" : "text-muted"}`}>
                            {nome}
                        </h5>
                        <p className={`card-text ${desbloqueada ? "" : "text-muted"}`}>
                            {desbloqueada ? descricao : "Conquista bloqueada"}
                        </p>
                        {!desbloqueada && <span className="badge bg-secondary">Bloqueada</span>}
                        {desbloqueada && <span className="badge bg-success">Desbloqueada</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListaConquistas() {
    return (
        <div>
            <HeaderLog />
            <div className="container mt-5">

                <h2 className="mb-4">Minhas Conquistas</h2>
                {conquistas.map((c) => (
                    <ConquistaCard key={c.id} conquista={c} />
                ))}
            </div>
        </div>
    );
}

export default ListaConquistas;