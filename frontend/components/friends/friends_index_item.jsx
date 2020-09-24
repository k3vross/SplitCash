import React from 'react';
import {FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class FriendsIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className='friendItem'>
                {this.props.currentUser.id === this.props.friendship.requester_id ? 
                    <p> <Link className='nameLink' to={`/dashboard/${this.props.friendship.recipient_id}`}> <FaUser className='faLink' /> {this.props.friendship.recipientName} </Link></p>
                    :
                    <p> <Link className='nameLink' to={`/dashboard/${this.props.friendship.requester_id}`}> <FaUser className='faLink' /> {this.props.friendship.requesterName} </Link></p>
                }
            </li>
        )
    }
}

export default FriendsIndexItem