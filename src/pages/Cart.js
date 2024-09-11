import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct hook import
import { useCart } from '../context/CartContext'; // Ensure correct path to CartContext
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate(); // Correct usage

    const calculateTotals = () => {
        const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const shipping = 5.00; // Example shipping cost
        return {
            subtotal: subtotal.toFixed(2),
            shipping: shipping.toFixed(2),
            total: (subtotal + shipping).toFixed(2)
        };
    };

    const { subtotal, shipping, total } = calculateTotals();

    const handleProceedToCheckout = () => {
        navigate('/checkout'); // Ensure this is used correctly
    };

    return (
        <div className="cart-container">
            <header className="cart-header">
                <h1>Your Cart</h1>
            </header>
            <main className="cart-main">
                <div className="cart-items">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <div className="cart-item-actions">
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                        <div className="quantity-controls">
                                            <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            />
                                            <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
                <div className="cart-summary">
                    <h2>Summary</h2>
                    <div className="summary-details">
                        <p>Subtotal: ${subtotal}</p>
                        <p>Shipping: ${shipping}</p>
                        <p>Total: ${total}</p>
                    </div>
                    <button className="checkout-btn" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                </div>
            </main>
            <footer className="cart-footer">
                <p>© {new Date().getFullYear()} The Prime Boutique. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Cart;
