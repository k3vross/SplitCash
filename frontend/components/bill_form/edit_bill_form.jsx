import React from 'react';

class EditBillForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.bill;
        this.state.newAmount = (this.props.bill.amount / 100).toFixed(2)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ amount: this.props.bill.amount})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.update('amount');
        this.state.amount = (this.state.newAmount * 100)
        this.props.updateBill(this.state)
    }

    update(field) {
        switch (field) {
            case "amount":
                return (e) =>
                  this.setState({
                    amount: e.currentTarget.value,
                    newAmount: e.currentTarget.value
                  });
        }
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
          <div className="editContainer">
            <form className="editForm" onSubmit={this.handleSubmit}>
              <h2 className="editTitle">Edit Bill</h2>
              <label className="editLabel">
                {`Description `}
                <input
                  className="editField"
                  type="text"
                  onChange={this.update("description")}
                  value={this.state.description}
                />
              </label>
              <label className="editLabel">
                {`Amount `}
                $
                <input
                  className="editField"
                  type="float"
                  onChange={this.update("amount")}
                  value={this.state.newAmount}
                />
              </label>
              <p className='paidBy'>{`Paid by ${this.props.bill.authorName}?`}</p>
              <select
                className="editSelector"
                value={this.state.author_paid}
                onChange={this.update("author_paid")}
              >
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
              <br/>
              <button className="commentBtn">Update Bill</button>
              {this.props.bill.created_at !== this.props.bill.updated_at ? (
                <p className='editNotice'>{`*This bill was edited on ${this.props.bill.updated_at.slice(
                  0,
                  10
                )}.`}</p>
              ) : null}
            </form>
          </div>
        );
    }
}

export default EditBillForm