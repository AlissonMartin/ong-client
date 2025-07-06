import HeaderLog from "../../components/HeaderLog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import FULL_PROFILE from "../../img/FULL_PROFILE.png";
import FIRSTAPPLY from "../../img/FIRSTAPPLY.png";
import FIRSTCHOSENAPPLY from "../../img/FIRSTCHOSENAPPLY.png";

function ShowUsu() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.showUser();
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  function editUsu() {
    navigate('/users/edit');
  }
  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <div className="bg-white rounded shadow p-4 w-100" style={{ maxWidth: "600px" }}>
          <div className="d-flex flex-column align-items-center">
            <img
              src={user && user.photoUrl ? user.photoUrl : ""}
              alt="Foto do Usuário"
              className="rounded-circle mb-3 shadow"
              style={{ width: "96px", height: "96px", objectFit: "cover" }}
            />

            <h2 className="h4 fw-bold text-dark mb-3">{user ? user.name : ""}</h2>

            <div className="w-100 small text-secondary">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-medium">Email:</span>
                <span>{user ? user.email : ""}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-medium">CPF:</span>
                <span>{user ? user.federalTaxId : ""}</span>
              </div>
            </div>

            {/* Achievements Section */}
            {user && user.userAchievements && user.userAchievements.length > 0 && (
              <div className="w-100 mt-4">
                <h5 className="fw-bold text-success mb-2">Conquistas</h5>
                <div className="d-flex flex-wrap gap-3">
                  {user.userAchievements.map((ach, idx) => (
                    <OverlayTrigger
                      key={idx}
                      placement="top"
                      overlay={
                        <Popover id={`popover-achievement-${idx}`}>
                          <Popover.Header as="h3">{ach.name || ach.title || "Conquista"}</Popover.Header>
                          <Popover.Body>
                            {ach.description || "Sem descrição."}
                            {ach.date && <div className="mt-2 text-muted small">Data: {ach.date}</div>}
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <img
                        src={ach.criteria == "FULL_PROFILE" ? FULL_PROFILE : ach.criteria == "FIRSTAPPLY" ? FIRSTAPPLY : ach.criteria == "FIRSTCHOSENAPPLY" ? FIRSTCHOSENAPPLY : ""}
                        alt={ach.name || ach.title || "Conquista"}
                        style={{ width: 64, height: 64, objectFit: 'contain', borderRadius: 8, border: '2px solid #198754', background: '#fff', cursor: 'pointer' }}
                      />
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <button onClick={editUsu} className="btn btn-success px-4 py-2">Editar Perfil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowUsu;
