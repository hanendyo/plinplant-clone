import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SignIn from "./hanendyo/SignIn/SignIn";
import SignUp from "./hanendyo/SignUp/SignUp";
import Footer from "./master/components/Footer/Footer";
import Navbar from "./master/components/Navbar/Navbar";
import NavbarLandingPage from "./master/components/Navbar/NavbarLandingPage";

import { ContextProvider } from "./context/store/ContextStore";
import CMS from "./hanendyo/CMS/CMS";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path='/register'><SignUp /></Route>
          <Route path='/cms'><CMS /></Route>
        </Switch>
        
        {/* <SignIn/> */}
        {/* <NavbarLandingPage />
          <h1>Content</h1>
          <Navbar />
          <Footer /> */}
      </Router>
    </ContextProvider>
  );
};

export default App;
