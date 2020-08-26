import React from 'react';
import FriendBillItem from './friend_bills_item';
import { Link } from 'react-router-dom';

class FriendBillsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.getFriendBills = this.getFriendBills.bind(this)
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

    render() {
        const { friend } = this.props
        if (!friend) {
            return null
        }
        return (
            <div>
                <div className='transactionHeader'>
                    <h2>{friend.username}</h2>
                    <Link to={`/addBill/${friend.id}`} className='addBill'>Add Expense</Link>
                    <button className="demoBtn">Settle Up</button>
                </div>
                <ul>
                    {this.getFriendBills().map(bill => (
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