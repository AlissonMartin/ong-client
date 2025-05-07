import Header from "../components/header.jsx"

function Sobre(){
    return(
        <div>
            <Header />
            <div className="m-14 py-10 px-4">
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="bg-gradient-to-r from-lime-600 to-lime-800 text-white text-center py-6">
      <h1 className="text-3xl font-bold">Sobre Nós</h1>
    </div>
    <div className="p-8 space-y-6 text-gray-700">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quem Somos</h2>
        <p className="leading-relaxed">
          Somos uma equipe que busca uma forma de tornar o mundo melhor dando destaque a quem merece ser destacado
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">O Que Fazemos</h2>
        <p className="leading-relaxed">
          Nosso site foi criado com o objetivo de divulgar o trabalho voluntario, dando destaques a ongs e instituicoes perto de voce
          Trabalhamos para proporcionar uma experiência intuitiva e eficiente aos nossos usuários.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h2>
        <p className="leading-relaxed">
          Buscamos impactar positivamente a vida das pessoas, 
          oferecendo uma forma das pessoas ajudarem as outras e tornar o mundo um lugar melhor
        </p>
      </section>
    </div>
    <div className="bg-gray-50 text-center py-4">
      <p className="text-gray-600">
        &copy; 2024 Seu Site. Todos os direitos reservados.
      </p>
    </div>
  </div>
</div>
        </div>
    )
}

export default Sobre