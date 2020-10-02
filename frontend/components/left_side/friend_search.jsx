import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";


class FriendSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.closeMouse = this.closeMouse.bind(this);
    }

    update() {
        return e => this.setState({ email: e.currentTarget.value });
    }

    handleMouse(e) {
        e.preventDefault();
        let info = document.getElementsByClassName('friendInfo')[0];
        let classes = info.classList;
        if (!classes.contains("infoOpen")) {
          info.classList.add("infoOpen");
        }
    }

    closeMouse(e) {
        e.preventDefault();
        let info = document.getElementsByClassName("friendInfo")[0];
        info.classList.remove("infoOpen");
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getUser(this.state.email);
        this.props.sendRequest(this.state.email)
        this.setState({email: ''})
    }

    renderErrors() {
        let { currentUser } = this.props
        if (!currentUser) return null
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
          <div className="searchBox">
            <p className="searchHeader">
              Find a friend{" "}
              <FaQuestionCircle
                onMouseEnter={this.handleMouse}
                onMouseLeave={this.closeMouse}
                className="questionCircle"
              />
            </p>
            <div className="friendInfo">
              <p className='friendInfoMsg'>
                Search for registered users by their email. If you have made a new user and would like to test functionality, search for joe@joe.com or jen@jen.com.
              </p>
            </div>
            <form className="friendSearchForm" onSubmit={this.handleSubmit}>
              <input
                className="emailSearch"
                type="text"
                value={this.state.email}
                onChange={this.update()}
                placeholder="Search by email"
              />
              <button className="commentBtn">Add Friend</button>
            </form>
            <div className="errors">{this.renderErrors()}</div>
          </div>
        );
    }
}

export default FriendSearch