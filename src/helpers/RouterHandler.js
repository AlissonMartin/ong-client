
import { Outlet, Navigate } from "react-router-dom";
import { isLogged } from "./AuthHandler";

const PrivateRoutes =  ()=> {
    let logged = isLogged()
    return (
        logged ? <Outlet/> : <Navigate to="signin" />
    )
}

export default PrivateRoutes