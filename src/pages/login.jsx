import Header from "../components/header.jsx"
import LoginUsu from "../components/loginUsu.jsx"

function Login(){
    return(
        <div>
            <Header />
            <div className="flex justify-center p-10">
                <div className=" bg-slate-400 rounded-sm w-[500px] p-10">
                    <div className="bg-lime-600 text-center p-4 rounded-md">
                        <button>Usuario</button>
                    </div><br/>
                    <div className="bg-lime-600 text-center p-4 rounded-md">
                        <button>Ong</button>
                    </div>
                </div>
            </div>
            <LoginUsu/>
        </div>
    )
}

export default Login