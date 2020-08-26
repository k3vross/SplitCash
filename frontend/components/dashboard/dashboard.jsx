import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import LeftSidebar from '../left_side/left_sidebar';
import AllBillsContainer from '../all_bills/all_bills_container';
import BalanceContainer from '../right_side/balance_container';
import BillsContainer from '../bills/bills_container';
import FriendBillsContainer from '../friend_bills/friend_bills_container';
import FriendBalanceContainer from '../friend_balance/friend_balance_container';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
        <div className='mainDash'>
            <div className='leftDash'>
                <LeftSidebar />
            </div>
            <div className='middleDash' >
                <Switch>
                    <Route path='/dashboard/all' component={AllBillsContainer} />
                    <Route path='/dashboard/:userId' component={FriendBillsContainer} />
                    <Route path='/dashboard' component={BillsContainer} />
                </Switch>
            </div>
            <div className='rightDash'>
                <Switch>
                        <Route path='/dashboard/all' component={BalanceContainer} />
                        <Route path='/dashboard/:userId' component={FriendBalanceContainer} />
                        <Route path='/dashboard' component={BalanceContainer} />
                </Switch>
            </div>
        </div>
        )}
}

export default Dashboard