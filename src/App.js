import React from "react";
import {
  LandingPage,
  Ensiklopedia,
  SignIn,
  SignUp,
  ShoppingPage,
} from "./fajariadi/pages";
import { ModuleAlamat } from "./dhika/ModuleAlamat/ModuleAlamat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <ModuleAlamat />
    // <Router>
    //   <Switch>
    //     <Route exact path='/' component={LandingPage} />
    //     <Route path='/ensiklopedia' component={Ensiklopedia} />
    //     <Route path='/login' component={SignIn} />
    //     <Route path='/register' component={SignUp} />
    //     <Route path='/shop' component={ShoppingPage} />
    //   </Switch>
    // </Router>
  );
};

export default App;
