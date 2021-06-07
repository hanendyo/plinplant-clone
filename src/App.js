import React, { useContext, useEffect, useState } from "react";
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
import NavigationCMS from "./dhika/SidebarCMS/Navigation";
import CMS from "./hanendyo/CMS/CMS";
import axios from "axios";
import { ContextStore } from "./context/store/ContextStore";
import { getPlants } from "./context/actions";
import { getArticles, getUser } from "./context/actions/fetchingActions";
import Loader from "./fajariadi/components/Loader";

const App = () => {
  const { tablePlantDispatch, tableArticleDispatch, userInfoDispatch } =
    useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ::: FETCH USER INFO :::
    const getUserInfo = async () => {
      const res = await axios.get("http://localhost:5000/input/user/1");

      userInfoDispatch(getUser(res.data.data));
    };

    // ::: FETCH PLANT DATA :::
    const getTablePlant = async () => {
      const res = await axios.get(
        "http://localhost:5000/input/plant_get_all_datas"
      );

      tablePlantDispatch(getPlants(res.data.data));
    };

    // ::: FETCH ARTICLE :::
    const getTableArticle = async () => {
      const res = await axios.get(
        "http://localhost:5000/input/article_get_all_datas"
      );

      tableArticleDispatch(getArticles(res.data.data));
    };

    setLoading(true);

    getUserInfo();
    getTablePlant();
    getTableArticle();

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/ensiklopedia/:id/:name" component={Ensiklopedia} />
            <Route path="/shop/:id/:name" component={ShoppingPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/invoice" component={InvoicePage} />
            <Route path="/transaction" component={TransactionPage} />
            <Route path="/article/:id/:title" component={ArticlePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/cms" component={CMS} />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
