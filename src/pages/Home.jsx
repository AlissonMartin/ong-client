import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import api from "../services/api";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const [ongList, setOngList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await api.listInstitutions('', 0, 3);
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
      {/* Carrossel principal */}
      <Carousel className="mb-5" style={{ maxHeight: 480, overflow: 'hidden' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/img/logo-banner.png"
            alt="Primeiro slide"
            style={{ objectFit: 'cover', height: 480 }}
          />
          <Carousel.Caption>
            <h3>Bem-vindo à Plataforma de ONGs</h3>
            <p>Encontre, apoie e faça parte de projetos que transformam vidas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/img/diversos-voluntarios-tomando-uma-selfie-juntos.jpg"
            alt="Segundo slide"
            style={{ objectFit: 'cover', height: 480 }}
          />
          <Carousel.Caption>
            <h3>Conecte-se com causas sociais</h3>
            <p>Descubra ONGs e oportunidades de voluntariado perto de você.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/img/origami-cadeia-pessoas-com-globo.jpg"
            alt="Terceiro slide"
            style={{ objectFit: 'cover', height: 480 }}
          />
          <Carousel.Caption>
            <h3>Transforme o mundo</h3>
            <p>Junte-se a uma rede de pessoas engajadas em fazer a diferença.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Conteúdo restante da página */}
      <div className="d-flex flex-column align-items-center">
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
              <div
                className="card h-100 shadow-sm border-0 cursor-pointer"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/ong/show?id=${ong.id}`)}
              >
                <img
                  src={ong.bannerUrl || '/src/img/placeholder.png'}
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
      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <div className="mb-2">
            <img src="/src/img/logo.png" alt="Logo ONG" style={{height: 40}} className="mb-2" />
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} Plataforma de ONGs. Todos os direitos reservados.</span>
          </div>
          <div className="mt-2">
            <small>Desenvolvido por voluntários para um mundo melhor.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home