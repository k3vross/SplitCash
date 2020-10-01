import React from 'react';
import FriendsIndexContainer from '../friends/friends_index_container';
import { Link } from 'react-router-dom';
import { FaFlag, FaList, FaLinkedin, FaGithubSquare, FaAngellist } from 'react-icons/fa';
import FriendSearchContainer from './friend_search_container';

const LeftSidebar = () => {

    return (
        <div className='leftSide'>
            <Link className='dashboardLink' to="/dashboard"> <img src={window.images.logo} alt="Dashboard"/>Dashboard</Link>
            <Link className='dashboardLink' to="/dashboard/all"> <FaFlag className='faLink' />Recent Activity</Link>
            <Link className='dashboardLink' to="/dashboard/all"> <FaList className='faLink' />All expenses</Link>
            <div className='friendIndexHeader'>FRIENDS</div>
            <FriendsIndexContainer />
            <FriendSearchContainer />
            <div className='personalLinks'>
                <a href="https://www.linkedin.com/in/kevin-ross-7450591ab/" target="_blank"><FaLinkedin className='personalLink' /></a>
                <a href="https://angel.co/u/kevin-ross-21" target="_blank"><FaAngellist className='personalLink' /></a>
                <a href="https://github.com/k3vross" target="_blank"><FaGithubSquare className='personalLink' /></a>
            </div>
        </div>
    )
}

export default LeftSidebar