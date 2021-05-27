import React, { useContext, useEffect } from 'react';
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
} from './fajariadi/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationCMS from './dhika/SidebarCMS/Navigation';
import CMS from './hanendyo/CMS/CMS';
import axios from 'axios';
import { ContextStore } from './context/store/ContextStore';
import { getPlants } from './context/actions';

const App = () => {
  const { tablePlantDispatch } = useContext(ContextStore);

  useEffect(() => {
    const getTablePlant = async () => {
      const res = await axios.get(
        'http://localhost:5000/input/plant_get_all_datas'
      );

      tablePlantDispatch(getPlants(res.data.data));
    };

    getTablePlant();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/ensiklopedia/:id/:name' component={Ensiklopedia} />
        <Route path='/shop' component={ShoppingPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/invoice' component={InvoicePage} />
        <Route path='/transaction' component={TransactionPage} />
        <Route path='/article' component={ArticlePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/cms' component={CMS} />
      </Switch>
    </Router>
  );
};

export default App;
