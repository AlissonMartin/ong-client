import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import api from '../services/api';

function JobApplicationModal({ show, onHide, job, onSuccess }) {
  const [curriculum, setCurriculum] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setCurriculum(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      if (curriculum) formData.append('curriculum', curriculum);
      if (message) formData.append('message', message);
      const response = await api.createJobApplication(job.id, formData);
      if (response.ok) {
        setSuccess('Candidatura enviada com sucesso!');
        if (onSuccess) onSuccess();
      } else {
        const data = await response.json();
        setError(data.message || 'Erro ao enviar candidatura.');
      }
    } catch (err) {
      setError('Erro ao enviar candidatura.');
    }
    setLoading(false);
  };

  if (!job) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalhes da Vaga</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="fw-bold mb-2">{job.name}</h5>
        <p><strong>Descrição:</strong> {job.description}</p>
        <p><strong>Requisitos:</strong> {job.requirements}</p>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="curriculum">
            <Form.Label>Currículo (PDF)</Form.Label>
            <Form.Control type="file" accept="application/pdf" onChange={handleFileChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Mensagem (opcional)</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
          </Form.Group>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onHide} disabled={loading}>Cancelar</Button>
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Candidatura'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default JobApplicationModal;
