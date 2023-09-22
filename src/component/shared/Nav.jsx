import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
 
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to={'/'}><h1>Web Topics</h1></Link>
          <div className="user-controls">
            <button id="dark-mode" className="icon-button">
              <ion-icon id="moon" className="nav-icon" name="moon-outline"></ion-icon>
              <span id="dark-name">Dark Mode</span>
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
}
