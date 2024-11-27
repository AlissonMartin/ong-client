import { useNavigate } from "react-router-dom"
import logo from "../img/logo.png"

function Header () {
    const navegate = useNavigate();
    function sobreNos() {
        navegate('/sobre')}
        function home() {
            navegate('/')
    }
    function login() {
        navegate('/login')
    }
    function cadastro() {
        navegate('/cadastro')
    }
    return(
        <div className="bg-lime-600 pt-6 pb-6 flex">
                <div className="flex items-center basis-9/12">
                    <img className="text-2xl pl-4 cursor-pointer" onClick={home} src={logo} style={{width: "90px", height: "60px"}}></img>
                </div>
                <button 
  onClick={cadastro} 
  className="px-6 py-3 mr-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-lime-600 transition duration-200"
>
  Cadastrar
</button>
<button 
  onClick={login} 
  className="px-6 py-3 mr-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-lime-600 transition duration-200"
>
  Login
</button>
<button 
  onClick={sobreNos} 
  className="px-6 py-3 mr-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-lime-600 transition duration-200"
>
  Sobre a gente
</button>

        </div>
    )
}

export default Header 