import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import JobApplicationModal from '../../components/JobApplicationModal';

function ShowOng() {
    const navigate = useNavigate();
    const [ong, setOng] = useState(null);
    const [posts, setPosts] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [showJobModal, setShowJobModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const fetchOng = async () => {
            try {
                const response = await api.getInstitution(id);
                const data = await response.json();
                console.log(data);
                setOng(data);
            } catch (err) {
                setOng(null);
            }
        };
        const fetchPosts = async () => {
            try {
                // Supondo que existe um endpoint para buscar posts da ONG
                const response = await api.listPostsByInstitution(id);
                const data = await response.json();
                setPosts(data || []);
            } catch (err) {
                setPosts([]);
            }
        };
        const fetchJobs = async () => {
            try {
                // Supondo que existe um endpoint para buscar vagas da ONG
                const response = await api.listJobsByInstitution(id);
                const data = await response.json();
                setJobs(data || []);
            } catch (err) {
                setJobs([]);
            }
        };
        if (id) {
            fetchOng();
            fetchPosts();
            fetchJobs();
        }
    }, []);

    function editOng() {
        navigate('/editOng');
    }

    return (
        <div>
            {/* Banner com foto da ONG */}
            <div style={{ position: 'relative', height: 280, background: '#e9ecef' }} className="mb-5">
                <img
                    src={''}
                    alt="Banner"
                    style={{ width: '100%', height: 280, objectFit: 'cover', filter: 'brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', left: 40, bottom: -48, zIndex: 2 }}>
                    <img
                        src={''}
                        alt="Foto da ONG"
                        className="rounded-circle shadow border border-white"
                        style={{ width: 128, height: 128, objectFit: 'cover', borderWidth: 6 }}
                    />
                </div>
            </div>

            {/* Dados da ONG */}
            <div className="container mb-5">
                <div className="bg-white rounded shadow p-5" style={{ marginTop: 40 }}>
                    <div className="d-flex flex-column flex-md-row align-items-md-center gap-4">
                        <div className="flex-grow-1">
                            <h2 className="display-5 fw-bold text-success mb-2">{ong ? (ong.fullName || ong.name) : ""}</h2>
                            <p className="mb-2 text-secondary">{ong && ong.description ? ong.description : "Sem descrição."}</p>
                            <div className="row g-2 mb-2">
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">Email:</span> {ong ? ong.email : ""}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">CNPJ:</span> {ong ? ong.federalTaxId : ""}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">Endereço:</span> {ong ? `${ong.address}, ${ong.number} ${ong.complement || ''}` : ""}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">Cidade/Estado:</span> {ong ? `${ong.city} - ${ong.state}` : ""}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={editOng} className="btn btn-success px-4 py-2">Editar Perfil da Ong</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs para Feed de Posts e Vagas */}
            <div className="container mb-5">
                <Tabs
                    defaultActiveKey="posts"
                    id="ong-tabs"
                    className="mb-3 custom-ong-tabs"
                    tabClassName="custom-tab-green"
                >
                    <Tab eventKey="posts" title={<span style={{color: '#198754', fontWeight: 600}}>Feed de Postagens</span>}>
                        {posts.length === 0 && <div className="text-muted">Nenhuma postagem encontrada.</div>}
                        <div className="row g-4">
                            {posts.map((post) => (
                                <div className="col-12 col-md-6" key={post.id}>
                                    <div className="card shadow-sm h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.content}</p>
                                            <p className="card-text"><small className="text-muted">{post.date || ""}</small></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="jobs" title={<span style={{color: '#198754', fontWeight: 600}}>Vagas Disponíveis</span>}>
                        {jobs.length === 0 && <div className="text-muted">Nenhuma vaga encontrada.</div>}
                        <div className="row g-4">
                            {jobs.map((job) => (
                                <div className="col-12 col-md-6" key={job.id}>
                                    <div className="card shadow-sm h-100" style={{ cursor: 'pointer' }} onClick={() => { setSelectedJob(job); setShowJobModal(true); }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{job.name}</h5>
                                            <p className="card-text">{job.description}</p>
                                            <p className="card-text"><span className="badge bg-success">{job.requirements}</span></p>
                                            <p className="card-text"><small className="text-muted">ID: {job.id}</small></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <JobApplicationModal
                show={showJobModal}
                onHide={() => setShowJobModal(false)}
                job={selectedJob}
                onSuccess={() => setShowJobModal(false)}
            />
        </div>
    );
}

export default ShowOng;
