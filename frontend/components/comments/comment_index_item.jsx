import React from 'react';

class CommentIndexItem extends React.Component {

    render() {
        return (
            <div className='commentItemContainer'>
                <li className='commentItem'>
                <p className='commentDate'>{this.props.comment.createdAt}</p>
                    <div className='commentContent'>
                        <p className='commentAuthor'>{`${this.props.comment.author_name}:     `}</p>
                        <p className='commentMessage'>{this.props.comment.message}</p>
                    </div>
                </li>
                {this.props.comment.author_id === this.props.userId ? 
                <button className='clearCommentBtn' onClick={() => this.props.clearComment(this.props.comment.id)}>x</button>
                :
                null
            }
            </div>
        )
    }
}

export default CommentIndexItem