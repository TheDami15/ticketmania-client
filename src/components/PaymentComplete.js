// src/components/PaymentComplete.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentComplete = () => {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const session_id = queryParams.get('session_id');

        const checkPaymentStatus = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/payment/verify/${session_id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                console.log('Payment verification response:', data);
            } catch (error) {
                console.error('Error verifying payment:', error);
            }
        };

        if (session_id) {
            checkPaymentStatus();
        }
    }, [location]);

    return (
        <div>
            <h1>Payment Completion</h1>
            <p>Checking payment status...</p>
        </div>
    );
};

export default PaymentComplete;
