import React from 'react';
import BillIndexItem from './bills_index_item';

class BillsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.getAllRequests(this.props.currentUser.all_friends)
        this.props.getAllBills(this.props.currentUser.all_bills)
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
                    <button onClick={this.handleClick} className='formSubmit'>Add Expense</button>
                    <button className="demoBtn">Settle Up</button>
                </div>
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
            </div>
        )
    }
}

export default BillsIndex