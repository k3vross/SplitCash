import React from 'react';
import FriendsIndex from './friends_index';
import { getAllRequests, clearRequest, sendRequest } from '../../actions/friend_actions';
import { connect } from 'react-redux';


const mSTP = state => {
    return {
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friendships)
}}

const mDTP = dispatch => ({
    getAllRequests: (requestIds) => dispatch(getAllRequests(requestIds)),
    clearRequest: (requestId => dispatch(clearRequest(requestId))),
    sendRequest: (request) => dispatch(sendRequest(request))
})

export default connect(mSTP, mDTP)(FriendsIndex)