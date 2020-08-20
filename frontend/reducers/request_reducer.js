import { RECEIVE_REQUEST, REMOVE_REQUEST } from "../actions/friend_actions";


const requestReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_REQUEST:
            return newState[action.request.id] = action.request
        case REMOVE_REQUEST:
            delete newState[action.requestId]
            return newState
        default:
            return oldState
    }
}

export default requestReducer;