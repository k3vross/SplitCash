import { connect } from 'react-redux';
import { createBill } from '../../actions/bill_actions';
import DashBillForm from './dash_bill_form';
import { getAllRequests } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    bill: { user_id: '', description: "", amount: '', author_paid: 'y' },
    formType: 'Add a Bill',
    friendships: Object.values(state.entities.friendships)
})

const mDTP = dispatch => ({
    action: (bill) => dispatch(createBill(bill)),
    getAllRequests: (requestIds) => dispatch(getAllRequests(requestIds)),

})

export default withRouter(connect(mSTP, mDTP)(DashBillForm))

