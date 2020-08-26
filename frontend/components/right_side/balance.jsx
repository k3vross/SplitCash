import React from 'react';


class Balance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            owed: 0,
            owe: 0
        }
        this.balanceCalc= this.balanceCalc.bind(this)
        this.totalType = this.totalType.bind(this)
    }
    
    balanceCalc() {
        const { bills, currentUser } = this.props
        let owed = 0;
        let owe = 0;
        bills.forEach( bill => {
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
            this.setState({total: 0})
        } else if (owed > owe) {
            this.setState({total: owed - owe})
        } else {
            this.setState({total: -(owe-owed)})
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bills !== this.props.bills) {
            this.balanceCalc()
        }
    }

    totalType() {
        if (this.state.total == 0) {
            return <div>You are all settled up</div>
        } else if (this.state.total > 0) {
            return <div className='green'>You are owed <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        } else {
            return <div className="red">You owe <p>${Math.abs(this.state.total).toFixed(2)}</p></div>
        }
    }
    
    render() {
        return(
            <div>
                YOUR TOTAL BALANCE
                {this.totalType()}
            </div>
        )
    }
}

export default Balance
