import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="theme-switch" 
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="theme-switch" className="toggle-label">
        <span className="toggle-icon">
          {darkMode ? '🌙' : '☀️'}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
