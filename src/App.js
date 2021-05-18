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
} from "./fajariadi/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalPengiriman from "./dhika/Pengiriman/ModalPengiriman";
import { ReviewModal } from "./fajariadi/modals";
import RatingInput from "./master/components/additional/RatingInput";
import NavigationCMS from "./dhika/SidebarCMS/Navigation";
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
        <Route path="/alamat" component={ModalPengiriman} />
        <Route path="/modaltest" component={ReviewModal} />
        <Route path="/ratingtest" component={RatingInput} />
        <Route path="/cms" component={NavigationCMS} />
      </Switch>
    </Router>
  );
};

export default App;
