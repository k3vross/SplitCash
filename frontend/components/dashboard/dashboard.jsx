import React from 'react';
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
        <div>
            {this.props.currentUser ? 
            null : <Redirect to="/" />}
            Dashboard
        </div>
        )}
}

export default Dashboard