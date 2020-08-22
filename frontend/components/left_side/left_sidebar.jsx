import React from 'react';
import FriendsIndexContainer from '../friends/friends_index_container';
import { Link } from 'react-router-dom';
import { FaFlag, FaList } from 'react-icons/fa'
import FriendSearchContainer from './friend_search_container';

const LeftSidebar = () => {

    return (
        <div className='leftSide'>
            <Link className='dashboardLink' to="/dashboard"> <img src={window.images.logo} alt="Dashboard"/>Dashboard</Link>
            <Link className='dashboardLink' to="/dashboard"> <FaFlag className='faLink' />Recent Activity</Link>
            <Link className='dashboardLink' to="/dashboard"> <FaList className='faLink' />All expenses</Link>
            <div className='friendIndexHeader'>FRIENDS</div>
            <FriendsIndexContainer />
            <FriendSearchContainer />
        </div>
    )
}

export default LeftSidebar