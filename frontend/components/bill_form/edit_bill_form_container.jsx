// import React from 'react';
// import { connect } from 'react-redux';
// import { getBill, updateBill } from '../../actions/bill_actions';
// import EditAllBillForm from './edit_all_bill_form';


// class TempEditBillForm extends React.Component {

//     render() {
//         const { action, formType, bill, friendships, currentUser } = this.props;
//         if (!bill) return null;
//         return (
//             <EditAllBillForm
//                 action = { action }
//                 formType = { formType }
//                 bill = { bill }
//                 friendships = { friendships }
//                 currentUser = {currentUser} />
//         )
//     }
// }

// const mSTP = (state, ownProps) => {
//     return {
//         bill: ownProps.bill,
//         formType: 'Edit Bill',
//         friendships: Object.values(state.entities.friendships),
//         currentUser: state.entities.users[state.session.id]
// }}

// const mDTP = dispatch => ({
//     getBill: billId => dispatch(getBill(billId)),
//     action: bill => dispatch(updateBill(bill))
// })


// export default connect(mSTP, mDTP)(TempEditBillForm)


