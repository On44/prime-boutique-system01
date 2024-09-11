import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

const Products = () => {
    const { addToCart } = useCart();

    // Search query state to hold the user's search input
    const [searchQuery, setSearchQuery] = useState('');

    // Example product list (Replace with actual data)
    const products = [
        { id: 1, name: 'Airmax', price: 49.99, image: '/images/car.jpg' },
        { id: 2, name: 'Elegant shoe', price: 99.99, image: '/images/jack shoe.jpg' },
        { id: 3, name: 'Puma Shoes', price: 39.99, image: '/images/Puma shoes.jpg' },
        { id: 4, name: 'HikeUp Shoes', price: 199.99, image: '/images/HikeUp shoes.jpg' },
        { id: 5, name: 'Panam Air Shoes', price: 59.99, image: '/images/Panam Air shoe.jpg' },
        { id: 6, name: 'Polabeer Shoes', price: 31.99, image: '/images/Polabeer Shoes.jpg' },
        { id: 7, name: 'Trench Coat', price: 78.99, image: '/images/Brown Coat side.jpg' },
        { id: 8, name: 'Backpack Bag', price: 91.99, image: '/images/Backpack bag.jpg' },
        { id: 9, name: 'Feng Boot', price: 76.99, image: '/images/Feng Boot shoes.jpg'},
        { id: 10, name: 'TJK shoes', price: 61.23, image: '/images/TJK shoe.jpg'},
        { id: 11, name: 'Curvysleeved', price: 46.44, image: '/images/Curvysleeved.jpeg'},
        { id: 12, name: 'Denim', price: 32.54, image: '/images/Denim.jpeg'},
        { id: 13, name: 'Jeans', price: 51.23, image: '/images/Jeans.jpeg'},
        { id: 14, name: 'Khaki', price: 43.71, image: '/images/Khaki.jpeg'},
        { id: 15, name: 'Kitenge', price: 63.71, image: '/images/Kitenge.jpeg'},
        { id: 16, name: 'Polo', price: 31.91, image: '/images/Polo.jpeg'},
        { id: 17, name: 'Summerdress', price: 59.79, image: '/images/Summerdress.jpeg'},
        { id: 18, name: 'Truck strip', price: 45.31, image: '/images/Truck Strip.jpeg'},
        { id: 19, name: 'Twist Trouser', price: 45.71, image: '/images/Khaki.jpeg'},
        { id: 20, name: 'Vneck', price: 39.45, image: '/images/Vneck.jpeg'},
        { id: 21, name: 'White Jeans trouser', price: 65.41, image: '/images/White Jeans trouser.jpg'},
        // Add more products here
    ];

    // Filter the products based on the search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="products-container">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" onClick={() => setSearchQuery(searchQuery)}>
                    Search
                </button>
            </div>

            {/* Display Filtered Products */}
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products found for "{searchQuery}"</p>
                )}
            </div>
        </div>
    );
};

export default Products;
