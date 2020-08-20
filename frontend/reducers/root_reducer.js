import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import requestReducer from './request_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  friendships: requestReducer

})

export default rootReducer;