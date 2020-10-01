import {
  RECEIVE_BILL_ERRORS,
  CLEAR_BILL_ERRORS,
} from "../actions/bill_actions";

const billErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_BILL_ERRORS:
      return action.errors;
    case CLEAR_BILL_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default billErrorsReducer;
