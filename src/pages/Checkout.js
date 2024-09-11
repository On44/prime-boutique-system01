import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Simulate fetching data or initializing items
    // Example with an API call
    // fetch('/api/cart')
    //   .then(response => response.json())
    //   .then(data => {
    //     setItems(data);
    //     calculateTotal(data);
    //   })
    //   .catch(error => console.error('Error fetching cart items:', error));

    // For demonstration, we use hardcoded data
    const cartItems = [
      { id: 1, name: 'Item 1', price: 20, quantity: 2 },
      { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    ];
    setItems(cartItems);
    calculateTotal(cartItems);
  }, []);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {items.length > 0 ? (
        <div>
          {items.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
          <hr />
          <h3>Total Amount: ${total.toFixed(2)}</h3>
          
          {/* Payment Method Section */}
          <div>
            <h3>Select Payment Method</h3>
            <label>
              <input type="radio" name="payment" value="credit-card" /> Credit Card
            </label>
            <br />
            <label>
              <input type="radio" name="payment" value="paypal" /> PayPal
            </label>
            <br />
            <label>
              <input type="radio" name="payment" value="mpesa" /> MPesa
            </label>
          </div>
          
          {/* Add Checkout Button */}
          <button onClick={() => alert('Proceeding to payment...')}>Proceed to Payment</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
