import { connect } from 'react-redux';
import { clearRequest } from '../../actions/friend_actions';
import FriendBalance from './friend_balance';
import { getAllBills } from '../../actions/bill_actions';
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    bills: Object.values(state.entities.bills),
    friend: state.entities.users[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
    clearRequest: (requestId => dispatch(clearRequest(requestId))),
    getAllBills: billIds => dispatch(getAllBills(billIds))
})

export default withRouter(connect(mSTP, mDTP)(FriendBalance));


// cannot refresh on a user page
// component doesn't render new balance - force update or use a dummy method