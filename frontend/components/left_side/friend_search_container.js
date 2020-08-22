import { connect } from 'react-redux';
import FriendSearch from './friend_search';
import { fetchAllUsers } from '../../util/session_api_util';


const mDTP = dispatch => ({
    fetchAllUsers: () => fetchAllUsers()
})

export default connect(null, mDTP)(FriendSearch)