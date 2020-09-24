import { connect } from 'react-redux';
import { clearComment, createComment, getAllComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mSTP = (state, ownProps) => {
    let billComments = [];
    const comments = Object.values(state.entities.comments);
    if (comments) {
        comments.forEach(comment => {
            if (ownProps.bill.id === comment.bill_id) {
                billComments.push(comment)
            }
        })
    }
    return {
        comments: billComments,
        userId: state.session.id,
        billId: ownProps.bill.id,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        getAllComments: () => dispatch(getAllComments()),
        createComment: comment => dispatch(createComment(comment)),
        clearComment: commentId => dispatch(clearComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex)