import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='greeting'>
        {this.props.currentUser ?
          <div className='greetingName'>
            <h3 className='user'>{this.props.currentUser.username}</h3>
            <button className='logout' onClick={this.handleClick}>Log Out</button>
          </div>
          :
          <div className='greetingBtn'>
            <Link className="login" to="/login">Log in</Link>
            <br />
            <Link className="signup" to="/signup">Sign up</Link>
          </div>}
      </div>
    )
  }
}
export default Greeting
