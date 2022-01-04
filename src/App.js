import "./styles.css";
import { AuthContext } from "./Contexts/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import Navbar from "./navbar.js";
import Displaystatus from "./displaystatus";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const toggleau = () => {
    if (isAuth) setIsAuth(false);
    else setIsAuth(true);
  };

  if (isAuth) {
    const payload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        setToken(res.token);
      });
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth, toggleau, token }}>
        {<Navbar />}
        <Displaystatus />
      </AuthContext.Provider>
    </div>
  );
}
