import { connect } from 'react-redux';
import { createBill } from '../../actions/bill_actions';
import BillForm from './bill_form';
import { getAllRequests } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    bill: { user_id: ownProps.match.params.userId, description: "", amount: '', author_paid: 'y'},
    formType: 'Create Bill',
    friend: state.entities.users[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
    action: (bill) => dispatch(createBill(bill)),
    getAllRequests: (requestIds) => dispatch(getAllRequests(requestIds)),
    
})

export default withRouter(connect(mSTP, mDTP)(BillForm))

