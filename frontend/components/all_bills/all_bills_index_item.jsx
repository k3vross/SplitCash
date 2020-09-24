import React from 'react';
import { FaTimes } from 'react-icons/fa';
import CommentsContainer from '../comments/comments_container';


class BillIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailsOpen: false
        }
        this.payer = this.payer.bind(this)
        this.payee = this.payee.bind(this)
        this.getDate = this.getDate.bind(this)
        this.color = this.color.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.openDetails = this.openDetails.bind(this)
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
        const { bill } = this.props;
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
        let date = bill.created_at
        let month = date.slice(5, 7)
        let day = date.slice(8, 10)
        return (
            <div className='billDate'>
                <p className='billMonth'>{monthName[month]}</p> <p className='billDay'>{day}</p>
            </div>
        )
    }

    handleClick(e) {
        e.stopPropagation();
        const { bill, clearBill } = this.props
        clearBill(bill.id)
    }

    openDetails() {
        if (!this.state.detailsOpen) {
            this.setState({ detailsOpen: true })
        } else {
            this.setState({ detailsOpen: false });
        }
    }

    render() {
        const { bill } = this.props
        return (
            <li >
                <div onClick={this.openDetails} className='billIndexItem'>
                    <span className='billLeft'>
                        {this.getDate(bill.created_at)} <p>{bill.description}</p>
                    </span>
                    <span className='billRight'>
                        <div className='billPayer'>
                            <p className='billPayerName'>{this.payer()}</p>  <p className='billPayerAmount'>${(bill.amount / 100.00).toFixed(2)}</p>
                        </div>
                        <div className='billPayee'>
                            <p className='billPayerName'>{this.payee()}</p> <p className={this.color()} >${((bill.amount / 100.00) / 2).toFixed(2)}</p>
                        </div>
                        <div className='deleteBill'>
                            <FaTimes onClick={this.handleClick} />
                        </div>
                    </span>
                </div>
                <div className={this.state.detailsOpen ? 'billDetailsOpen' : 'billDetailsClosed'}>
                    <CommentsContainer bill={this.props.bill} />
                </div>
            </li>
        )
    }
}

export default BillIndexItem