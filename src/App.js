import React, { useContext, useEffect, useState } from 'react';
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
import {
  getArticles,
  getInvoices,
  getUser,
} from './context/actions/fetchingActions';
import Loader from './fajariadi/components/Loader';
import { SignIn, SignUp } from './hanendyo/AuthPages/AuthPages';

const App = () => {
  const {
    tablePlantDispatch,
    tableArticleDispatch,
    userInfoDispatch,
    invoiceDispatch,
    invoiceState,
  } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ::: FETCH USER INFO :::
    const getUserInfo = async () => {
      const res = await axios.get('http://localhost:5000/input/user/1');

      userInfoDispatch(getUser(res.data.data));
    };

    // ::: FETCH PLANT DATA :::
    const getTablePlant = async () => {
      const res = await axios.get(
        'http://localhost:5000/input/plant_get_all_datas'
      );

      tablePlantDispatch(getPlants(res.data.data));
    };

    // ::: FETCH ARTICLE :::
    const getTableArticle = async () => {
      const res = await axios.get(
        'http://localhost:5000/input/article_get_all_datas'
      );

      tableArticleDispatch(getArticles(res.data.data));
    };

    // ::: FETCH INVOICE :::
    const getInvoiceData = async () => {
      const res = await axios.get('http://localhost:5000/input/invoice');

      invoiceDispatch(getInvoices(res.data.data));
    };

    setLoading(true);

    getUserInfo();
    getTablePlant();
    getTableArticle();
    getInvoiceData();

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log('APP INVOICE-STATE', invoiceState);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/ensiklopedia/:id/:name' component={Ensiklopedia} />
            <Route path='/shop/:id/:name' component={ShoppingPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/invoice/:id/:order' component={InvoicePage} />
            <Route path='/transaction' component={TransactionPage} />
            <Route path='/article/:id/:title' component={ArticlePage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/cms' component={CMS} />
            <Route exact path='/register' component={SignUp} />
            <Route exact path='/login' component={SignIn} />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
