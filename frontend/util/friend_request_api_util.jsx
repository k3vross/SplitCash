


export const postRequest = (email) => {
    return $.ajax({
        url: "/api/friends",
        method: "POST",
        data: { email }
    })
}

export const fetchRequests = (requestIds) => {
    return $.ajax({
        url: '/api/friends',
        method: 'GET',
        data: {requestIds}
    })
}

export const deleteRequest = (requestId) => {
    return $.ajax({
        url: `/api/friends/${requestId}`,
        method: "DELETE"
    })
}