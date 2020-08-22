import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import requestReducer from './request_reducer';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';



const appReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  friendships: requestReducer,
})

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === LOGOUT_CURRENT_USER) {
    state = undefined;
  }

  return appReducer(state, action);

}

export default rootReducer;