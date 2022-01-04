import { useContext } from "react";

import { AuthContext } from "./Contexts/AuthContext";

export default function Displaystatus() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <>
      <div>{isAuth ? "Loggedin" : "Not Loggedin"}</div>
    </>
  );
}
