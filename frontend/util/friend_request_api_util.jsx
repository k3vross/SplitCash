


export const postRequest = (request) => {
    return $.ajax({
        url: "/api/friends",
        method: "POST",
        data: { request }
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