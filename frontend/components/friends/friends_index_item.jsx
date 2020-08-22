import React from 'react';
import {FaUser} from 'react-icons/fa';

class FriendsIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className='friendItem'>
                {this.props.currentUser.id === this.props.friendship.requester_id ? 
                    <p> <FaUser className='faLink' /> {this.props.friendship.recipientName}</p>
                    :
                    <p> <FaUser className='faLink' /> {this.props.friendship.requesterName}</p>
                }
            </li>
        )
    }
}

export default FriendsIndexItem