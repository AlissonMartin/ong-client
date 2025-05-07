import HeaderLog from "../components/HeaderLog";
import noPic from "../img/noPic.jpg";

function EditUsu (){
  return(
    <div>
        <HeaderLog />
        <div>
            <div className="mt-10">
                <div class="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Editar Perfil</h2>
    
    <form class="space-y-6">

      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
        <input type="text" id="name" name="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value="Usuario"/>
      </div>


      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value="voce@email.com" />
      </div>

 
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Nova Senha</label>
        <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value="••••••••" />
      </div>


      <div>
        <label for="bio" class="block text-sm font-medium text-gray-700">Bio</label>
        <textarea id="bio" name="bio" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value="Fale um pouco sobre você..."></textarea>
      </div>


      <div>
        <label class="block text-sm font-medium text-gray-700">Foto de Perfil</label>
        <div class="mt-2 flex items-center gap-4">
          <img class="h-16 w-16 rounded-full object-cover" src={noPic} alt="Foto atual" />
          <input type="file" class="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-lime-50 file:text-lime-700 hover:file:bg-lime-100" />
        </div>
      </div>

      <div class="flex justify-end gap-4">
        <button type="reset" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancelar</button>
        <button type="submit" class="px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700">Editar</button>
      </div>
    </form>
  </div>
            </div>
        </div>
    </div>
  )
}

export default EditUsu