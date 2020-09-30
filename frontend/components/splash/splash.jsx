import HeaderContainer from '../header/header_container';
import React from 'react';
import {Link} from 'react-router-dom';  

const Splash = () => {
    return (
        <div>
            <h1 className='welcomeTitle'>Welcome to SplitCash</h1>
            <h3 className='welcomeDescription'>An easy way to split expenses with anyone, anywhere, for anything!</h3>
            <div className='splashContent'>
                <div>
                    <ul className='featuresList'>
                        <li>Track balances</li>
                        <li>Add expenses on the go</li>
                        <li>Record cash payment to settle up</li>
                    </ul>
                    <Link className="splashSignup" to="/signup">Sign up</Link>
                </div>
                <img className='splashLogo' src={window.images.logo} alt="WELCOME" />
                <img className='reviews' src={window.images.reviews} alt="Press" />
            </div>
        </div>
    )
}

export default Splash