

export const postBill = (bill) => {
    return $.ajax({
        url: `/api//bills`,
        method: 'POST',
        data: {bill}
    })
}

export const fetchBills = (billIds) => {
    return $.ajax({
        url: '/api/bills',
        method: 'GET',
        data: {billIds}
    })
}

export const deleteBill = (billId) => {
    return $.ajax({
        url: `/api/bills/${billId}`,
        method: 'DELETE'
    })
}