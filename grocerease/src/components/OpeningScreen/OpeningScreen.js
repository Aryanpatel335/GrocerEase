// OpeningScreen.js

import React, { useState } from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import logo from '../../img/logo.jpeg';
import './OpeningScreen.css';

const OpeningScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const checkCredentials = () => {
        const correctUsername = 'test';
        const correctPassword = '123';

        if (username === correctUsername && password === correctPassword) {
            setLoggedIn(true);
            setLoginError(false);
        } else {
            setLoggedIn(false);
            setLoginError(true);
        }
    };

    return (
        <div className="opening-screen">
            <img src={logo} alt="Grocerease Logo" className="logo" />

            <div className="login-container">
                <form className="login-form">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="button" className="login-button" onClick={checkCredentials}>
                        Login
                    </button>

                    {loginError && <p className="error-message">Incorrect username or password. Please try again.</p>}

                    {isLoggedIn && <HomeScreen />}
                </form>
            </div>
        </div>
    );
};

export default OpeningScreen;
