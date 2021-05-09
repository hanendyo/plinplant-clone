import React from "react";
import {
  LandingPage,
  Ensiklopedia,
  SignIn,
  SignUp,
  ShoppingPage,
} from "./fajariadi/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalPengiriman from "./dhika/Pengiriman/ModalPengiriman";
import ProfilePage from "./dhika/Profile/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/ensiklopedia" component={Ensiklopedia} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/shop" component={ShoppingPage} />
        <Route path="/Alamat" component={ModalPengiriman} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;
