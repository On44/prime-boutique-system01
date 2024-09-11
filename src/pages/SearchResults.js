import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const query = new URLSearchParams(useLocation().search).get('q'); // Get the search query from URL

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const res = await axios.get(`/api/search?q=${query}`);
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching search results', error);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            {products.length > 0 ? (
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product._id} className="product-item">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <span>${product.price}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found for your search.</p>
            )}
        </div>
    );
};

export default SearchResults;
