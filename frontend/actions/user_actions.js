import { searchUsers } from '../util/user_search_api_util';


export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const getUser = email => dispatch => {
    return searchUsers(email)
        .then((user) => dispatch(receiveUser(user)))
}