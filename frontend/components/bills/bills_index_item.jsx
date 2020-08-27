import React from 'react';
import {Link} from 'react-router-dom'


class BillIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            owed: 0,
            owe: 0
        }
        this.color = this.color.bind(this)
        this.friendName = this.friendName.bind(this)
        this.getFriendBills = this.getFriendBills.bind(this)
        this.totalType = this.totalType.bind(this)
    }

    friendName() {
        const { friendship, currentUser } = this.props
        if (currentUser.id === friendship.requester_id) {
            return friendship.recipientName
        } else {
            return friendship.requesterName
        }
    }

    friendId() {
        const { friendship, currentUser } = this.props
        if (currentUser.id === friendship.requester_id) {
            return friendship.recipient_id
        } else {
            return friendship.requester_id
        }
    }

    getFriendBills() {
        const { bills } = this.props
        let friendBills = []
        bills.forEach(bill => {
            if ((this.friendId() === bill.friend_id) || (this.friendId() === bill.user_id)) {
                friendBills.push(bill)
            }
        })
        return friendBills
    }

    balanceCalc() {
        const { currentUser} = this.props
        let owed = 0;
        let owe = 0;
        this.getFriendBills().forEach(bill => {
            if ((bill.user_id === currentUser.id) && (bill.author_paid === 'y')) {
                owed += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.user_id === currentUser.id) && (bill.author_paid === 'n')) {
                owe += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.user_id !== currentUser.id) && (bill.author_paid === 'y')) {
                owe += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.user_id !== currentUser.id) && (bill.author_paid === 'n')) {
                owed += parseFloat((bill.amount / 200).toFixed(2))
            }
        })
        if (owed === owe) {
            this.setState({ total: 0 })
        } else if (owed > owe) {
            this.setState({ total: owed - owe })
        } else {
            this.setState({ total: -(owe - owed) })
        }
    }

    componentDidMount() {
        this.balanceCalc()
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.balanceCalc()
        }
    }

    color() {
        const { bill, currentUser } = this.props
        if (bill.user_id === currentUser.id && bill.author_paid === 'y') {
            return 'billGreen'
        } else if (bill.user_id === currentUser.id && bill.author_paid === 'n') {
            return 'billRed'
        } else if (bill.user_id !== currentUser.id && bill.author_paid === 'y') {
            return 'billRed'
        } else if (bill.user_id !== currentUser.id && bill.author_paid === 'n') {
            return 'billGreen'
        }
    }

    totalType() {
        if (this.state.total == 0) {
            return <div className='billGreen'>{`You and ${this.friendName()} are all settled up`}</div>
        } else if (this.state.total > 0) {
            return <div className='billGreen'>{`${this.friendName()} owes you`} <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        } else {
            return <div className="billRed">{`You owe ${this.friendName()}`} <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        }
    }

    render() {
        return (
            <li >
                <Link className='balanceItem' to={`/dashboard/${this.friendId()}`}>
                    <div className='billIndexItem'>
                        <span className='billLeft'> 
                        <div>
                            <img className='userDefault' src={window.images.user} alt={this.friendName()}/>
                        </div>
                            <div className='balanceName'>{this.friendName()}</div>
                        </span>
                        <span className='billRight'>
                            <div className='balanceAmount'>{this.totalType()}</div>
                        </span>
                    </div>
                </Link>
            </li>
        )
    }
}

export default BillIndexItem