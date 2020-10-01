import { connect } from 'react-redux';
import FriendBillsIndex from './friend_bills_index';
import { getAllBills, clearBill } from '../../actions/bill_actions';
import { getAllRequests } from "../../actions/friend_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        bills: Object.values(state.entities.bills),
        friend: state.entities.users[ownProps.match.params.userId]
   }
}

const mDTP = (dispatch) => ({
  getAllBills: (billIds) => dispatch(getAllBills(billIds)),
  clearBill: (billId) => dispatch(clearBill(billId)),
  getAllRequests: (requestIds) => dispatch(getAllRequests(requestIds)),
});

export default connect(mSTP, mDTP)(FriendBillsIndex)