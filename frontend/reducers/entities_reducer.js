import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import billsReducer from './bills_reduceer';
import requestReducer from './request_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  bills: billsReducer,
  friendships: requestReducer
});

export default entitiesReducer;