import Header from "./components/Header";
import { decodeJWT, getUserRole, isLogged } from "./helpers/AuthHandler";
import HeaderLog from "./components/HeaderLog";
import MainRoutes from "./routes/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const loggedIn = isLogged();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const payload = decodeJWT(token);
    if (payload && payload.role === "INSTITUTION") {
      if (!payload.institution_id) {
        navigate("/institutions/create");
      }
    }
  }, []);

  return (
    <div>
      {loggedIn &&
        <HeaderLog />
      }
      {!loggedIn &&
        <Header />
      }
      <MainRoutes/>
      

    </div>
  )
}

export default App