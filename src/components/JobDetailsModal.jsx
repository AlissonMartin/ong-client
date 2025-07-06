import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faFileAlt, faTimes, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import api from '../services/api';

function JobDetailsModal({ show, onHide, job }) {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);

    // Função para buscar candidaturas (reutilizável)
    const fetchApplications = async () => {
        if (!job) return;
        setLoading(true);
        try {
            const token = sessionStorage.getItem('token');
            const response = await api.getJobDetails(job.id, token);
            const data = await response.json();
            setApplications(data.jobApplications || []);
        } catch (err) {
            setApplications([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (show && job) fetchApplications();
    }, [show, job]);

    const handleReject = async (id) => {
        const token = sessionStorage.getItem('token');
        await api.rejectJobApplication(id, token);
        await fetchApplications(); // Atualiza lista após ação
    };
    const handleChoose = async (id) => {
        const token = sessionStorage.getItem('token');
        await api.chooseJobApplication(id, token);
        await fetchApplications(); // Atualiza lista após ação
    };

    if (!job) return null;

    return (
        <Modal show={show} onHide={onHide} size="xl" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <FontAwesomeIcon icon={faBriefcase} className="me-2 text-success" />Detalhes da Vaga
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="fw-bold mb-2">{job.name}</h5>
                <p><strong>Descrição:</strong> {job.description}</p>
                <p><strong>Requisitos:</strong> {job.requirements}</p>
                <hr />
                <h6 className="fw-bold mb-3">Candidaturas</h6>
                {loading ? (
                    <div>Carregando candidaturas...</div>
                ) : applications.length === 0 ? (
                    <div className="text-muted">Nenhuma candidatura para esta vaga.</div>
                ) : (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><FontAwesomeIcon icon={faUser} /> Nome</th>
                                <th><FontAwesomeIcon icon={faEnvelope} /> Email</th>
                                <th><FontAwesomeIcon icon={faFileAlt} /> Currículo</th>
                                <th>Mensagem</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map(app => {
                                let colorClass = '';
                                if (app.status === 'REJECTED') colorClass = 'text-danger';
                                if (app.status === 'CHOSEN') colorClass = 'text-success';
                                // Tradução dos status
                                let statusLabel = '-';
                                if (app.status === 'ONGOING') statusLabel = 'Em andamento';
                                else if (app.status === 'REJECTED') statusLabel = 'Rejeitada';
                                else if (app.status === 'CHOSEN') statusLabel = 'Selecionada';
                                else if (app.status) statusLabel = app.status;
                                return (
                                    <tr key={app.id}>
                                        <td className={colorClass}>{app.user.name || '-'}</td>
                                        <td className={colorClass}>{app.user.email || '-'}</td>
                                        <td className={colorClass}>{app.curriculumUrl ? <a href={app.curriculumUrl} target="_blank" rel="noopener noreferrer">Ver PDF</a> : '-'}</td>
                                        <td className={colorClass}>{app.message || '-'}</td>
                                        <td className={colorClass}>{statusLabel}</td>
                                        <td>
                                            {app.status === 'ONGOING' && (
                                                <>
                                                    <Button variant="link" className="text-danger" onClick={() => handleReject(app.id)}>
                                                        Desclassificar
                                                    </Button>
                                                    <Button variant="link" className="text-success" onClick={() => handleChoose(app.id)}>
                                                        Selecionar
                                                    </Button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    <FontAwesomeIcon icon={faTimes} className="me-1" /> Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default JobDetailsModal;
