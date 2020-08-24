import { connect } from 'react-redux';
import FriendSearch from './friend_search';
import { getUser } from '../../actions/user_actions';
import { sendRequest, clearRequestErrors } from '../../actions/friend_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.request
})

const mDTP = dispatch => ({
    getUser: email => dispatch(getUser(email)),
    sendRequest: request => dispatch(sendRequest(request)),
    clearRequestErrors: () => dispatch(clearRequestErrors())
})

export default connect(mSTP, mDTP)(FriendSearch)