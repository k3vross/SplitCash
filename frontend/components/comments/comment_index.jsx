import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.scroll = this.scroll.bind(this);
        
    }

    componentDidMount() {
        this.props.getAllComments();
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createComment({
            message: this.state.message,
            author_id: this.props.userId,
            bill_id: this.props.billId,
            author_name: this.props.currentUser.username
        }).then(() =>this.scroll())
        this.setState({ message: '' })
    }

    update(e) {
        this.setState({ message: e.currentTarget.value })
    }

    scroll() {
        const coms = document.getElementsByClassName("commentIndex");
        let i = 0
        if (coms) {
            while (i < coms.length) {
                coms[i].scrollTop = coms[i].scrollHeight
                i++
            }
        }
    }

    render() {
        return (
            <div className='commentContainer'>
                <ul className='commentIndex'>
                    {this.props.comments.map(comment => (
                        <CommentIndexItem key={comment.id} comment={comment} authorName={this.props.authorName} clearComment={this.props.clearComment} userId={this.props.userId}/>
                        ))}
                </ul>
                <form className='commentForm' onSubmit={this.handleSubmit}>
                    <textarea onClick={this.scroll} onChange={this.update} value={this.state.message} placeholder='Add a comment' cols="20" rows="4"></textarea>
                    <button className='commentBtn'>Add Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentIndex