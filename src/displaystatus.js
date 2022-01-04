import { useContext } from "react";

import { AuthContext } from "./Contexts/AuthContext";

export default function Displaystatus() {
  const { isAuth, setIsAuth, token } = useContext(AuthContext);

  return (
    <>
      <div>{isAuth ? `Loggedin with token ${token}` : "Not Loggedin"}</div>
    </>
  );
}
