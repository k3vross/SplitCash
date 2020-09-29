import FriendsIndex from './friends_index';
import { getAllRequests, sendRequest } from '../../actions/friend_actions';
import { getAllBills } from '../../actions/bill_actions';
import { connect } from 'react-redux';


const mSTP = state => {
    return {
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friendships)
}}

const mDTP = dispatch => ({
    getAllRequests: (requestIds) => dispatch(getAllRequests(requestIds)),
    getAllBills: (billIds) => dispatch(getAllBills(billIds)),
    sendRequest: (request) => dispatch(sendRequest(request))
})

export default connect(mSTP, mDTP)(FriendsIndex)