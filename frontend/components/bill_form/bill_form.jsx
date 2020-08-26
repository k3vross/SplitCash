import React from 'react';

class BillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bill
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.stringToBoolean = this.stringToBoolean.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state).then(() => this.props.history.push('/dashboard'))
    }

    update(field) {
        switch (field) {
            case 'amount':
                return e => this.setState({ amount: e.currentTarget.value })
            case 'author_paid':
                return e => this.setState({ author_paid: e.currentTarget.value})
            default:
                return e => this.setState({ [field]: e.currentTarget.value })
        }       
    }

    stringToBoolean(string) {
    switch (string) {
        case "true": return true;
        case "false": return false;
    }
}

    render() {
        const { friend, formType } = this.props 
        return (
            <div>
                <h3>{formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    {`With you and ${friend.username}`}
                    <br/>
                    <input type="text" placeholder="Enter a description" value={this.state.description} onChange={this.update('description')} />
                    <br/>
                    $<input type='float' placeholder='0.00' value={this.state.amount} onChange={this.update('amount')}/>
                    <br/>
                    Paid by <select value={this.state.author_paid} onChange={this.update('author_paid')}>
                                <option value='y'>You</option>
                                <option value='n'>{`${friend.username}`}</option>
                            </select> and split equally
                            <br/>
                            ${(this.state.amount / 2).toFixed(2)} / person  
                            <br/>
                    <button>Add Bill</button>
                </form>
            </div>
        )
    }
}

// bill: { user_id: null, friend_id: null, description: "", amount: 0, author_paid: null },

export default BillForm