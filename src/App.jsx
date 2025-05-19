import Header from "./components/Header";
import image from "./img/placeholder.png";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="container-fluid p-0">
          <img
            src={image}
            alt="Inspirational"
            className="img-fluid w-100"
            style={{ height: '60vh', objectFit: 'cover' }}
          />
        </div>
        <div className=" inset-0 flex flex-col items-center justify-center bg-opacity-50 m-4">
          <h1 className="text-4xl font-extrabold drop-shadow-md text-center">
            Faça do mundo um lugar melhor
          </h1>
          <p className="mt-4 text-lg text-center max-w-2xl">
            Junte-se a nós nessa missão para criar um impacto positivo no mundo por meio de ideias inovadoras e ações transformadoras.
          </p>
        </div>

      </div>

    </div>
  )
}

export default App