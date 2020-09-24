export const fetchAllComments = () => {
    return $.ajax({
        url: '/api/comments',
        method: "GET"
    })
}

export const fetchComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'GET'
    })
}

export const postComment = (comment) => {
    return $.ajax({
        url: `/api/comments`,
        method: 'POST',
        data: { comment }
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE',
    })
}