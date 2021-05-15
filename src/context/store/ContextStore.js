import React, { createContext, useReducer } from "react";
import CmsInitial, { articleInitialState } from "../initialState/CmsInitial";
import SignUpInitial from "../initialState/SignUpInitial";
import { CmsReducer } from "../reducer/CmsReducer";
import { SignUpReducer } from "../reducer/SignUpReducer";

export const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
  const [signUpState, signUpDispatch] = useReducer(
    SignUpReducer,
    SignUpInitial
  );
  const [articleState, articleDispatch] = useReducer(
    CmsReducer, articleInitialState
  )

  return (
    <ContextStore.Provider
      value={{
        signUpState,
        signUpDispatch,
        articleState,
        articleDispatch,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
