import { postUser, postSession, deleteSession, fetchAllUsers} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

export const login = (user) => (dispatch) => {
  return postSession(user)
    .then((user) => { dispatch(receiveCurrentUser(user))
      
  }).fail((errors) => {
    dispatch(receiveSessionErrors(errors.responseJSON))
  })
}

export const signup = (user) => (dispatch) => {
  return postUser(user).then((user) => {
    dispatch(receiveCurrentUser(user))
  }).fail((errors) => {
    dispatch(receiveSessionErrors(errors.responseJSON))
  })
}

export const logout = () => (dispatch) => {
  return deleteSession().then((user) => {
    dispatch(logoutCurrentUser(user))
  }).fail((errors) => {
    dispatch(receiveSessionErrors(errors))
  })
}