// src/services/TicketPurchaseService.js
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

export const completeTicketPurchase = async (concertId, ticketQuantity, paymentMethodId) => {
    const response = await fetch(`${API_BASE_URL}/tickets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            concertId,
            ticketQuantity,
            payment_method_id: paymentMethodId
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to complete ticket purchase');
    }

    return response.json();
};
