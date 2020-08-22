import React from 'react';
import { Redirect } from 'react-router-dom';
import LeftSidebar from '../left_side/left_sidebar';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
        <div>
            <LeftSidebar />
            <div className='dashMid'>
                <p>MIDDLE</p>
            </div>
            <div className='dashRight'>
                RIGHT
            </div>
        </div>

        )}
}

export default Dashboard