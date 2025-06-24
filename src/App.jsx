import Header from "./components/Header";
import { isLogged } from "./helpers/AuthHandler";
import HeaderLog from "./components/HeaderLog";
import MainRoutes from "./routes/routes";

function App() {
  const loggedIn = isLogged();

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