import { RECEIVE_REQUEST, DELETE_REQUEST, RECEIVE_ALL_REQUESTS } from "../actions/friend_actions";


const requestReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_REQUEST:
            newState[action.request.id] = action.request 
            return newState
        case RECEIVE_ALL_REQUESTS:
            return action.payload.friendships
        case DELETE_REQUEST:
            delete newState[action.requestId]
            return newState
        default:
            return oldState
    }
}

export default requestReducer;