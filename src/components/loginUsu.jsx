function LoginUsu(){
    return(
        <div className="flex justify-center">
            <div className="bg-slate-300 rounded-md w-[500px] p-10">
                <form>
                    <div className="p-2 text-center">Email: <input type="text" name="email" /></div>
                    <div className="p-2 pb-4 text-center">Senha: <input type="password" name="senha"/></div>
                    <div className="text-center bg-lime-600 p-2 rounded-sm"><input type="submit" /></div>
                </form>
            </div>
        </div>
    )
}

export default LoginUsu