import { useState } from "react"
import Header from "../components/header.jsx"
import LoginOng from "../components/loginOng.jsx"
import LoginUsu from "../components/loginUsu.jsx"

function Login(){
    const [usuario , setState] = useState(<LoginUsu/>)
    return(
        <div>
            <Header />
            <div className="flex justify-center p-10">
                <div className=" bg-slate-400 rounded-sm w-[500px] p-10">
                    <div className="bg-lime-600 text-center p-4 rounded-md">
                        <button onClick={() => {setState(<LoginUsu/>)}}>Usuario</button>
                    </div><br/>
                    <div className="bg-lime-600 text-center p-4 rounded-md">
                        <button onClick={() => {setState(<LoginOng/>)}}>Ong</button>
                    </div>
                </div>
            </div>
            <div>
                {usuario}
            </div>
        </div>
    )
}

export default Login