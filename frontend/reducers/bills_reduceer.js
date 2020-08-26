import { RECEIVE_ALL_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';


const billsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_BILLS:
            return action.bills
        case RECEIVE_BILL:
            newState[action.bill.id] = action.bill
            return newState
        case REMOVE_BILL:
            delete newState[action.billId]
            return newState
        default:
            return oldState
    }
}

export default billsReducer
