import React from 'react';
import FriendBillItem from './friend_bills_item';
import { Link } from 'react-router-dom';

class FriendBillsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.getFriendBills = this.getFriendBills.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    getFriendBills() {
        const { bills, friend } = this.props
        let friendBills = []
        bills.forEach(bill => {
            if (friend.id === bill.friend_id || friend.id === bill.user_id) {
            friendBills.push(bill)
            }
        })
        return friendBills
    }

    handleClick(e) {
        e.preventDefault();
        let open = document.getElementsByClassName('modal')[0]
        open.classList.add('is-open')
    }

    componentDidMount() {
        this.props.getAllBills()
    }

    render() {
        const { friend } = this.props
        if (!friend) {
            return null
        }
        return (
            <div>
                <div className='transactionHeader'>
                    <h2>{friend.username}</h2>
                    <button onClick={this.handleClick} className='formSubmit'>Add Expense</button>
                    
                </div>
                <ul>
                    {this.getFriendBills().length === 0 ? 
                    <p className='noTransactions'>{`You dont have any transactions with ${friend.username}!`}</p>
                    :
                    this.getFriendBills().map(bill => (
                        <FriendBillItem key={bill.id}
                            clearBill={this.props.clearBill}
                            currentUser={this.props.currentUser}
                            bill={bill}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default FriendBillsIndex