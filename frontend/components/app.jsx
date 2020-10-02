import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Route path="/" component={HeaderContainer} />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
  </div>
)

export default App;