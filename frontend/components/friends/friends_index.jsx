import React from 'react';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllRequests(this.props.currentUser.all_friends)
    }

    render() {
        return (
            <div>
                <ul className='friendList'>
                    {this.props.friendships.map(friendship => (
                        <FriendsIndexItem key={friendship.id}
                        currentUser={this.props.currentUser}
                        friendship={friendship} 
                        sendRequest={this.props.sendRequest} 
                        clearRequest={this.props.clearRequest}
                        />
                    ))}
                </ul>
            </div>
        )   
    }
}

export default FriendsIndex