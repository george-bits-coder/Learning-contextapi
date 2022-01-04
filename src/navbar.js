import { useContext } from "react";

import { AuthContext } from "./Contexts/AuthContext";

import "./styles.css";

export default function Navbar() {
  const { isAuth, setIsAuth, toggleau } = useContext(AuthContext);

  return (
    <>
      <div id="navbar">
        <button onClick={toggleau}>{isAuth ? "Logout" : "Login"}</button>
      </div>
    </>
  );
}
