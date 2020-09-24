import * as commentAPI from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const getAllComments = () => dispatch => {
    return commentAPI.fetchAllComments()
        .then(comments => dispatch(receiveComments(comments)))
}

export const getComment = (commentId) => dispatch => {
    return commentAPI.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
}

export const createComment = (comment) => dispatch => {
    return commentAPI.postComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
}

export const clearComment = (commentId) => dispatch => {
    return commentAPI.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
}