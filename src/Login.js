import React, { useContext } from "react";
import UserContext from "./Context/UserContext";

function Login() {
  const { user,setUser } = useContext(UserContext);
  const passValueAsUsecontext = () => {
    setUser({
      name: "John",
      email: "john@example.com",
    });
  };
  return (
    <div>
      <button onClick={passValueAsUsecontext}>donezo</button>
   
    </div>
  );
}

export default Login;
