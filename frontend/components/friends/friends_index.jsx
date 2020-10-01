import React from 'react';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (!currentUser) {
      return null;
    }
    return (
      <div>
        <ul className="friendList">
          {this.props.friendships.map((friendship) => (
            <FriendsIndexItem
              key={friendship.id}
              currentUser={this.props.currentUser}
              friendship={friendship}
              sendRequest={this.props.sendRequest}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FriendsIndex