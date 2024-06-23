import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Profile from "./Profile";
// import UserContextProvider from "./Context/UserContextProvider.js";

import { User1ContextProvider,UserContextProvider } from "./Context";
import Checker from "./checker.js";




import Check from "./Check.js";
import { useState } from "react";


function App() {
  const func1 = () => {
    return 10;
  };

  const func2 = () => {
    return 20;
  };

  const [name, setName] = useState("whatEver escobar");

  return (
    <User1ContextProvider
      value={{
        name,
        func1,
        func2,
      }}
    >
      gonna create a context api
      <Checker />
      <Check/>

      {/* < <Login/>
     <Profile/>> */}
    </User1ContextProvider>
  );

  //this is the old code or the old method to perform the above functionality

  // return (
  //   <UserContextProvider>
  //    gonna create a context api

  //    <Login/>
  //    <Profile/>

  //   </UserContextProvider>
  // );
}

export default App;
