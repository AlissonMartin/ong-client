const posts = [
    { id: 1, texto: "Primeira postagem!", data: "2025-06-01" },
    { id: 2, texto: "Outra notícia interessante.", data: "2025-06-02" },
    { id: 3, texto: "React é muito legal!", data: "2025-06-02" },
];

function Post() {

    return (
        <div className="container mt-4">
            {posts.map(post => (
                <div key={post.id} className="card mb-3">
                    <div className="card-body">
                        <p className="card-text">{post.texto}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                Publicado em: {new Date(post.data).toLocaleDateString()}
                            </small>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Post