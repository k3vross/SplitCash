import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
import CreateBillFormContainer from './bill_form/create_bill_form_container';



const App = () => (
  <div>
    <Route path="/" component={HeaderContainer} />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route path="/dashboard" component={DashboardContainer} />
  </div>
)

export default App;