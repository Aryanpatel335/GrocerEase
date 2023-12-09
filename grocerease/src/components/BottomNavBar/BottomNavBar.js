// BottomNavbar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import './BottomNavBar.css'; // Create this file for additional styling

const BottomNavbar = () => {
    return (
        <div className="bottom-navbar">
            <button>
                <FontAwesomeIcon icon={faHome} />
            </button>
            <button>
                <FontAwesomeIcon icon={faDollarSign} />
            </button>
            <button>
                <FontAwesomeIcon icon={faUsers} />
            </button>
            <button>
                <FontAwesomeIcon icon={faUser} />
            </button>
        </div>
    );
};

export default BottomNavbar;
