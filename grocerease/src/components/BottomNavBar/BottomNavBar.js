// BottomNavbar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import './BottomNavBar.css'; // Create this file for additional styling
import { useNavigate } from "react-router-dom";

const BottomNavbar = () => {
    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(route);
    };
    return (
        <div className="bottom-navbar">
            <button onClick={() => navigateTo(`/home`)}>
                <FontAwesomeIcon icon={faHome} />
            </button>
            <button onClick={() => navigateTo(`/discounts`)}>
                <FontAwesomeIcon icon={faDollarSign} />
            </button>
            <button onClick={() => navigateTo(`/groups`)}>
                <FontAwesomeIcon icon={faUsers} />
            </button>
            <button>
                <FontAwesomeIcon icon={faUser} />
            </button>
        </div>
    );
};

export default BottomNavbar;
