import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

export default connect(mSTP, null)(Dashboard)