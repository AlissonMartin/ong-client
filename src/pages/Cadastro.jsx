import { useState } from "react"
import Header from "../components/header.jsx"
import RegisterOng from "../components/RegisterOng.jsx"
import RegisterUsu from "../components/RegisterUsu.jsx"

function Cadastro(){
    const [isUser, setIsUser] = useState(true)
    return(
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="flex justify-center items-center mt-12">
                <div className="bg-white shadow-xl rounded-lg w-[500px] p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Cadastro</h2>
                    
                    <button 
                        className="w-full py-3 bg-lime-600 text-white font-semibold rounded-lg mb-4 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                        onClick={() => setIsUser(true)}
                    >
                        Usuario
                    </button>

                    <button 
                        className="w-full py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                        onClick={() => setIsUser(false)}
                    >
                        Ong
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                {isUser && 
                    <RegisterUsu/>
                }
                {!isUser &&
                    <RegisterOng/>
                }
            </div>
            
        </div>
    )
}

export default Cadastro