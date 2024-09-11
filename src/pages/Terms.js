// src/pages/Terms.js
import React from 'react';
import './Terms.css'; // Import your CSS file for styling

const Terms = () => {
    return (
        <div className="terms-container">
            <h1>Terms of Service</h1>
            <p>Last updated: [Date]</p>
            
            <section>
                <h2>1. Introduction</h2>
                <p>Welcome to the Prime Boutique! By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before using our services.</p>
            </section>

            <section>
                <h2>2. User Eligibility</h2>
                <p>You must be at least 18 years of age to use the services provided by Prime Boutique. By using our website, you confirm that you meet this age requirement. If you are under 18, you may use our services only with the involvement of a parent or guardian.</p>
            </section>

            <section>
                <h2>3. Account Registration</h2>
                <p>To access certain features of our website, you must create an account. You agree to provide accurate and up-to-date information during the registration process and to update your account information when necessary. You are responsible for maintaining the confidentiality of your account login details and for any activities that occur under your account.</p>
            </section>

            <section>
                <h2>4. Product Descriptions and Pricing</h2>
                <p>We strive to ensure that product descriptions and pricing information on our website are accurate. However, errors may occur, and we do not guarantee that product descriptions or pricing are free from mistakes. In the event of an error, we reserve the right to correct it, cancel any affected orders, and provide a refund if necessary.</p>
            </section>

            <section>
                <h2>5. Payment and Billing</h2>
                <p>All payments for purchases made through Prime Boutique are processed securely using third-party payment gateways, including Mpesa, PayPal, and credit/debit cards. By placing an order, you agree to provide valid payment details and authorize us to charge your chosen payment method for the total amount of your order, including any applicable taxes and shipping fees.</p>
            </section>

            <section>
                <h2>6. Shipping and Delivery</h2>
                <p>We aim to process and ship orders as quickly as possible. Delivery times may vary depending on your location and the shipping method chosen. Please review our <a href="/refund">Refund Policy</a> for more details regarding shipping and delivery.</p>
            </section>

            <section>
                <h2>7. Returns and Refunds</h2>
                <p>We want you to be completely satisfied with your purchase. If you are not satisfied with your order, you may be eligible for a return or refund in accordance with our <a href="/refund">Refund Policy</a>. Please review our refund guidelines to learn more about the process and conditions.</p>
            </section>

            <section>
                <h2>8. Intellectual Property</h2>
                <p>All content on the Prime Boutique website, including text, graphics, logos, images, and software, is the property of Prime Boutique or its licensors and is protected by intellectual property laws. You may not use any content from our website without obtaining explicit permission from us.</p>
            </section>

            <section>
                <h2>9. Prohibited Activities</h2>
                <p>When using the Prime Boutique website, you agree not to engage in any activities that:
                    <ul>
                        <li>Violate any applicable laws or regulations.</li>
                        <li>Infringe on the intellectual property rights of others.</li>
                        <li>Attempt to gain unauthorized access to our systems or another user's account.</li>
                        <li>Distribute viruses or harmful code.</li>
                    </ul>
                </p>
            </section>

            <section>
                <h2>10. Limitation of Liability</h2>
                <p>Prime Boutique will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or products, including but not limited to loss of profits, data, or goodwill.</p>
            </section>

            <section>
                <h2>11. Termination</h2>
                <p>We reserve the right to suspend or terminate your account and access to our services at any time, with or without cause, and without notice.</p>
            </section>

            <section>
                <h2>12. Changes to the Terms</h2>
                <p>We may update these Terms of Service from time to time. Any changes will be posted on this page, and the "Last updated" date will reflect the most recent changes. Your continued use of our website and services after any changes have been made constitutes acceptance of the revised terms.</p>
            </section>

            <section>
                <h2>13. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@primeboutique.com">support@primeboutique.com</a>.</p>
            </section>
        </div>
    );
};

export default Terms;
