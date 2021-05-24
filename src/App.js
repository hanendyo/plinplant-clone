import React from "react";
import {
  LandingPage,
  Ensiklopedia,
  ShoppingPage,
  CartPage,
  CheckoutPage,
  InvoicePage,
  TransactionPage,
  ArticlePage,
  ProfilePage,
<<<<<<< HEAD
} from './fajariadi/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationCMS from './dhika/SidebarCMS/Navigation';
import CMS from './hanendyo/CMS/CMS';

=======
} from "./fajariadi/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationCMS from "./dhika/SidebarCMS/Navigation";
import CMS from "./hanendyo/CMS/CMS";
>>>>>>> 90cfd21ecdf75d34b782bc99e101a007413edb65
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/ensiklopedia" component={Ensiklopedia} />
        <Route path="/shop" component={ShoppingPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/invoice" component={InvoicePage} />
        <Route path="/transaction" component={TransactionPage} />
        <Route path="/article" component={ArticlePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/cms" component={CMS} />
      </Switch>
    </Router>
  );
};

export default App;
