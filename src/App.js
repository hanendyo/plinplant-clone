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
import NewsHeader from "./dhika/Artikel/header/ArtikelHeader";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/ensiklopedia" component={Ensiklopedia} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/shop" component={ShoppingPage} />
        <Route path="/alamat" component={ModalPengiriman} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/artikel" component={NewsHeader} />
      </Switch>
    </Router>
  );
};

export default App;
