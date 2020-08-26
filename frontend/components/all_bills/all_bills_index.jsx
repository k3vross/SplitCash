import React from 'react';
import BillIndexItem from '../bills/bills_index_item';

class AllBillsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllBills(this.props.currentUser.all_bills)
    }

    render() {
        return (
            <div>
                <div className='transactionHeader'>
                    <h2>All Expenses</h2>
                    <button className='formSubmit'>Add Expense</button>
                    <button className="demoBtn">Settle Up</button>
                </div>
                <ul>
                    {this.props.bills.map(bill => (
                        <BillIndexItem key={bill.id}
                            currentUser={this.props.currentUser}
                            bill={bill}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default AllBillsIndex