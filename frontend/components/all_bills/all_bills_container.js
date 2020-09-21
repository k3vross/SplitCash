import { connect } from 'react-redux';
import AllBillsIndex from './all_bills_index';
import { getAllBills, clearBill } from '../../actions/bill_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    bills: Object.values(state.entities.bills)
})

const mDTP = dispatch => ({
    getAllBills: billIds => dispatch(getAllBills(billIds)),
    clearBill: (billId) => dispatch(clearBill(billId))

})

export default connect(mSTP, mDTP)(AllBillsIndex)