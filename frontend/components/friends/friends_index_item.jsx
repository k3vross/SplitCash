import React from 'react';
import {FaUser} from 'react-icons/fa';

class FriendsIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.clearRequest(this.props.friendship.id)
    }

    render() {
        return (
            <li className='friendItem'>
                {this.props.currentUser.id === this.props.friendship.requester_id ? 
                    <p> <FaUser className='faLink' /> {this.props.friendship.recipientName} <button className='deleteFriend' onClick={this.handleClick}>REMOVE</button></p>
                    :
                    <p> <FaUser className='faLink' /> {this.props.friendship.requesterName} <button className='deleteFriend' onClick={this.handleClick}>REMOVE</button></p>
                }
            </li>
        )
    }
}

export default FriendsIndexItem