

export const postBill = (bill) => {
    return $.ajax({
        url: `/api/bills`,
        method: 'POST',
        data: {bill}
    })
}

export const fetchBill = billId => {
    return $.ajax({
        url: `/api/bills/${billId}`,
        method: 'GET',

    })
}

export const fetchBills = (billIds) => {
    return $.ajax({
        url: '/api/bills',
        method: 'GET',
        data: {billIds}
    })
}

export const editBill = bill => {
    return $.ajax({
        url: `/api/bills/${bill.id}`,
        method: 'PATCH',
        data: {bill}
    })
}

export const deleteBill = (billId) => {
    return $.ajax({
        url: `/api/bills/${billId}`,
        method: 'DELETE'
    })
}