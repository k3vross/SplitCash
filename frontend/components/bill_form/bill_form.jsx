import React from 'react';

class BillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bill
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit(e) {
        const { friend } = this.props
        e.preventDefault()
        this.state.user_id = friend.id;
        let open = document.getElementsByClassName('modal')[0]
        open.classList.remove('is-open')
        this.props.action(this.state).then(() => this.props.history.push(`/dashboard/${friend.id}`))
        this.setState({ user_id: this.props.match.params.userId, description: "", amount: '', author_paid: 'y'})
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

    handleClick(e) {
        e.preventDefault();
        let open = document.getElementsByClassName('modal')[0]
        open.classList.remove('is-open')
        this.setState({ description: "", amount: '', author_paid: 'y' })
    }

    render() {
        const { friend, formType } = this.props
        if (!friend) {
            return null
        }
        return (
            <div className='modal'>
                <form className='modal-form' onSubmit={this.handleSubmit}>
                    <span className='modal-close js-modal-close'></span>
                    <div className='formHeader'>
                        <h3>{formType}</h3>
                    </div>
                    <div className='formNames'>
                        <p>{`With you and ${friend.username}`}</p>
                    </div>
                    <br/>
                    <div className='billInfo'>
                        <img src={window.images.bill} alt="Add a bill"/>
                        <div className='billDetails'>
                            <input type="text" className='billDescription' placeholder="Enter a description" value={this.state.description} onChange={this.update('description')} />
                            <br/>
                            <label className='dollarLabel'>$
                                <input className='billAmount' type='float' placeholder='0.00' value={this.state.amount} onChange={this.update('amount')}/>
                            </label>
                        </div>
                    </div>
                    <br/>
                    <div className="billSummary">
                        Paid by <select className='selector' value={this.state.author_paid} onChange={this.update('author_paid')}>
                                    <option value='y'>You</option>
                                    <option value='n'>{`${friend.username}`}</option>
                                </select> and split equally
                                <br/>
                                ${(this.state.amount / 2).toFixed(2)} / person  
                                <br/>
                    </div>
                    <div className='billBtn'>
                        <button onClick={this.handleClick}className='cancelBill'>Cancel</button>
                        <button className='addBill'>Add Bill</button>
                    </div>
                </form>
                <div onClick={this.handleClick} className='modal-screen js-modal-close'></div>
            </div>
        )
    }
}

// bill: { user_id: null, friend_id: null, description: "", amount: 0, author_paid: null },

export default BillForm