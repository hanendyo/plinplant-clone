import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './hanendyo/SignIn/SignIn';
import SignUp from './hanendyo/SignUp/SignUp';
import { ContextProvider } from './context/store/ContextStore';
import CMS from './hanendyo/CMS/CMS';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/cms'>
            <CMS />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;
