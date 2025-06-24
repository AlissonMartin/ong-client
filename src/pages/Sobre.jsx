import Header from "../components/Header.jsx";

function Sobre() {
  return (
    <div>
      <div className="container my-5 px-3">
        <div className="mx-auto bg-white shadow rounded overflow-hidden" style={{ maxWidth: "960px" }}>
          <div className="bg-success text-white text-center py-4">
            <h1 className="h3 fw-bold">Sobre Nós</h1>
          </div>
          <div className="p-4 text-secondary">
            <section className="mb-4">
              <h2 className="h4 fw-semibold text-dark mb-3">Quem Somos</h2>
              <p className="mb-0">
                Somos uma equipe que busca uma forma de tornar o mundo melhor dando destaque a quem merece ser destacado
              </p>
            </section>
            <section className="mb-4">
              <h2 className="h4 fw-semibold text-dark mb-3">O Que Fazemos</h2>
              <p className="mb-0">
                Nosso site foi criado com o objetivo de divulgar o trabalho voluntario, dando destaques a ongs e instituicoes perto de voce.
                Trabalhamos para proporcionar uma experiência intuitiva e eficiente aos nossos usuários.
              </p>
            </section>
            <section>
              <h2 className="h4 fw-semibold text-dark mb-3">Nossa Missão</h2>
              <p className="mb-0">
                Buscamos impactar positivamente a vida das pessoas,
                oferecendo uma forma das pessoas ajudarem as outras e tornar o mundo um lugar melhor
              </p>
            </section>
          </div>
          <div className="bg-light text-center py-3">
            <p className="text-muted mb-0">
              &copy; 2024 Seu Site. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
