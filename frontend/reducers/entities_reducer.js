import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import billsReducer from './bills_reducer';
import requestReducer from './request_reducer';
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  bills: billsReducer,
  friendships: requestReducer,
  comments: commentsReducer
});

export default entitiesReducer;