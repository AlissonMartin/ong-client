import HeaderLog from "../components/HeaderLog";
import noPic from "../img/noPic.jpg";

function ShowUsu (){
  return(
    <div>
        <HeaderLog />
        <div className="flex m-10 justify-center">
        <div class="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">
    <div class="flex flex-col items-center">

      <img src={noPic} alt="Foto do Usuário" class="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />


      <h2 class="text-2xl font-bold text-gray-800 mb-1">João da Silva</h2>

      <div class="w-full space-y-4 text-sm text-gray-700">
        <div class="flex justify-between">
          <span class="font-medium">Email:</span>
          <span class="text-gray-600">joao@email.com</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium">Telefone:</span>
          <span class="text-gray-600">(11) 91234-5678</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium">Senha:</span>
          <span class="text-gray-600">••••••••</span>
        </div>
      </div>

      <div class="mt-8">
        <button class="px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition duration-200">Editar Perfil</button>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default ShowUsu