import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util'



const App = () => (
  <div>
    <header className='header'>
      <a href="#" className='logoTitle'>
        <img className ='logo' src={window.images.logo} alt="SplitCash"/>
        <h1 className ='title' >SplitCash</h1>
      </a>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
)

export default App;