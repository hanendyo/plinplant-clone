import React from 'react';
import LandingPage from './fajariadi/pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
