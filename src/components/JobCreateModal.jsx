import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import api from '../services/api';

function JobCreateModal({ show, onHide, onSubmit, loading }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError('Preencha todos os campos.');
      return;
    }
    setError('');
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      const token = sessionStorage.getItem('token');
      await api.createJob(formData, token);
      if (onSubmit) onSubmit();
      handleClose();
    } catch (err) {
      setError('Erro ao cadastrar vaga.');
    }
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    setError('');
    if (onHide) onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />Cadastrar Vaga
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="jobName">
            <Form.Label><FontAwesomeIcon icon={faBriefcase} className="me-1" />Nome da Vaga</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Digite o nome da vaga"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jobDescription">
            <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1" />Descrição</Form.Label>
            <Form.Control
              as="textarea"w
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Descreva a vaga"
              required
            />
          </Form.Group>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose} disabled={loading}>Cancelar</Button>
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? 'Salvando...' : (<>Cadastrar</>)}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default JobCreateModal;
