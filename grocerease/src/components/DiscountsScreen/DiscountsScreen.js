// DiscountsScreen.js

import React, { useState } from 'react';
import './DiscountsScreen.css';
import BottomNavbar from '../BottomNavBar/BottomNavBar';

const DiscountsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Perform search logic and update searchResults state
        // For simplicity, let's assume we have some predefined data for grocery stores
        const groceryStores = [
            { name: 'Fortinos', distance: '1 KM', discountedPrice: '$2.99' },
            { name: 'Food Basics', distance: '2 KM', discountedPrice: '$3.49' },
            { name: 'Metro', distance: '0.5 KM', discountedPrice: '$2.79' },
        ];

        // Sort by discounted price in ascending order
        const sortedResults = [...groceryStores].sort((a, b) => parseFloat(a.discountedPrice) - parseFloat(b.discountedPrice));

        setSearchResults(sortedResults);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="discounts-screen">
            <h1>Discounts</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for grocery items..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <button onClick={handleSearch} className='search_button'>Search</button>
            </div>

            {searchResults.length > 0 ? (
                <div className="search-results">
                    <h2>Search Results</h2>
                    {searchResults.map((store, index) => (
                        <div key={index} className="store-item">
                            <p>{store.name}</p>
                            <p>{store.distance}</p>
                            <p>{store.discountedPrice}</p>
                        </div>
                    ))}
                    <button className="clear-search-button" onClick={handleClearSearch}>
                        Clear Search
                    </button>
                </div>
            ) : (
                <div className="popular-discounts">
                    <h2>Popular Discounts</h2>
                    <div className="store-item">
                        <p>Apple</p>
                        <p>$2.99</p>
                    </div>
                    <div className="store-item">
                        <p>Milk</p>
                        <p>$3.49</p>
                    </div>
                    <div className="store-item">
                        <p>Bananas</p>
                        <p>$2.79</p>
                    </div>
                </div>
            )}
            <BottomNavbar />
        </div>
    );
};

export default DiscountsScreen;
