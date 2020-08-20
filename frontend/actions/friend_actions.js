import { postRequest, deleteRequest } from '../util/friend_request_api_util';

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const DELETE_REQUEST = "DELETE_REQUEST";

const receiveRequest = (request) => ({
    type: RECEIVE_REQUEST,
    request
})

const removeRequest = (requestId) => ({
    type: DELETE_REQUEST
})

export const sendRequest = (request) => (dispatch) => {
    return postRequest(request)
        .then(request => dispatch(receiveRequest(request)))
}

export const clearRequest = (requestId) => dispatch => {
    return deleteRequest(requestId)
        .then(() => dispatch(removeRequest(requestId)))
}