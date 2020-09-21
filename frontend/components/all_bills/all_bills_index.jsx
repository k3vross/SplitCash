import React from 'react';
import AllBillsIndexItem from './all_bills_index_item';

class AllBillsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.getAllBills(this.props.currentUser.all_bills)
    }

    handleClick(e) {
        e.preventDefault();
        let open = document.getElementsByClassName('modal')[0]
        open.classList.add('is-open')
    }

    render() {
        return (
            <div>
                <div className='transactionHeader'>
                    <h2>All Expenses</h2>
                    <button onClick={this.handleClick} className='formSubmit'>Add Expense</button>
                    
                </div>
                <ul>
                    {this.props.bills.map(bill => (
                        <AllBillsIndexItem key={bill.id}
                            currentUser={this.props.currentUser}
                            bill={bill}
                            clearBill={this.props.clearBill}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default AllBillsIndex