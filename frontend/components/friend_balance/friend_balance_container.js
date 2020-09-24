import { connect } from 'react-redux';
import { clearRequest } from '../../actions/friend_actions';
import FriendBalance from './friend_balance';
import { getAllBills } from '../../actions/bill_actions';
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    let friendshipId
    let friendships = Object.values(state.entities.friendships)
    if (friendships.length !== 0) {
        friendships.forEach(friendship => {
            if (parseInt(ownProps.match.params.userId) === friendship.requester_id
                ||
                parseInt(ownProps.match.params.userId) === friendship.recipient_id) {
                    friendshipId = friendship.id
                    return friendshipId
                }
            })
        }
    return {
        currentUser: state.entities.users[state.session.id],
        bills: Object.values(state.entities.bills),
        friend: state.entities.users[ownProps.match.params.userId],
        friendId: friendshipId
    }
}

const mDTP = dispatch => ({
    clearRequest: (requestId => dispatch(clearRequest(requestId))),
    getAllBills: billIds => dispatch(getAllBills(billIds))
})

export default withRouter(connect(mSTP, mDTP)(FriendBalance));
