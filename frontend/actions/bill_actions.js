import { postBill, fetchBills, deleteBill, fetchBill, editBill } from '../util/bill_api_util';
import { clearRequestErrors } from './friend_actions';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';
export const CLEAR_BILL_ERRORS = "CLEAR_BILL_ERRORS";

const receiveAllBills = bills => ({
    type: RECEIVE_ALL_BILLS,
    bills
})

const receiveBill = bill => ({
    type: RECEIVE_BILL,
    bill
})

const removeBill = (billId) => ({
    type: REMOVE_BILL,
    billId
})

const receiveBillErrors = (errors) => ({
  type: RECEIVE_BILL_ERRORS,
  errors,
});

export const clearBillErrors = () => {
  return {
    type: CLEAR_BILL_ERRORS,
  };
};

export const createBill = bill => dispatch => {
    return postBill(bill)
        .then(bill => {dispatch(receiveBill(bill))
        }).fail((errors) => {
            dispatch(receiveBillErrors(errors.responseJSON))
        },
        setTimeout(() => {
            dispatch(clearRequestErrors());
        }, 2000)
        )
}

export const getBill = billId => dispatch => {
    return fetchBill(billId)
        .then(bill => dispatch(receiveBill(bill)))
}

export const getAllBills = billIds => dispatch => {
    return fetchBills(billIds)
        .then(bills => dispatch(receiveAllBills(bills)))
}

export const updateBill = bill => dispatch => {
    return editBill(bill)
        .then(bill => dispatch(receiveBill(bill)))
}

export const clearBill = billId => dispatch => {
    return deleteBill(billId)
        .then(billId => dispatch(removeBill(billId)))
}