import React, { createContext, useContext } from "react";

const User1Context = createContext(
    
    {
  name: "Dawood escobar",
  func1: () => {},
  func2: () => {},
}

);

const User1ContextProvider = User1Context.Provider;

const useUser = () => {
  return useContext(User1Context);
};

export { User1Context, User1ContextProvider, useUser };
