import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const Header = () => (
    <header className='header'>
        <a href="#" className='logoTitle'>
            <img className='logo' src={window.images.logo} alt="SplitCash" />
            <h1 className='title' >SplitCash</h1>
        </a>
        <GreetingContainer />
    </header>
)

export default Header