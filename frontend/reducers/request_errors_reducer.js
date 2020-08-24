import { RECEIVE_REQUEST_ERRORS, CLEAR_REQUEST_ERRORS} from "../actions/friend_actions";


const requestErrorsReducer = (oldState = [], action) => {
    switch (action.type) {
        case RECEIVE_REQUEST_ERRORS:
            return action.errors
        case CLEAR_REQUEST_ERRORS:
            return []
        default:
            return oldState
    }
}

export default requestErrorsReducer;