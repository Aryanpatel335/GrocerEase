// App.js or any higher-level component

import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen/OpeningScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomeScreen />
      ) : (
        <OpeningScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
