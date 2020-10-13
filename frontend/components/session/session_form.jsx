import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.loginDemo = this.loginDemo.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({email: ''});
        this.props.processForm(user).then(() => this.props.history.push('/dashboard'));
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

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    loginDemo(e) {
        e.preventDefault()
        this.setState({username: 'demoUser', password: '123456'})
        const demo = { username: 'demoUser', password: '123456' }
        this.props.processForm(demo).then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div className="fullForm">
                <h4 className="formTitle">{this.props.formType === 'Login' ? <p className="formTitle">LOG IN</p> : <p className="formTitle">INTRODUCE YOURSELF</p>}</h4>
                <div className="form">
                    <a href="#">
                        <img className='formLogo' src={window.images.logo} alt="SplitCash" />
                    </a>
                    <form className="sessionForm" onSubmit={this.handleSubmit}>
                        <label className='usernameLabel'>{this.props.formType === 'Signup' ? <p>Create a <strong>Username:</strong></p> : <p>Enter your <strong>Username:</strong></p>}
                            <input className='usernameField' type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                        <br/>
                        <br/>
                        <div className='hiddenInput'>
                        {this.props.formType === 'Signup' ?
                            (<div>
                                <label className='emailLabel'>What is your <strong>Email?</strong>
                                <input className='emailField' type="text" value={this.state.email} onChange={this.update("email")} />
                                </label>
                                <br/>
                                <br/>
                            </div>) : null}
                            <label className='passwordLabel'>{this.props.formType === 'Signup' ? <p>Create a <strong>Password:</strong></p> : <p>Enter your <strong>Password:</strong></p>}
                                <input className='passwordField' type="password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="formBtns">
                            <button className='formSubmit loginBtn'>{this.props.formType === 'Signup' ? <p>Sign me up!</p> : <p>Log me in!</p>}</button>
                            {this.props.formType === 'Login' ? <button type='button' className="demoBtn" onClick={this.loginDemo}>Demo login</button> : null}
                        </div>
                        <div className='errors'>
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
                <br/>
            </div>
        )
    }

};

export default SessionForm