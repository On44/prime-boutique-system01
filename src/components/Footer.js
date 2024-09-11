import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    const navigate = useNavigate(); // Hook to navigate to payment routes

    // Function to handle payment option redirection
    const handlePaymentClick = (paymentMethod) => {
        // Assuming you have specific routes for payment methods
        switch (paymentMethod) {
            case 'mpesa':
                navigate('/mpesa-payment'); // Redirect to Mpesa payment page
                break;
            case 'mastercard':
                navigate('/mastercard-payment'); // Redirect to MasterCard payment page
                break;
            case 'paypal':
                navigate('/paypal-payment'); // Redirect to PayPal payment page
                break;
            default:
                break;
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Navigation Links Group */}
                <div className="footer-group">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contacts">Contact Us</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>

                {/* Products Group */}
                <div className="footer-group">
                    <h4>Products</h4>
                    <ul>
                        <li><Link to="/products">Our Products</Link></li>
                    </ul>
                </div>

                {/* Legal Group */}
                <div className="footer-group">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                        <li><Link to="/refund">Refund Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Subscription Group */}
                <div className="footer-group">
                    <h4>Subscribe</h4>
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                {/* Payment Options Group */}
                <div className="footer-group">
                    <h4>Payment Options</h4>
                    <ul>
                        <li>
                            <button 
                                className="payment-button"
                                onClick={() => handlePaymentClick('mpesa')}
                            >
                                Mpesa
                            </button>
                        </li>
                        <li>
                            <button 
                                className="payment-button"
                                onClick={() => handlePaymentClick('mastercard')}
                            >
                                MasterCard
                            </button>
                        </li>
                        <li>
                            <button 
                                className="payment-button"
                                onClick={() => handlePaymentClick('paypal')}
                            >
                                PayPal
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Social Media Group */}
                <div className="footer-group">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon" /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="social-icon" /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon" /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>&copy; {new Date().getFullYear()} The Prime Boutique. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
