import Header from "./components/header";
import image from "./img/placeholder.png";

function App (){
  return(
  <div>
  <Header />
  <div className="flex basis-full">
    <img src={image} className="mx-auto w-fit"></img>
  </div>
  <h1 className="text-center pt-4 text-lg">Faça do mundo um lugar melhor</h1>
  </div>
  )
}

export default App