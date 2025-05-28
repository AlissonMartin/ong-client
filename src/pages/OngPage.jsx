import HeaderLog from "../components/HeaderLog";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OngPage() {

    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ keyword, category, distance });
    }

    const navigate = useNavigate();

    return (
        <div>
            <HeaderLog />
            <div class="py-5"></div>

            <form className="container my-4" onSubmit={handleSubmit}>
                <div className="row g-2 align-items-end">
                    {/* Campo de pesquisa */}
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

                    {/* Seleção de categoria */}
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

                    {/* Campo de distância */}
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

                    {/* Botão */}
                    <div className="col-md-1 d-grid">
                        <button type="submit" className="btn btn-success">Buscar</button>
                    </div>
                </div>
            </form>
            <div class="container my-5">
                <div class="card shadow-sm" onClick={() => navigate('/ongToUsu')} style={{ cursor: 'pointer' }}>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="https://placehold.co/300x200" alt="Ong" class="img-fluid rounded-start" />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">Ong Juntos Pela Boa Refeição</h5>
                                <p class="card-text fw-bold fs-5">Objetivo: Ajudar pessoas em situação de rua</p>
                                <p class="card-text">
                                    <span class="badge bg-success">Cozinheiro</span>
                                </p>
                                <p class="card-text"><small class="text-muted">Anunciado há 2 horas</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OngPage;
