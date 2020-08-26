import { connect } from 'react-redux';
import { clearRequest } from '../../actions/friend_actions';
import Balance from './balance';
import { getAllBills } from '../../actions/bill_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    bills: Object.values(state.entities.bills)
})

const mDTP = dispatch => ({
    clearRequest: (requestId => dispatch(clearRequest(requestId))),
    getAllBills: billIds => dispatch(getAllBills(billIds))
})

export default connect(mSTP, mDTP)(Balance)