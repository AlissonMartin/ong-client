import { useNavigate } from "react-router-dom"

function Header () {
    const navegate = useNavigate();
    function sobreNos() {
        navegate('/sobre')
    }
    return(
        <div className="bg-lime-600 pt-6 pb-6 flex">
                <div className="text-2xl text-white pl-4 basis-9/12">Konekta</div>
                <div className="basis-1/12 border-r-2 text-center border-slate-800"><button>Cadastrar</button></div>
                <div className="basis-1/12 border-r-2 text-center border-slate-800"><button>Login</button></div>
                <div className="basis-1/12 text-center"><button onClick={sobreNos}>Sobre a gente</button></div>
        </div>
    )
}

export default Header 