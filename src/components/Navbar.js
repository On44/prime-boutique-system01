import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false); // State to toggle dropdown visibility
    const navigate = useNavigate();
    const dropdownRef = useRef(null); // Ref to track the dropdown

    // Function to handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Function to close the dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false); // Close the dropdown if clicked outside
        }
    };

    // Set up event listener for detecting outside clicks
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">The Prime Boutique</Link>

                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contacts">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    {/* Payment Dropdown */}
                    <li className="dropdown" ref={dropdownRef}>
                        <button className="dropdown-button" onClick={toggleDropdown}>
                            Payment
                        </button>
                        {dropdownVisible && (
                            <ul className="dropdown-menu">
                                <li><Link to="/mpesa-payment">Mpesa</Link></li>
                                <li><Link to="/mastercard-payment">Mastercard</Link></li>
                                <li><Link to="/paypal-payment">PayPal</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Search Bar */}
                <form className="navbar-search" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                <div className="navbar-auth">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
