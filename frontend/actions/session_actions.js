import { postUser, postSession, deleteSession} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

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

export const login = (user) => (dispatch) => {
  return postSession(user).then((user) => {
    dispatch(receiveCurrentUser(user))
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
    dispatch(logoutCurrentUser())
  }).fail((errors) => {
    dispatch(receiveSessionErrors(errors))
  })
}