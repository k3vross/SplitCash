import React from 'react';
import { Link } from 'react-router-dom';

const Plates = () => {
    return (
        <div className='plateDiv' >
            <img className='plates' src={window.images.plates} alt="plates"/>
            <br/>
            <br/>
            <a href="https://apps.apple.com/us/app/plates-by-splitwise-split/id669801762?ign-mpt=uo%3D4" target="_blank"><button className='platesBtn'>Download Plates</button></a>
        </div>
    )
}

export default Plates