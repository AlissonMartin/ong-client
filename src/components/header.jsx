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
    return(
        <div className="bg-lime-600 pt-6 pb-6 flex">
                <div className="flex items-center basis-9/12">
                    <img className="text-2xl pl-4 cursor-pointer" onClick={home} src={logo} style={{width: "90px", height: "60px"}}></img>
                </div>
                <button onClick={sobreNos} className="px-6 mr-3 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Cadastrar</button>
                <button onClick={login} className="px-6 mr-3 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Login</button>
                <button onClick={sobreNos} className="px-6 mr-3 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">Sobre a gente</button>
        </div>
    )
}

export default Header 