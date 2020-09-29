import { connect } from 'react-redux';
import FriendSearch from './friend_search';
import { getUser } from '../../actions/user_actions';
import { sendRequest, clearRequestErrors, getAllRequests } from '../../actions/friend_actions';
import { getAllBills } from '../../actions/bill_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.request
})

const mDTP = (dispatch) => ({
  getUser: (email) => dispatch(getUser(email)),
  getAllBills: (billIds) => dispatch(getAllBills(billIds)),
  sendRequest: (request) => dispatch(sendRequest(request)),
  clearRequestErrors: () => dispatch(clearRequestErrors()),
  getAllRequests: (requestIds) => dispatch(getAllRequests(requestIds)),
});

export default connect(mSTP, mDTP)(FriendSearch)