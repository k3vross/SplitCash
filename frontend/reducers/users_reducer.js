import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_REQUESTS } from '../actions/friend_actions';
import { RECEIVE_USER } from '../actions/user_actions';
const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, oldState, { [action.user.id]: action.user })
      return newState
    case RECEIVE_USER:
      newState[action.user.id] = action.user
      return newState
    case RECEIVE_ALL_REQUESTS:
      return Object.assign(newState, action.payload.users)
    default:
      return oldState
  }
}
export default usersReducer;