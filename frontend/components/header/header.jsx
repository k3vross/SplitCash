import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
    <div className="splashContainer">
        <header className={props.currentUser ? 'headerLoggedIn' : 'headerSplash'}>
            <a href="#" className='logoTitle'>
                <img className='logo' src={!props.currentUser ? window.images.logo : window.images.logo_white} alt="SplitCash" />
                    <h1 className={!props.currentUser ? 'titleSplash' : 'titleLoggedIn'} >SplitCash</h1>
            </a>
            <GreetingContainer />
        </header>
    </div>)
}

export default Header