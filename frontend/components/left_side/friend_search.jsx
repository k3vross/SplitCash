import React from 'react';


class FriendSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: this.props.fetchAllUsers()
        }
    }

    render() {
        return (
            <div className='searchBox'>
                <p className="searchHeader">Find a friend</p>
                <form>
                    <input type="text" placeholder='Search by email'/>
                    <button className="requestBtn" >Send request</button>
                </form>
            </div>
        )
    }
}

export default FriendSearch