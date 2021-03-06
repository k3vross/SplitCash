import React from 'react';


class FriendBalance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            owed: 0,
            owe: 0
        }
        this.balanceCalc = this.balanceCalc.bind(this)
        this.totalType = this.totalType.bind(this)
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

    balanceCalc() {
        const { bills, currentUser, friend } = this.props
        let owed = 0;
        let owe = 0;
        if (!friend) {
            return null
        }
        this.getFriendBills().forEach(bill => {
            if ((bill.authorName === currentUser.username) && (bill.author_paid === 'y')) {
                owed += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.authorName === currentUser.username) && (bill.author_paid === 'n')) {
                owe += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.authorName !== currentUser.username) && (bill.author_paid === 'y')) {
                owe += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.authorName !== currentUser.username) && (bill.author_paid === 'n')) {
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
    
    totalType() {
        const { friend } = this.props
        if (this.state.total == 0) {
        return <div className='green'>{`You and ${friend.username} are all settled up`}</div>
        } else if (this.state.total > 0) {
            return <div className='green'>{`${friend.username} owes you`} <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        } else {
            return <div className="red">{`You owe ${friend.username}`} <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
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

    handleClick() {
        if (confirm("Are you sure you want to delete this friend? Their bills will stay in the 'All Transactions' section")) {
            this.props.clearRequest(this.props.friendId)
            this.props.history.push('/dashboard')
        }
    }

    render() {
        const { friend } = this.props
        if (!friend) {
            return null
        }
        return (
            <div>
                YOUR BALANCE WITH {friend.username}
                {this.totalType()}
                <div>
                    <button className='removeFriendBtn' onClick={this.handleClick}>Remove This Friend</button>
                </div>
            </div>
        )
    }
}

export default FriendBalance
