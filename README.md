<p display='inline' align="left"> <img width="250px" height="185px" src="https://github.com/k3vross/SplitCash/blob/master/app/assets/images/sc_logo.png"> </p>

# SplitCash 

SplitCash is a single page webapp designed to help you keep track of money you owe and money you are owed in an easy to use and straightforward interface. Create transactions between friends, and the app will automatically split the amount and keep a running total of how much you owe or are owed by individual friends, or see you total balance from all friends!

---

## Live Demo

Check out a live demo of SplitCash
[HERE](https://splitcash-app.herokuapp.com/#/)

---

## Features

* Splash page with login and signup buttons. A Demo User button is provided onthe login form so you can check out the apps features before signing up

<p display='inline' align="left"> <img width="1100px" height="550px" src="https://github.com/k3vross/SplitCash/blob/master/app/assets/images/splash.png"> </p>

* View totals owed from each friend on main dashboard

<p display='inline' align="left"> <img width="900px" height="371px" src="https://github.com/k3vross/SplitCash/blob/master/app/assets/images/dash.png"> </p>

* View all all transactions across all friends

<p display='inline' align="left"> <img width="800px" height="444px" src="https://github.com/k3vross/SplitCash/blob/master/app/assets/images/all_expenses.png"> </p>

* View transactions between individual friends

<p display='inline' align="left"> <img width="900px" height="300px" src="https://github.com/k3vross/SplitCash/blob/master/app/assets/images/friend_expenses.png"> </p>

* Create bills between you and any of your friends

<p display='inline' align="left"> <img width="600px" height="524px" src="https://github.com/k3vross/SplitCash/blob/master/app/assets/images/create_bill.png"> </p>

---

## Technologies

* Postgres(2.3.5) - Used for database management
* Ruby-on-Rails(5.2.4.3) - Used for the backend routes, models, controllers, migrations, ect.
* JQuery(1.12.4) - Used to make ajax calls to the backend from React utils
* React(16.3.1) & Redux(4.0.5) - Used to render the app, connect with the backend, and create dynamic functionality

---

## Calculations

This app uses complex algorithms to determin how bills are added. There are many variables on a bill, such as who authored it, who paid, and bill amount. Below is an example of how these were calculated.

```javascript
class FriendBalance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            owed: 0,
            owe: 0
        }
        this.balanceCalc = this.balanceCalc.bind(this)
        this.totalType = this.totalType.bind(this)
        this.getFriendBills = this.getFriendBills.bind(this)
    }

    getFriendBills() {
        const { bills, friend } = this.props
        let friendBills = []
        bills.forEach(bill => {
            if (friend.id === bill.friend_id || friend.id === bill.user_id) {
                friendBills.push(bill)
            }
        })
        return friendBills
    }

    balanceCalc() {
        const { bills, currentUser, friend } = this.props
        let owed = 0;
        let owe = 0;
        if (!friend) {
            return null
        }
        this.getFriendBills().forEach(bill => {
            if ((bill.user_id === currentUser.id) && (bill.author_paid === 'y')) {
                owed += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.user_id === currentUser.id) && (bill.author_paid === 'n')) {
                owe += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.user_id !== currentUser.id) && (bill.author_paid === 'y')) {
                owe += parseFloat((bill.amount / 200).toFixed(2))
            } else if ((bill.user_id !== currentUser.id) && (bill.author_paid === 'n')) {
                owed += parseFloat((bill.amount / 200).toFixed(2))
            }
        })
        if (owed === owe) {
            this.setState({ total: 0 })
        } else if (owed > owe) {
            this.setState({ total: owed - owe })
        } else {
            this.setState({ total: -(owe - owed) })
        }
    }
    
    totalType() {
        const { friend } = this.props
        if (this.state.total == 0) {
        return <div className='green'>{`You and ${friend.username} are all settled up`}</div>
        } else if (this.state.total > 0) {
            return <div className='green'>{`${friend.username} owes you`}
            <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        } else {
            return <div className="red">{`You owe ${friend.username}`}
            <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        }
    }
...
```

## Dynamic Modal Forms

SplitCash features dynamic modal forms for creating bills, where options change depending on previous options selected. Many challenegs were faced when desigining the modals, especially with the selector elements and rendering their options as return values from functions, but the end result created a more dynamic and responsive form that is easy to use.

```javascript
...
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
                                    return <option key={friendship.id}value={friendship.recipient_id}>{friendship.recipientName}</option>
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
...
```

