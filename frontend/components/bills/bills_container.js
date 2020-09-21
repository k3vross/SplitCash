import { connect } from 'react-redux';
import BillsIndex from './bills_index';
import {getAllBills, clearBill} from '../../actions/bill_actions';
import {getAllRequests} from "../../actions/friend_actions"


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    bills: Object.values(state.entities.bills),
    friendships: Object.values(state.entities.friendships) 
})

const mDTP = dispatch => ({
    getAllBills: billIds => dispatch(getAllBills(billIds)),
    getAllRequests: requestIds => dispatch(getAllRequests(requestIds))
})

export default connect(mSTP, mDTP)(BillsIndex)