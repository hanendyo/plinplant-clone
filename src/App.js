import React from "react";
import {
  LandingPage,
  Ensiklopedia,
  SignIn,
  SignUp,
  ShoppingPage,
  CartPage,
  CheckoutPage,
  InvoicePage,
  TransactionPage,
  ArticlePage,
  ProfilePage,
} from './fajariadi/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ModalPengiriman from './dhika/Pengiriman/ModalPengiriman';
import SidebarCMS from "./dhika/SidebarCMS/components/SidebarCMS";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/ensiklopedia' component={Ensiklopedia} />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={SignUp} />
        <Route path='/shop' component={ShoppingPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/invoice' component={InvoicePage} />
        <Route path='/transaction' component={TransactionPage} />
        <Route path='/article' component={ArticlePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/alamat' component={ModalPengiriman} />
        <Route path="/cms" component={SidebarCMS} />
      </Switch>
    </Router>
  );
};

export default App;
