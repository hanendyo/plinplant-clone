import React from 'react';
import {
  LandingPage,
  Ensiklopedia,
  SignIn,
  SignUp,
  ShoppingPage,
<<<<<<< HEAD
} from "./fajariadi/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalPengiriman from "./dhika/Pengiriman/ModalPengiriman";
import ProfilePage from "./dhika/Profile/index";
import NewsHeader from "./dhika/Artikel/header/ArtikelHeader";
=======
  CartPage,
  CheckoutPage,
  InvoicePage,
  TransactionPage,
  ArticlePage,
} from './fajariadi/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ModalPengiriman from './dhika/Pengiriman/ModalPengiriman';
import ProfilePage from './dhika/Profile/index';
>>>>>>> 7879ed1be80597ba36cd65ca3c270677bd8e4380

const App = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={LandingPage} />
        <Route path="/ensiklopedia" component={Ensiklopedia} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/shop" component={ShoppingPage} />
        <Route path="/alamat" component={ModalPengiriman} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/artikel" component={NewsHeader} />
=======
        <Route exact path='/' component={LandingPage} />
        <Route path='/ensiklopedia' component={Ensiklopedia} />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={SignUp} />
        <Route path='/shop' component={ShoppingPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/invoice' component={InvoicePage} />
        <Route path='/transaction' component={TransactionPage} />
        <Route path='/alamat' component={ModalPengiriman} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/article' component={ArticlePage} />
>>>>>>> 7879ed1be80597ba36cd65ca3c270677bd8e4380
      </Switch>
    </Router>
  );
};

export default App;
