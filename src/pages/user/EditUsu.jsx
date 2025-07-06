import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import HeaderLog from "../../components/HeaderLog";

function EditUsu() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    profilePicture: null
  });
  const [photoUrl, setPhotoUrl] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.showUser();
        const data = await response.json();
        setForm({
          name: data.name || "",
          email: data.email || "",
          password: "",
          bio: data.bio || "",
          photo: null
        });
        setPhotoUrl(data.photoUrl);
      } catch (err) {
        setError("Erro ao carregar dados do usuário.");
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      setForm({ ...form, photo: files[0] });
      setPhotoUrl(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      if (form.password) formData.append("password", form.password);
      if (form.bio) formData.append("bio", form.bio);
      if (form.photo) formData.append("photo", form.photo);
      const response = await api.updateUser(formData);
      if (response.ok) {
        setSuccess("Perfil atualizado com sucesso!");
        navigate('/users/show');
      } else {
        const data = await response.json();
        setError(data.message || "Erro ao atualizar perfil.");
      }
    } catch (err) {
      setError("Erro ao atualizar perfil.");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.location.href = '/users/show';
  };

  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="mx-auto bg-white p-4 rounded shadow" style={{ maxWidth: "600px" }}>
            <h2 className="h4 fw-bold mb-4 text-dark">Editar Perfil</h2>
            <form className="d-grid gap-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="bio" className="form-label">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="3"
                  className="form-control"
                  value={form.bio}
                  onChange={handleChange}
                  placeholder="Fale um pouco sobre você..."
                ></textarea>
              </div>
              <div>
                <label className="form-label">Foto de Perfil</label>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <img
                    src={photoUrl ? photoUrl : ""}
                    alt="Foto atual"
                    className="rounded-circle"
                    style={{ width: "64px", height: "64px", objectFit: "cover" }}
                  />
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <div className="d-flex justify-content-end gap-2 mt-3">
                <button type="reset" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="btn btn-success">Editar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUsu;
