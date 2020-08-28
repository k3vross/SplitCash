import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import LeftSidebar from '../left_side/left_sidebar';
import AllBillsContainer from '../all_bills/all_bills_container';
import BalanceContainer from '../right_side/balance_container';
import BillsContainer from '../bills/bills_container';
import FriendBillsContainer from '../friend_bills/friend_bills_container';
import FriendBalanceContainer from '../friend_balance/friend_balance_container';
import CreateBillFormContainer from '../bill_form/create_bill_form_container';
import CreateBillAllContainer from '../bill_form/create_bill_all_container';
import CreateBillDashContainer from '../bill_form/create_bill_dash_container';
import Plates from '../right_side/plates';





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
                        <Route exact path='/dashboard' component={Plates} />
                        <Route path='/dashboard/all' component={BalanceContainer} />
                        <Route path='/dashboard/:userId' component={FriendBalanceContainer} />
                </Switch>
                <Switch>
                    <Route exact path='/dashboard/' component={CreateBillDashContainer} />
                    <Route path='/dashboard/all' component={CreateBillAllContainer} />
                    <Route path='/dashboard/:userId' component={CreateBillFormContainer} />
                </Switch>
            </div>
        </div>
        )
    }
}

export default Dashboard