import React, { useState } from 'react';
import './MpesaPayment.css';

const MpesaPayment = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your Mpesa API or process payment here
        alert(`Processing Mpesa payment for ${amount} to phone number ${phoneNumber}`);
    };

    return (
        <div className="mpesa-payment-container">
            <h2>Mpesa Payment</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                <button type="submit">Pay with Mpesa</button>
            </form>
        </div>
    );
};

export default MpesaPayment;
