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
import CMS from './hanendyo/CMS/CMS';
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
    tablePlantState,
    tableArticleDispatch,
    tableArticleState,
    userInfoDispatch,
    invoiceDispatch,
    invoiceState,
    userInfoState,
  } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ::: FETCH USER INFO - THUNK :::
    userInfoDispatch(getUser());

    // ::: FETCH PLANT DATA :::
    tablePlantDispatch(getPlants());

    // ::: FETCH ARTICLE :::
    tableArticleDispatch(getArticles());

    // ::: FETCH INVOICE :::
    invoiceDispatch(getInvoices());

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.log('APP - USER INFO', userInfoState);
  console.log('APP - ALL PLANT DATA', tablePlantState);
  console.log('APP - ALL ARTICLE DATA', tableArticleState);
  console.log('APP - ALL INVOICE DATA', invoiceState);

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
