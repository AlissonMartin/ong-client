import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, faChevronRight, faMapMarkerAlt, faEnvelope, faHome, faIdBadge, faList } from '@fortawesome/free-solid-svg-icons';

function OngList() {
    const [ongs, setOngs] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
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
                        <label className="form-label">
                            <FontAwesomeIcon icon={faSearch} className="me-1" /> Buscar
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite uma palavra-chave..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">
                            <FontAwesomeIcon icon={faList} className="me-1" /> Categoria
                        </label>
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
                    <div className="col-md-2 d-grid">
                        <button type="submit" className="btn btn-success">Buscar</button>
                    </div>
                </div>
            </form>
            <div className="container my-5">
                {loading && <div className="text-center">Carregando...</div>}
                {error && <div className="alert alert-danger text-center">{error}</div>}
                {ongs.map((ong) => (
                    <div className="card shadow-sm mb-4" key={ong.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/ong/show?id=${ong.id}`)}>
                        <div className="row g-0" style={{ minHeight: 200 }}>
                            <div className="col-md-3 position-relative" style={{ minHeight: 200, height: '100%' }}>
                                <img 
                                    src={ong.bannerUrl || 'https://placehold.co/300x200'} 
                                    alt={ong.fullName || ong.name} 
                                    className="img-fluid rounded-start w-100 h-100" 
                                    style={{height: '100%', minHeight: 200, maxHeight: 300, objectFit: 'cover', }} 
                                />
                                <img
                                    src={ong.profilePhotoUrl || '/src/img/placeholder.png'}
                                    alt="Foto da ONG"
                                    className="rounded-circle border border-white position-absolute shadow"
                                    style={{ width: 64, height: 64, objectFit: 'cover', left: 16, bottom: 16, borderWidth: 3, background: '#fff' }}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <FontAwesomeIcon icon={faIdBadge} className="me-2 text-success" />
                                        {ong.fullName || ong.name}
                                    </h5>
                                    <p className="card-text">{ong.description || 'Sem descrição.'}</p>
                                    <p className="card-text">
                                        <span className="badge bg-success">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                                            {ong.city} - {ong.state}
                                        </span>
                                    </p>
                                    <p className="card-text mb-1"><strong><FontAwesomeIcon icon={faEnvelope} className="me-1" /> Email:</strong> {ong.email}</p>
                                    <p className="card-text mb-1"><strong><FontAwesomeIcon icon={faHome} className="me-1" /> Endereço:</strong> {ong.address}, {ong.number} {ong.complement}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                    <button className="btn btn-outline-secondary" onClick={handlePrev} disabled={page === 0}>
                        <FontAwesomeIcon icon={faChevronLeft} /> Anterior
                    </button>
                    <span>Página {page + 1} de {totalPages}</span>
                    <button className="btn btn-outline-secondary" onClick={handleNext} disabled={page >= totalPages - 1}>
                        Próxima <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OngList;
