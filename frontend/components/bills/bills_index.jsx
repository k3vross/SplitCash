import React from 'react';
import BillIndexItem from './bills_index_item';

class BillsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.getAllRequests(this.props.currentUser.all_friends)
            .then(() => this.props.getAllBills(this.props.currentUser.all_bills))
        }
    }

    handleClick(e) {
        e.preventDefault();
        let open = document.getElementsByClassName('modal')[0]
        open.classList.add('is-open')
    }

    render() {
        const {currentUser} = this.props
        if (!currentUser) {
            return null
        }
        return (
            <div>
                <div className='transactionHeader'>
                    <h2>Balances</h2>
                    {this.props.friendships.length === 0 ?
                    <p className='noFriend'>Add a friend to record a transaction</p>
                    :
                    <button onClick={this.handleClick} className='formSubmit'>Add Expense</button>}
                </div>
                {this.props.friendships.length === 0 ?
                    <p className='noTransactions'>{`You don't have any friends yet! Search for them with their email in the sidebar.`}</p>
                    :
                    <ul>
                        {this.props.friendships.map(friendship => (
                            <BillIndexItem key={friendship.id}
                            clearBill={this.props.clearBill}
                            currentUser={this.props.currentUser}
                            friendship={friendship}
                            bills={this.props.bills}
                            />
                            ))}
                    </ul>
                }
            </div>
        )
    }
}

export default BillsIndex