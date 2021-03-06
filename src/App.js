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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import CMS from './hanendyo/CMS/CMS';
import { ContextStore } from './context/store/ContextStore';
import { getPlants } from './context/actions';
import { getArticles, getInvoices } from './context/actions/fetchingActions';
import Loader from './fajariadi/components/Loader';
import { SignIn, SignUp } from './hanendyo/AuthPages/AuthPages';

const App = () => {
  const {
    tablePlantDispatch,
    tableArticleDispatch,
    invoiceDispatch,
    userLoginState,
  } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ::: FETCH USER INFO - THUNK :::
    // userInfoDispatch(getUser());

    // ::: FETCH PLANT DATA :::
    tablePlantDispatch(getPlants());

    // ::: FETCH ARTICLE :::
    tableArticleDispatch(getArticles());

    // ::: FETCH INVOICE :::
    invoiceDispatch(getInvoices());

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [tablePlantDispatch, tableArticleDispatch, invoiceDispatch]);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <HashRouter basename='/'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/ensiklopedia/:id/:name' component={Ensiklopedia} />
            <Route path='/shop/:id/:name' component={ShoppingPage} />
            <Route path='/cart' component={CartPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/invoice/:id/:order' component={InvoicePage} />
            <Route path='/:id/transaction' component={TransactionPage} />
            <Route path='/article/:id/:title' component={ArticlePage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/cms' component={CMS}>
              {' '}
              {userLoginState ? (
                <Route path='/cms' component={CMS} />
              ) : (
                <Redirect to={'/login'} />
              )}{' '}
            </Route>
            <Route exact path='/register/:currentlogin' component={SignUp} />
            <Route exact path='/login/:prev' component={SignIn} />
          </Switch>
        </HashRouter>
      )}
    </>
  );
};

export default App;
