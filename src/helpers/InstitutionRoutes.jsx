
import { Outlet, Navigate } from "react-router-dom";
import { getUserRole, isLogged } from "./AuthHandler";

const InstitutionRoutes =  ()=> {
    let logged = isLogged()
    let role = getUserRole();

    return (
        logged && role == "INSTITUTION" ? <Outlet/> : <Navigate to="/" />
    )
}

export default InstitutionRoutes