import HeaderLog from "../components/HeaderLog";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function OngPage() {
    const [ongs, setOngs] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [distance, setDistance] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOngs = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await api.listInstitutions(keyword, page, 10);
                const data = await response.json();
                setOngs(data || []);
                setTotalPages(data.totalPages || 1);
            } catch (err) {
                setError("Erro ao carregar ONGs.");
            }
            setLoading(false);
        };
        fetchOngs();
    }, [page, keyword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(0); // reset to first page on new search
    };

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };
    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    return (
        <div>
            <div className="py-5"></div>
            <form className="container my-4" onSubmit={handleSubmit}>
                <div className="row g-2 align-items-end">
                    <div className="col-md-5">
                        <label className="form-label">Buscar</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite uma palavra-chave..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Categoria</label>
                        <select
                            className="form-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Todas as categorias</option>
                            <option value="eletronicos">Eletrônicos</option>
                            <option value="roupas">Roupas</option>
                            <option value="moveis">Móveis</option>
                            <option value="imoveis">Imóveis</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Distância (km)</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ex: 10"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            min="0"
                            step="5"
                        />
                    </div>
                    <div className="col-md-1 d-grid">
                        <button type="submit" className="btn btn-success">Buscar</button>
                    </div>
                </div>
            </form>
            <div className="container my-5">
                {loading && <div className="text-center">Carregando...</div>}
                {error && <div className="alert alert-danger text-center">{error}</div>}
                {ongs.map((ong) => (
                    <div className="card shadow-sm mb-4" key={ong.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/showOng?id=${ong.id}`)}>
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src="https://placehold.co/300x200" alt={ong.fullName || ong.name} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{ong.fullName || ong.name}</h5>
                                    <p className="card-text fw-bold fs-5">{ong.description || 'Sem descrição.'}</p>
                                    <p className="card-text">
                                        <span className="badge bg-success">{ong.city} - {ong.state}</span>
                                    </p>
                                    <p className="card-text mb-1"><strong>Email:</strong> {ong.email}</p>
                                    <p className="card-text mb-1"><strong>Endereço:</strong> {ong.address}, {ong.number} {ong.complement}</p>
                                    <p className="card-text"><small className="text-muted">ID: {ong.id}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                    <button className="btn btn-outline-secondary" onClick={handlePrev} disabled={page === 0}>Anterior</button>
                    <span>Página {page + 1} de {totalPages}</span>
                    <button className="btn btn-outline-secondary" onClick={handleNext} disabled={page >= totalPages - 1}>Próxima</button>
                </div>
            </div>
        </div>
    );
}

export default OngPage;
