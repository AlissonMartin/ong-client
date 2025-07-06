
import { Outlet, Navigate } from "react-router-dom";
import { getUserRole, isLogged } from "./AuthHandler";

const UserRoutes =  ()=> {
    let logged = isLogged()
    let role = getUserRole();

    return (
        logged && role == "USER" ? <Outlet/> : <Navigate to="/" />
    )
}

export default UserRoutes