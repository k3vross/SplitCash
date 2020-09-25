import { connect } from 'react-redux';
import EditBillForm from './edit_bill_form';
import { updateBill } from '../../actions/bill_actions';

const mSTP = (state, ownProps) => {
    return {
        bill: ownProps.bill
    }
}

const mDTP = dispatch => {
    return {
        updateBill: bill => dispatch(updateBill(bill))
    }
}

export default connect(mSTP, mDTP)(EditBillForm)