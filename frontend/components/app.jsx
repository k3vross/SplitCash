import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Header from './header/header'



const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={Header} />
    </Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
)

export default App;