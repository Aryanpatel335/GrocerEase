// UserProfile.js

import React from 'react';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Call the onLogout function passed as a prop from App.js
        onLogout();
        // Navigate to the home page or login screen
        navigate('/');
    };

    // Placeholder user information (replace with actual user data)
    const userName = 'test';
    const userEmail = 'test@4hc3.com';

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>
            <div className="user-info">
                <p>Name: {userName}</p>
                <p>Email: {userEmail}</p>
                {/* Add more user information as needed */}
            </div>
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default UserProfile;
