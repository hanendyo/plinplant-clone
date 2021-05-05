import React from 'react';
import { LandingPage, Ensiklopedia } from './fajariadi/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/ensiklopedia' component={Ensiklopedia} />
      </Switch>
    </Router>
  );
};

export default App;
