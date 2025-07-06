
import { Outlet, Navigate } from "react-router-dom";
import { getUserRole, isLogged } from "./AuthHandler";

const LoggedRoutes =  ()=> {
    let logged = isLogged()

    return (
        logged ? <Outlet/> : <Navigate to="/" />
    )
}

export default LoggedRoutes