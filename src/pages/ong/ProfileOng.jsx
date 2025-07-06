import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import JobCreateModal from '../../components/JobCreateModal';
import PostCreateModal from '../../components/PostCreateModal';
import EditOngModal from '../../components/EditOngModal';
import JobDetailsModal from '../../components/JobDetailsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard, faMapMarkerAlt, faBuilding, faEdit, faUserTie, faClipboardList, faCalendarAlt, faBriefcase, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { decodeJWT } from "../../helpers/AuthHandler";

function ProfileOng() {
    const navigate = useNavigate();
    const [ong, setOng] = useState(null);
    const [posts, setPosts] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [showCreateJobModal, setShowCreateJobModal] = useState(false);
    const [showCreatePostModal, setShowCreatePostModal] = useState(false);
    const [showEditOngModal, setShowEditOngModal] = useState(false);
    const [showJobDetailsModal, setShowJobDetailsModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const payload = decodeJWT(token);
        const institutionId = payload && payload.institution_id;
        if (!institutionId) {
            setOng(null);
            return;
        }
        const fetchOng = async () => {
            try {
                const response = await api.getInstitution(institutionId);
                const data = await response.json();
                setOng(data);
            } catch (err) {
                setOng(null);
            }
        };
        const fetchPosts = async () => {
            try {
                const response = await api.listPostsByInstitution(institutionId);
                const data = await response.json();
                setPosts(data || []);
            } catch (err) {
                setPosts([]);
            }
        };
        const fetchJobs = async () => {
            try {
                const response = await api.listJobsByInstitution(institutionId);
                const data = await response.json();
                setJobs(data || []);
            } catch (err) {
                setJobs([]);
            }
        };
        fetchOng();
        fetchPosts();
        fetchJobs();
    }, []);

    function editOng() {
        navigate('/editOng');
    }

    const handleDeleteJob = async (jobId) => {
        if (!window.confirm('Tem certeza que deseja excluir esta vaga?')) return;
        try {
            const token = sessionStorage.getItem('token');
            await api.deleteJob(jobId, token);
            setJobs(jobs => jobs.filter(j => j.id !== jobId));
        } catch (err) {
            alert('Erro ao excluir vaga.');
        }
    };

    const handleCompleteJob = async (jobId) => {
        if (!window.confirm('Deseja marcar esta vaga como COMPLETA?')) return;
        try {
            const token = sessionStorage.getItem('token');
            await api.completeJob(jobId, token);
            setJobs(jobs => jobs.map(j => j.id === jobId ? { ...j, status: 'COMPLETED' } : j));
        } catch (err) {
            alert('Erro ao completar vaga.');
        }
    };

    const handleDeletePost = async (postId) => {
        if (!window.confirm('Tem certeza que deseja excluir este post?')) return;
        try {
            const token = sessionStorage.getItem('token');
            await api.deletePost(postId, token);
            setPosts(posts => posts.filter(p => p.id !== postId));
        } catch (err) {
            alert('Erro ao excluir post.');
        }
    };

    return (
        <div>
            {/* Banner com foto da ONG */}
            <div style={{ position: 'relative', height: 280, background: '#e9ecef' }} className="mb-5">
                <img
                    src={ong && ong.bannerUrl || ''}
                    alt="Banner"
                    style={{ width: '100%', height: 280, objectFit: 'cover', filter: 'brightness(0.7)' }}
                />
                <div style={{ position: 'absolute', left: 40, bottom: -48, zIndex: 2 }}>
                    <img
                        src={ong && ong.profilePhotoUrl || ''}
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
                            <h2 className="display-5 fw-bold text-success mb-2">
                                <FontAwesomeIcon icon={faBuilding} className="me-2" />
                                {ong ? (ong.fullName || ong.name) : ""}
                            </h2>
                            <p className="mb-2 text-secondary">
                                <FontAwesomeIcon icon={faClipboardList} className="me-2 text-success" />
                                {ong && ong.description ? ong.description : "Sem descrição."}
                            </p>
                            <div className="row g-2 mb-2">
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-1" /> Email:
                                    </span> {ong ? ong.email : ""}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">
                                        <FontAwesomeIcon icon={faIdCard} className="me-1" /> CNPJ:
                                    </span> {ong ? ong.federalTaxId : ""}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Endereço:
                                    </span> {ong ? `${ong.address}, ${ong.number} ${ong.complement || ''}` : ""}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="fw-medium">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Cidade/Estado:
                                    </span> {ong ? `${ong.city} - ${ong.state}` : ""}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-outline-success px-4 py-2" onClick={() => setShowEditOngModal(true)}>
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar Perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <EditOngModal show={showEditOngModal} onHide={() => setShowEditOngModal(false)} ong={ong} />

            {/* Tabs para Feed de Posts e Vagas */}
            <div className="container mb-5">
                <Tabs
                    defaultActiveKey="posts"
                    id="ong-tabs"
                    className="mb-3 custom-ong-tabs"
                    tabClassName="custom-tab-green"
                >
                    <Tab eventKey="posts" title={<span style={{ color: '#198754', fontWeight: 600 }}><FontAwesomeIcon icon={faClipboardList} className="me-1" />Feed de Postagens</span>}>
                        <div className="d-flex justify-content-end mb-3">
                            <button className="btn btn-success" onClick={() => setShowCreatePostModal(true)}>
                                <FontAwesomeIcon icon={faPlus} className="me-1" /> Novo Post
                            </button>
                        </div>
                        {posts.length === 0 && <div className="text-muted">Nenhuma postagem encontrada.</div>}
                        <div className="row g-4">
                            {posts.map((post) => (
                                <div className="col-12" key={post.id}>
                                    <div className="card shadow-sm h-100 border-0 mb-3" style={{ borderRadius: 18, background: '#f8f9fa' }}>
                                        <div className="card-body d-flex flex-column flex-md-row align-items-start gap-3">
                                            <div className="d-flex flex-column align-items-center me-3">
                                                <img
                                                    src={ong && ong.profilePhotoUrl ? ong.profilePhotoUrl : '/src/img/placeholder.png'}
                                                    alt="ONG"
                                                    className="rounded-circle border border-2 border-success"
                                                    style={{ width: 56, height: 56, objectFit: 'cover', marginBottom: 8 }}
                                                />
                                                <span className="fw-bold text-success small text-center">{ong ? (ong.name || ong.fullName) : ''}</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center mb-2">
                                                    <h5 className="card-title mb-0 me-2" style={{ fontWeight: 600 }}>{post.title}</h5>
                                                    <span className="badge bg-light text-success border border-success ms-2" style={{fontSize: 12}}><FontAwesomeIcon icon={faCalendarAlt} className="me-1" />{post.createdAt || ''}</span>
                                                </div>
                                                {post.imageUrl && (
                                                    <img
                                                        src={post.imageUrl}
                                                        alt={post.title}
                                                        className="mb-3 rounded"
                                                        style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain', display: 'block' }}
                                                    />
                                                )}
                                                <p className="card-text" style={{ fontSize: 16 }}>{post.body}</p>
                                            </div>
                                            <div className="d-flex flex-column align-items-end justify-content-between ms-auto">
                                                <button className="btn btn-outline-danger btn-sm mb-2" onClick={() => handleDeletePost(post.id)}>
                                                    <FontAwesomeIcon icon={faTrash} className="me-1" />Excluir
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <PostCreateModal
                            show={showCreatePostModal}
                            onHide={() => setShowCreatePostModal(false)}
                            onSubmit={() => {
                                setShowCreatePostModal(false);
                                // Atualiza os posts após criar
                                const token = sessionStorage.getItem("token");
                                const payload = decodeJWT(token);
                                const institutionId = payload && payload.institution_id;
                                if (institutionId) {
                                    api.listPostsByInstitution(institutionId)
                                        .then(res => res.json())
                                        .then(data => setPosts(data || []));
                                }
                            }}
                        />
                    </Tab>
                    <Tab eventKey="jobs" title={<span style={{ color: '#198754', fontWeight: 600 }}><FontAwesomeIcon icon={faBriefcase} className="me-1" />Vagas Disponíveis</span>}>
                        <div className="d-flex justify-content-end mb-3">
                            <button className="btn btn-success" onClick={() => setShowCreateJobModal(true)}>
                                <FontAwesomeIcon icon={faPlus} className="me-1" /> Nova Vaga
                            </button>
                        </div>
                        {jobs.length === 0 && <div className="text-muted">Nenhuma vaga encontrada.</div>}
                        <div className="row g-4">
                            {jobs.map((job) => (
                                <div className="col-12" key={job.id}>
                                    <div className={`card shadow-sm h-100${job.status === 'COMPLETED' ? ' border-success border-3' : ''}`} style={{ cursor: 'pointer' }}>
                                        <div className="card-body" onClick={() => { setSelectedJob(job); setShowJobDetailsModal(true); }}>
                                            <h5 className="card-title">
                                                <FontAwesomeIcon icon={faUserTie} className="me-2 text-success" />
                                                {job.name}
                                            </h5>
                                            <p className="card-text">{job.description}</p>
                                            <p className="card-text"><span className="badge bg-success"><FontAwesomeIcon icon={faCheckCircle} className="me-1" />{job.requirements}</span></p>
                                            <p className="card-text"><small className="text-muted">ID: {job.id}</small></p>
                                        </div>
                                        {job.status !== 'COMPLETED' && (
                                            <div className="card-footer bg-transparent border-0 d-flex justify-content-end gap-2">
                                                <button className="btn btn-outline-danger btn-sm" onClick={e => { e.stopPropagation(); handleDeleteJob(job.id); }}>
                                                    <FontAwesomeIcon icon={faTrash} className="me-1" />Excluir
                                                </button>
                                                <button className="btn btn-outline-success btn-sm" onClick={e => { e.stopPropagation(); handleCompleteJob(job.id); }}>
                                                    <FontAwesomeIcon icon={faCheckCircle} className="me-1" />Completar
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <JobCreateModal 
                            show={showCreateJobModal} 
                            onHide={() => setShowCreateJobModal(false)} 
                            onSubmit={() => {
                                setShowCreateJobModal(false);
                                // Atualiza as vagas após criar
                                const token = sessionStorage.getItem("token");
                                const payload = decodeJWT(token);
                                const institutionId = payload && payload.institution_id;
                                if (institutionId) {
                                    api.listJobsByInstitution(institutionId)
                                        .then(res => res.json())
                                        .then(data => setJobs(data || []));
                                }
                            }}
                        />
                        <JobDetailsModal show={showJobDetailsModal} onHide={() => setShowJobDetailsModal(false)} job={selectedJob} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default ProfileOng;
