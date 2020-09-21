import React from 'react';

class DashBillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.bill
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getName = this.getName.bind(this)
    }

    handleSubmit(e) {
        const { formType } = this.props
        e.preventDefault()  
        let open = document.getElementsByClassName('modal')[0]
        open.classList.remove('is-open')
        console.log(this.props)
        if (formType === 'Add a bill') {
            this.props.action(this.state).then(() => this.props.history.push(`/dashboard/all`))
        } else {
            this.props.action(this.state).then(() => this.props.history.push(`/dashboard/`))
        }
        this.setState({ user_id: '', description: '', amount: '', author_paid: 'y'})
    }

    update(field) {
        switch (field) {
            case 'amount':
                return e => this.setState({ amount: e.currentTarget.value })
            case 'author_paid':
                return e => this.setState({ author_paid: e.currentTarget.value})
            case 'user_id':
                return e => this.setState({ user_id: parseInt((e.currentTarget.value))})
            default:
                return e => this.setState({ [field]: e.currentTarget.value })
        }       
    }

    handleClick(e) {
        e.preventDefault();
        let open = document.getElementsByClassName('modal')[0]
        open.classList.remove('is-open')
        this.setState({ user_id: '', description: '', amount: '', author_paid: 'y' })
    }

    getName() {
        const { friendships } = this.props
        return friendships.map(friendship => {
            if (this.state.user_id === friendship.recipient_id) {
                return friendship.recipientName
            } else if (this.state.user_id === friendship.requester_id) {
                return friendship.requesterName
            }
        })
    }

    render() {
        const { friendships, formType, currentUser } = this.props
        if (friendships.length === 0) {
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
                        With you and <select className='selector' value={this.state.user_id} onChange={this.update('user_id')}>
                            <option value="" disabled>Select a friend</option>
                            {friendships.map(friendship => {
                                if (currentUser.id === friendship.requester_id) {
                                    return <option key={friendship.id} value={friendship.recipient_id}>{friendship.recipientName}</option>
                                } else {
                                    return <option key={friendship.id} value={friendship.requester_id}>{friendship.requesterName}</option>
                                }
                            })}
                        </select>
                    </div>
                    <br/>
                    <div className='billInfo'>
                        <img src={window.images.bill} alt="Add a bill"/>
                        <div className='billDetails'>
                            <input 
                                type="text"
                                className='billDescription'
                                placeholder="Enter a description"
                                value={this.state.description}
                                onChange={this.update('description')} />
                            <br/>
                            <label className='dollarLabel'>$
                                <input 
                                    className='billAmount'
                                    type='float' placeholder='0.00'
                                    value={this.state.amount}
                                    onChange={this.update('amount')}/>
                            </label>
                        </div>
                    </div>
                    <br/>
                    <div className="billSummary">
                        Paid by <select 
                        className='selector'
                        value={this.state.author_paid}
                        onChange={this.update('author_paid')}>
                                    <option value='y'>you</option>
                                    <option value='n'>{this.getName()}</option>
                                </select> and split equally
                                <br/>
                                ${(this.state.amount / 2).toFixed(2)} / person  
                                <br/>
                    </div>
                    <div className='billBtn'>
                        <button onClick={this.handleClick} className='cancelBill'>Cancel</button>
                        <button className='addBill'>Add Bill</button>
                    </div>
                </form>
                <div onClick={this.handleClick} className='modal-screen js-modal-close'></div>
            </div>
        )
    }
}

export default DashBillForm