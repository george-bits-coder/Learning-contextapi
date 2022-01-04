import "./styles.css";
import { AuthContext } from "./Contexts/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import Navbar from "./navbar.js";
import Displaystatus from "./displaystatus";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const toggleau = () => {
    if (isAuth) setIsAuth(false);
    else setIsAuth(true);
  };
  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth, toggleau }}>
        {<Navbar />}
        <Displaystatus />
      </AuthContext.Provider>
    </div>
  );
}
