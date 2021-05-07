import React, { createContext, useReducer } from "react";
import SignUpInitial from "../initialState/SignUpInitial";
import { SignUpReducer } from "../reducer/SignUpReducer";

export const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
  const [signUpState, signUpDispatch] = useReducer(SignUpReducer, SignUpInitial);

  return (
    <ContextStore.Provider
      value={{
        signUpState,
        signUpDispatch,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
