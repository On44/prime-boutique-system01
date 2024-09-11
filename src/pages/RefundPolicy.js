import React from 'react';
import './RefundPolicy.css'; // Import CSS for styling

const RefundPolicy = () => {
    return (
        <div className="refund-policy-container">
            <h1>Refund Policy</h1>
            <p>
                At <strong>Prime Boutique</strong>, we strive to ensure complete customer satisfaction with every purchase.
                If for any reason you are not fully satisfied with your purchase, we are here to assist with returns and refunds.
            </p>

            <h2>Eligibility for Refunds</h2>
            <p>
                You may be eligible for a refund if your item meets the following conditions:
                <ul>
                    <li>The product must be unused, in its original packaging, and in the same condition as when you received it.</li>
                    <li>A request for a refund must be made within <strong>14 days</strong> of receiving the product.</li>
                    <li>The original receipt or proof of purchase must be provided to validate your request.</li>
                </ul>
            </p>

            <h2>Non-Refundable Items</h2>
            <p>Some items are not eligible for refunds, including:</p>
            <ul>
                <li>Sale or Discounted Items</li>
                <li>Gift Cards</li>
                <li>Customized or Personalized Items</li>
            </ul>

            <h2>Conditions for Return</h2>
            <p>
                To initiate a return, please notify us of your intention to return the product within <strong>14 days</strong> of receiving the item.
                The item must be shipped back to us within <strong>30 days</strong> of your return request. The customer is responsible for the shipping costs unless
                the return is due to an error on our part.
            </p>

            <h2>Defective or Damaged Products</h2>
            <p>
                If you receive a product that is defective or damaged upon arrival, contact our customer service team immediately.
                We will arrange for a replacement or refund, including return shipping costs, once the defect is verified.
            </p>

            <h2>Refund Process</h2>
            <p>
                Once we receive your returned item, we will notify you of the approval or rejection of your refund within <strong>5 business days</strong>.
                If approved, the refund will be processed to your original payment method within <strong>7-10 business days</strong>.
            </p>

            <h2>Exchanges</h2>
            <p>
                We only replace items if they are defective or damaged. Contact us at <a href="mailto:support@primeboutique.com">support@primeboutique.com</a> for exchanges.
            </p>

            <h2>Cancellations</h2>
            <p>If you wish to cancel your order, please notify us within <strong>24 hours</strong> of placing the order.</p>

            <h2>Contact Information</h2>
            <p>
                For any questions or concerns, reach out to us:
                <ul>
                    <li>Email: <a href="mailto:support@primeboutique.com">support@primeboutique.com</a></li>
                    <li>Phone: +1 234 567 890</li>
                </ul>
            </p>
        </div>
    );
};

export default RefundPolicy;
