import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';



const App = () => (
  <div>
    <header className='header'>
      <h1>SplitCash</h1>
      <GreetingContainer />
    </header>
  </div>
)

export default App;