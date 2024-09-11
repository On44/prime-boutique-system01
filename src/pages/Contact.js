// src/pages/Contact.js

import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Reach out to us using the form below or through our contact details.</p>
            </header>
            <main className="contact-main">
                <section className="contact-form-section">
                    <h2>Get in Touch</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
                <section className="contact-info-section">
                    <h2>Our Address</h2>
                    <address>
                        <h1>Contact Info</h1>
                        <p>The Prime Boutique</p>
                        <p>Westland, Nairobi</p>
                        <p>ABC Place, ABC 211302</p>
                        <p>Email: <a href="mailto:primeboutique@gmail.com">primeboutique@gmail.com</a></p>
                        <p>Phone: <a href="tel:+254794536415">+254 794 536 415</a></p>

primeboutique@gmail.com
                    </address>
                </section>
            </main>
            <footer className="contact-footer">
                <p>© {new Date().getFullYear()} The Prime Boutique. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
