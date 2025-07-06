import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFileAlt, faIdCard, faBarcode, faMapMarkerAlt, faHashtag, faEnvelope, faPhone, faCalendarAlt, faImage, faCity, faFlag, faLocationArrow, faMailBulk, faEdit } from '@fortawesome/free-solid-svg-icons';
import api from '../services/api';

function EditOngModal({ show, onHide, ong, onSubmit, loading }) {
  const [form, setForm] = useState({});
  const [banner, setBanner] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (ong) {
      setForm({ ...ong });
      setBannerPreview(ong.bannerUrl || null);
      setPhotoPreview(ong.photoUrl || null);
    }
  }, [ong]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (name === 'banner') {
        setBanner(files[0]);
        setBannerPreview(URL.createObjectURL(files[0]));
      } else if (name === 'photo') {
        setPhoto(files[0]);
        setPhotoPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.name || !form.federalTaxId || !form.address || !form.email) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }
    setError('');
    try {
      const formData = new FormData();
      // Adiciona todos os campos do formulário ao FormData, usando snake_case para bater com o DTO
      if (form.fullName) formData.append('full_name', form.fullName);
      if (form.name) formData.append('name', form.name);
      if (form.description) formData.append('description', form.description);
      if (form.federalTaxId) formData.append('federal_tax_id', form.federalTaxId);
      if (form.cnae) formData.append('cnae', form.cnae);
      if (form.address) formData.append('address', form.address);
      if (form.number) formData.append('number', form.number);
      if (form.complement) formData.append('complement', form.complement);
      if (form.district) formData.append('district', form.district);
      if (form.zip) formData.append('zip', form.zip);
      if (form.cityId) formData.append('cityId', form.cityId);
      if (form.stateId) formData.append('stateId', form.stateId);
      if (form.email) formData.append('email', form.email);
      if (banner) formData.append('banner', banner);
      if (photo) formData.append('profilePhoto', photo);
      if (form.profilePhoto) formData.append('profilePhoto', form.profilePhoto);
      const token = window.sessionStorage.getItem('token');
      const res = await api.editInstitution(formData, token);
      if (res.ok) {
        if (onSubmit) onSubmit({ ...form, banner, photo });
        window.location.reload();
      } else {
        setError('Erro ao atualizar instituição.');
      }
    } catch (err) {
      setError('Erro ao atualizar instituição.');
    }
  };

  const handleClose = () => {
    setError('');
    if (onHide) onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faEdit} className="me-2 text-success" />Editar ONG
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="edit-ong-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row g-3">
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faBuilding} className="me-1" /> Nome completo</Form.Label>
              <Form.Control type="text" name="fullName" value={form.fullName || ''} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Nome fantasia</Form.Label>
              <Form.Control type="text" name="name" value={form.name || ''} onChange={handleChange} required />
            </div>
            <div className="col-12">
              <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Descrição</Form.Label>
              <Form.Control as="textarea" name="description" value={form.description || ''} onChange={handleChange} rows={2} />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faIdCard} className="me-1" /> CNPJ</Form.Label>
              <Form.Control type="text" name="federalTaxId" value={form.federalTaxId || ''} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faBarcode} className="me-1" /> CNAE</Form.Label>
              <Form.Control type="text" name="cnae" value={form.cnae || ''} onChange={handleChange} />
            </div>
            <div className="col-md-8">
              <Form.Label><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Endereço</Form.Label>
              <Form.Control type="text" name="address" value={form.address || ''} onChange={handleChange} required />
            </div>
            <div className="col-md-2">
              <Form.Label><FontAwesomeIcon icon={faHashtag} className="me-1" /> Número</Form.Label>
              <Form.Control type="number" name="number" value={form.number || ''} onChange={handleChange} />
            </div>
            <div className="col-md-2">
              <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Compl.</Form.Label>
              <Form.Control type="text" name="complement" value={form.complement || ''} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Bairro</Form.Label>
              <Form.Control type="text" name="district" value={form.district || ''} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faMailBulk} className="me-1" /> CEP</Form.Label>
              <Form.Control type="text" name="zip" value={form.zip || ''} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faCity} className="me-1" /> Cidade</Form.Label>
              <Form.Control type="text" name="city" value={form.city || ''} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Form.Label><FontAwesomeIcon icon={faFlag} className="me-1" /> Estado</Form.Label>
              <Form.Control type="text" name="state" value={form.state || ''} onChange={handleChange} />
            </div>
            <div className="col-md-3">
              <Form.Label><FontAwesomeIcon icon={faLocationArrow} className="me-1" /> DDD</Form.Label>
              <Form.Control type="text" name="area_code" value={form.area_code || ''} onChange={handleChange} />
            </div>
            <div className="col-md-5">
              <Form.Label><FontAwesomeIcon icon={faPhone} className="me-1" /> Telefone</Form.Label>
              <Form.Control type="text" name="phone_number" value={form.phone_number || ''} onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <Form.Label><FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Data de abertura</Form.Label>
              <Form.Control type="date" name="opening_date" value={form.opening_date ? form.opening_date.substring(0,10) : ''} onChange={handleChange} />
            </div>
            <div className="col-md-8">
              <Form.Label><FontAwesomeIcon icon={faEnvelope} className="me-1" /> Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email || ''} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <Form.Label><FontAwesomeIcon icon={faImage} className="me-1" /> Banner</Form.Label>
              <Form.Control type="file" name="banner" accept="image/*" onChange={handleChange} />
              {bannerPreview && <img src={bannerPreview} alt="Banner Preview" className="img-fluid mt-2 rounded" style={{maxHeight: 80}} />}
            </div>
            <div className="col-md-4">
              <Form.Label><FontAwesomeIcon icon={faImage} className="me-1" /> Foto</Form.Label>
              <Form.Control type="file" name="photo" accept="image/*" onChange={handleChange} />
              {photoPreview && <img src={photoPreview} alt="Foto Preview" className="img-fluid mt-2 rounded-circle" style={{maxHeight: 80, maxWidth: 80}} />}
            </div>
          </div>
          {error && <div className="alert alert-danger py-2 mt-3">{error}</div>}
          <div className="d-flex justify-content-end mt-4">
            <Button type="button" variant="secondary" className="me-2" onClick={handleClose} disabled={loading}>Cancelar</Button>
            <Button type="button" variant="success" disabled={loading} onClick={handleSubmit}>
              {loading ? 'Salvando...' : (<><FontAwesomeIcon icon={faEdit} className="me-1" />Salvar Alterações</>)}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditOngModal;
