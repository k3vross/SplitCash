import { postRequest, deleteRequest } from '../util/friend_request_api_util';

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const DELETE_REQUEST = "DELETE_REQUEST";
export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';
export const RECEIVE_REQUEST_ERRORS = 'RECEIVE_REQUEST_ERRORS';
export const CLEAR_REQUEST_ERRORS = 'CLEAR_REQUEST_ERRORS';

const receiveRequest = (request) => ({
    type: RECEIVE_REQUEST,
    request
})

const receiveAllRequests = (payload) => ({
    type: RECEIVE_ALL_REQUESTS,
    payload
})

const removeRequest = (requestId) => ({
    type: DELETE_REQUEST,
    requestId
})

const receiveRequestErrors = (errors) => ({
    type: RECEIVE_REQUEST_ERRORS,
    errors
})

export const clearRequestErrors = () => {
    return {
        type: CLEAR_REQUEST_ERRORS
    }
}

export const sendRequest = (email) => (dispatch) => {
    return postRequest(email)
        .then(request => {dispatch(receiveRequest(request))
        }).fail((errors) => {
            dispatch(receiveRequestErrors(errors.responseJSON))
        },
        setTimeout(() => {
            dispatch(clearRequestErrors());
        }, 2000)
        )
}

export const clearRequest = (requestId) => dispatch => {
    return deleteRequest(requestId)
        .then((requestId) => dispatch(removeRequest(requestId)))
}

export const getAllRequests = (requestIds) => dispatch => {
    return fetchRequests(requestIds)
        .then((requests) => dispatch(receiveAllRequests(requests)))
}