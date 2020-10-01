import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import requestErrorsReducer from './request_errors_reducer';
import billErrorsReducer from './bill_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  request: requestErrorsReducer,
  bill: billErrorsReducer
});

export default errorsReducer;