import React, { useState } from 'react';
import './PayPalPayment.css';

const PayPalPayment = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your PayPal API or process payment here
        alert(`Processing PayPal payment for ${amount} to email ${email}`);
    };

    return (
        <div className="paypal-payment-container">
            <h2>PayPal Payment</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">PayPal Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Pay with PayPal</button>
            </form>
        </div>
    );
};

export default PayPalPayment;
