import React from 'react';
import AllBillsIndexItem from './all_bills_index_item';

class AllBillsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser && this.props.currentUser.all_friends) {
      this.props
        .getAllRequests(this.props.currentUser.all_friends)
        .then(() => this.props.getAllBills(this.props.currentUser.all_bills));
    }
  }

  handleClick(e) {
    e.preventDefault();
    let open = document.getElementsByClassName("modal")[0];
    open.classList.add("is-open");
  }

  render() {
      let { currentUser } = this.props;
      if (!currentUser) {
          return null
      }
    return (
      <div>
        <div className="transactionHeader">
          <h2>All Expenses</h2>
          {this.props.friendships.length === 0 ? (
            <p className="noFriend">Add a friend to record a transaction</p>
          ) : (
            <button onClick={this.handleClick} className="formSubmit">
              Add Expense
            </button>
          )}
        </div>
        {this.props.bills.length === 0 ? (
          <p className="noTransactions">{`You don't have any transactions yet! Add them with the above button.`}</p>
        ) : (
          <ul>
            {this.props.bills.map((bill) => (
              <AllBillsIndexItem
                key={bill.id}
                currentUser={this.props.currentUser}
                bill={bill}
                clearBill={this.props.clearBill}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default AllBillsIndex