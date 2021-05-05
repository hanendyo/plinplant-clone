import React from 'react';
import { LandingPage, Ensiklopedia, SignIn, SignUp } from './fajariadi/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/ensiklopedia' component={Ensiklopedia} />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
