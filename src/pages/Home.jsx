import { useEffect, useState } from "react"
import api from "../services/api";

function Home() {
  const [ongList, setOngList] = useState([])

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await api.listInstitutions();
        const data = await response.json();
        setOngList(data);
      } catch (error) {
        setOngList([]);
      }
    };
    fetchOngs();
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <div className="d-flex flex-column align-items-center">
        {/* <div className="container-fluid p-0">
          <img
            src={image}
            alt="Inspirational"
            className="img-fluid w-100"
            style={{ height: '60vh', objectFit: 'cover' }}
          />
        </div> */}
        <div className="position-relative d-flex flex-column align-items-center justify-content-center bg-opacity-50 m-4">
          <h1 className="display-4 fw-bold text-center text-shadow">
            Faça do mundo um lugar melhor
          </h1>
          <p className="mt-4 fs-5 text-center w-100" style={{maxWidth: '600px'}}>
            Junte-se a nós nessa missão para criar um impacto positivo no mundo por meio de ideias inovadoras e ações transformadoras.
          </p>
        </div>
      </div>
      <h1 className="h2 fw-bold text-center text-secondary mb-4">
        Ongs
      </h1>
      <div className="container">
        <div className="row g-4">
          {ongList && ongList.map((ong) => (
            <div
              key={ong.id}
              className="col-12 col-sm-6 col-md-4"
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={ong.image || '/src/img/placeholder.png'}
                  alt={ong.name}
                  className="card-img-top"
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <div className="card-body">
                  <h2 className="card-title h5 fw-bold text-dark">{ong.name}</h2>
                  <p className="card-text text-muted">{ong.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home