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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({email: ''});
        this.props.processForm(user).then(() => this.props.history.push('/'));
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

    render() {
        return (
            <div>
                <h4 className="formTitle">{this.props.formType === 'Login' ? <p className="formTitle">Log In</p> : <p className="formTitle">INTRODUCE YOURSELF</p>}</h4>
                <div className="form">
                    <img className="formLogo" src={window.images.logo} alt="SplitCash"/>
                    <form className="sessionForm" onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                        <br/>
                        <br/>
                        {this.props.formType === 'Signup' ?
                            (<div>
                                <label>Email:
                                <input type="text" value={this.state.email} onChange={this.update("email")} />
                                </label>
                                <br/>
                                <br/>
                            </div>) : null}
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <br/>
                        <br/>
                        <button>{this.props.formType}</button>
                    </form>
                </div>
                <br/>
                {this.props.formType === 'Login' ?
                    (<div>
                        <p>Haven't signed up?</p>
                        <Link to="/signup">Sign Up Here</Link>
                    </div>)
                    :
                    (<div>
                        <p>Already signed up?</p>
                        <Link to="/login">Log In Here</Link>
                    </div>)
                }
                <div>
                    {this.renderErrors()}
                </div>
            </div>
        )
    }

};

export default SessionForm