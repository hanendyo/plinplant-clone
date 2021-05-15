import React from "react";
import { ContextProvider } from "../../context/store/ContextStore";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Article, Category, City, Contact } from "./cmsPages";
import './CMS.css'
import Navigation from "./navigation/Navigation";

const CMS = () => {
  return (
      <ContextProvider>
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path='/cms/article_input' component={Article}></Route>
            </Switch>
        </Router>
    </ContextProvider>
  );
};

export default CMS;
