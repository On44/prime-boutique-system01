import React, { useState } from 'react';
import api from '../utils/api';

const Billing = () => {
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [error, setError] = useState('');

    const handleBilling = async () => {
        try {
            await api.post('/billing', { address, cardNumber });
            alert('Billing information submitted successfully!');
        } catch (error) {
            setError('Billing submission failed. Please try again.');
        }
    };

    return (
        <div className="billing-container">
            <h2>Billing Information</h2>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            <button onClick={handleBilling}>Submit Billing Info</button>
        </div>
    );
};

export default Billing;
