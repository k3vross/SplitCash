import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, oldState, { [action.user.id]: action.user })
      return newState
    case RECEIVE_ALL_USERS:
      return action.users
    default:
      return oldState
  }
}
export default usersReducer;