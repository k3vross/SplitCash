import React from 'react';


class FriendSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    

    update() {
        return e => this.setState({ email: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getUser(this.state.email);
        this.props.sendRequest(this.state.email)
        this.setState({email: ''})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    return (<li key={i}>
                        {error}
                    </li>)
                })}
            </ul>
        )
    }



    render() {
        return (
            <div className='searchBox'>
                <p className="searchHeader">Find a friend</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.update()} placeholder='Search by email'/>
                    <button className="commentBtn">Add Friend</button>
                </form>
                <div className='errors'>
                    {this.renderErrors()}
                </div> 
            </div>
        )
    }
}

export default FriendSearch