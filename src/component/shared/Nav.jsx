import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Colors for light and dark modes
  const lightModeColors = {
    '--brand-primary': '#0768AC',
    '--brand-secondary':' #03C180',
    '--bg_default': '#FFFFFF',
    '--bg_body': '#F0F9FF',
    '--lines-color': '#DDDDDD',
    '--body-text': '#333333',
    '--heart-color': '#DC143C',
    '--bg-details':'#333333'
  };

  const darkModeColors = {
    '--bg_default': '#1A1A1A',
    '--bg_body': '#282828',
    '--lines-color': '#000000',
    '--body-text': '#EDEDED',
  };

  // Function to set dark mode based on user choice
  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Apply colors based on dark mode state
  useEffect(() => {
    const root = document.documentElement;

    const colors = darkMode ? darkModeColors : lightModeColors;

    // Apply colors to root styles
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Save dark mode state to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to={'/'}>
            <h1>Web Topics</h1>
          </Link>
          <div className="user-controls">
            <button id="dark-mode" className="icon-button" onClick={handleToggleDarkMode}>
              <ion-icon id="moon" className="nav-icon" name={darkMode ? 'sunny-outline' : 'moon-outline'}></ion-icon>
              <span id="dark-name">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <button className="icon-button">
              <ion-icon className="nav-icon" name="heart-outline"></ion-icon>
              <span>Favourites</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
