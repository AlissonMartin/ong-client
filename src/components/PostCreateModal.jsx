import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faHeading, faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import api from '../services/api';

function PostCreateModal({ show, onHide, onSubmit, loading: loadingProp }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      if (image) formData.append('image', image);
      const token = sessionStorage.getItem('token');
      const response = await api.createPost(formData, token);
      if (response.ok) {
        setTitle('');
        setBody('');
        setImage(null);
        setImagePreview(null);
        if (onSubmit) onSubmit();
        if (onHide) onHide();
      } else {
        setError('Erro ao criar post.');
      }
    } catch (err) {
      setError('Erro ao criar post.');
    }
    setLoading(false);
  };

  const handleClose = () => {
    setTitle('');
    setBody('');
    setImage(null);
    setImagePreview(null);
    setError('');
    if (onHide) onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />Cadastrar Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="postTitle">
            <Form.Label><FontAwesomeIcon icon={faHeading} className="me-1" />Título</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Digite o título do post"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postBody">
            <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1" />Conteúdo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={body}
              onChange={e => setBody(e.target.value)}
              placeholder="Digite o conteúdo do post"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postImage">
            <Form.Label><FontAwesomeIcon icon={faImage} className="me-1" />Imagem (opcional)</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="img-fluid mt-2 rounded" style={{maxHeight: 120}} />}
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

export default PostCreateModal;
