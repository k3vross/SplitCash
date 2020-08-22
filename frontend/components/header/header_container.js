import Header from './header';
import { connect } from 'react-redux';

const mapSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

export default connect(mapSTP, null)(Header);