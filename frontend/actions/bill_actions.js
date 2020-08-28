import { postBill, fetchBills, deleteBill, fetchBill, editBill } from '../util/bill_api_util';

export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';

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

export const createBill = bill => dispatch => {
    return postBill(bill)
        .then(bill => dispatch(receiveBill(bill)))
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