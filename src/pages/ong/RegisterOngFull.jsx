import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faIdCard, faFileAlt, faBarcode, faMapMarkerAlt, faHashtag, faEnvelope, faPhone, faCalendarAlt, faImage, faPlus, faCity, faFlag, faLocationArrow, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {
  full_name: '',
  name: '',
  description: '',
  federal_tax_id: '',
  cnae: '',
  address: '',
  number: '',
  complement: '',
  district: '',
  zip: '',
  city: '',
  state: '',
  area_code: '',
  phone_number: '',
  opening_date: '',
  email: '',
  banner: null,
  photo: null,
};

function RegisterOngFull({ onSubmit }) {
  const [form, setForm] = useState(initialState);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm({ ...form, [name]: files[0] });
      if (name === 'banner') setBannerPreview(URL.createObjectURL(files[0]));
      if (name === 'photo') setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg">
            <div className="card-header bg-success text-white text-center">
              <FontAwesomeIcon icon={faPlus} className="me-2" />Cadastro de ONG
            </div>
            <form className="card-body p-4" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faBuilding} className="me-1" /> Nome completo</label>
                  <input type="text" className="form-control" name="full_name" value={form.full_name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Nome fantasia</label>
                  <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label"><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Descrição</label>
                  <textarea className="form-control" name="description" value={form.description} onChange={handleChange} rows={2} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faIdCard} className="me-1" /> CNPJ</label>
                  <input type="text" className="form-control" name="federal_tax_id" value={form.federal_tax_id} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faBarcode} className="me-1" /> CNAE</label>
                  <input type="text" className="form-control" name="cnae" value={form.cnae} onChange={handleChange} />
                </div>
                <div className="col-md-8">
                  <label className="form-label"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Endereço</label>
                  <input type="text" className="form-control" name="address" value={form.address} onChange={handleChange} required />
                </div>
                <div className="col-md-2">
                  <label className="form-label"><FontAwesomeIcon icon={faHashtag} className="me-1" /> Número</label>
                  <input type="number" className="form-control" name="number" value={form.number} onChange={handleChange} required />
                </div>
                <div className="col-md-2">
                  <label className="form-label"><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Compl.</label>
                  <input type="text" className="form-control" name="complement" value={form.complement} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faFileAlt} className="me-1" /> Bairro</label>
                  <input type="text" className="form-control" name="district" value={form.district} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faMailBulk} className="me-1" /> CEP</label>
                  <input type="text" className="form-control" name="zip" value={form.zip} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faCity} className="me-1" /> Cidade</label>
                  <input type="text" className="form-control" name="city" value={form.city} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><FontAwesomeIcon icon={faFlag} className="me-1" /> Estado</label>
                  <input type="text" className="form-control" name="state" value={form.state} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label className="form-label"><FontAwesomeIcon icon={faLocationArrow} className="me-1" /> DDD</label>
                  <input type="text" className="form-control" name="area_code" value={form.area_code} onChange={handleChange} />
                </div>
                <div className="col-md-5">
                  <label className="form-label"><FontAwesomeIcon icon={faPhone} className="me-1" /> Telefone</label>
                  <input type="text" className="form-control" name="phone_number" value={form.phone_number} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label"><FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Data de abertura</label>
                  <input type="date" className="form-control" name="opening_date" value={form.opening_date} onChange={handleChange} />
                </div>
                <div className="col-md-8">
                  <label className="form-label"><FontAwesomeIcon icon={faEnvelope} className="me-1" /> Email</label>
                  <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label className="form-label"><FontAwesomeIcon icon={faImage} className="me-1" /> Banner</label>
                  <input type="file" className="form-control" name="banner" accept="image/*" onChange={handleChange} />
                  {bannerPreview && <img src={bannerPreview} alt="Banner Preview" className="img-fluid mt-2 rounded" style={{maxHeight: 80}} />}
                </div>
                <div className="col-md-4">
                  <label className="form-label"><FontAwesomeIcon icon={faImage} className="me-1" /> Foto</label>
                  <input type="file" className="form-control" name="photo" accept="image/*" onChange={handleChange} />
                  {photoPreview && <img src={photoPreview} alt="Foto Preview" className="img-fluid mt-2 rounded-circle" style={{maxHeight: 80, maxWidth: 80}} />}
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-success px-4">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />Cadastrar ONG
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOngFull;
