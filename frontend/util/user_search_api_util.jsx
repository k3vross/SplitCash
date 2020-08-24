

export const searchUsers = (email) => (
    $.ajax ({
        url: '/api/users',
        method: 'GET',
        data: {email}
    })
)