


export const postRequest = (request) => {
    return $.ajax({
        url: "/api/friends",
        method: "POST",
        data: { request }
    })
}

export const deleteRequest = (requestId) => {
    return $.ajax({
        url: `/api/friends/${requestId}`,
        method: "DELETE"
    })
}