function LoginUsu() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg w-[500px] p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login de Usuário</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite seu email"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="senha" className="block text-gray-700 font-semibold mb-2">Senha</label>
                        <input 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            placeholder="Digite a sua senha"
                        />
                    </div>

                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginUsu;