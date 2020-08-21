import { postRequest, deleteRequest } from '../util/friend_request_api_util';

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const DELETE_REQUEST = "DELETE_REQUEST";
export const RECEIVE_ALL_REQUESTS = 'RECEIVE_ALL_REQUESTS';

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

export const sendRequest = (request) => (dispatch) => {
    return postRequest(request)
        .then(request => dispatch(receiveRequest(request)))
}

export const clearRequest = (requestId) => dispatch => {
    return deleteRequest(requestId)
        .then((requestId) => dispatch(removeRequest(requestId)))
}

export const getAllRequests = (requestIds) => dispatch => {
    return fetchRequests(requestIds)
        .then((requests) => dispatch(receiveAllRequests(requests)))
}