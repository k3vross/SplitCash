import React from 'react';
import { FaTimes } from 'react-icons/fa';


class FriendBillItem extends React.Component {
    constructor(props) {
        super(props)
        this.payer = this.payer.bind(this)
        this.payee = this.payee.bind(this)
        this.getDate = this.getDate.bind(this)
        this.color = this.color.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    payer() {
        const { bill, currentUser } = this.props
        if (bill.user_id === currentUser.id && bill.author_paid === 'y') {
            return 'You paid'
        } else if (bill.user_id === currentUser.id && bill.author_paid === 'n') {
            return `${bill.receiverName} paid`
        } else if (bill.user_id !== currentUser.id && bill.author_paid === 'y') {
            return `${bill.authorName} paid`
        } else if (bill.user_id !== currentUser.id && bill.author_paid === 'n') {
            return 'You paid'
        }
    }

    payee() {
        const { bill, currentUser } = this.props
        if (bill.user_id === currentUser.id && bill.author_paid === 'y') {
            return `You lent ${bill.receiverName}`
        } else if (bill.user_id === currentUser.id && bill.author_paid === 'n') {
            return `${bill.receiverName} lent you`
        } else if (bill.user_id !== currentUser.id && bill.author_paid === 'y') {
            return `${bill.authorName} lent you`
        } else if (bill.user_id !== currentUser.id && bill.author_paid === 'n') {
            return `You lent ${bill.reveiverName}`
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

    getDate() {
        const { bill } = this.props
        const monthName = {
            "01": "JAN",
            "02": "FEB",
            "03": "MAR",
            "04": "APR",
            "05": "MAY",
            "06": "JUN",
            '07': "JUL",
            "08": "AUG",
            "09": "SEP",
            "10": "OCT",
            '11': "NOV",
            "12": "DEC"
        }
        let date = bill.updated_at
        let month = date.slice(5, 7)
        let day = date.slice(8, 10)
        return (
            <div className='billDate'>
                <p className='billMonth'>{monthName[month]}</p> <p className='billDay'>{day}</p>
            </div>
        )
    }

    handleClick() {
        const { bill, clearBill } = this.props
        clearBill(bill.id)
    }

    render() {
        return (
            <li >
                <div className='billIndexItem'>
                    <span className='billLeft'>
                        {this.getDate()} <p>{this.props.bill.description}</p>
                    </span>
                    <span className='billRight'>
                        <div className='billPayer'>
                            <p className='billPayerName'>{this.payer()}</p>  <p className='billPayerAmount'>${(this.props.bill.amount / 100.00).toFixed(2)}</p>
                        </div>
                        <div className='billPayee'>
                            <p className='billPayerName'>{this.payee()}</p> <p className={this.color()} >${((this.props.bill.amount / 100.00) / 2).toFixed(2)}</p>
                        </div>
                        <div className='editBill'>
                            <button className='editBillBtn'> Edit Bill</button>
                        </div>
                        <div className='deleteBill'>
                            <FaTimes onClick={this.handleClick} />
                        </div>
                    </span>
                </div>
            </li>
        )
    }
}

export default FriendBillItem