import React from 'react';
import FriendsIndex from './friends_index';
import { getAllRequests, clearRequest, sendRequest } from '../../actions/friend_actions';
import { connect } from 'react-redux';

mSTP = state => {
return {
    friends: Object.values(state[friendships])
}}

mDTP = dispatch => ({
    getAllRequests: () => dispatch(getAllRequests()),
    clearRequest: (requestId => dispatch(clearRequest(requestId))),
    sendRequest: (request) => dispatch(sendRequest(request))
})

export default connect(mSTP, mDTP)(FriendsIndex)