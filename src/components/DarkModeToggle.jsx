import React from 'react';

const DarkModeToggle = ({ toggleTheme, theme }) => {
  return (
    <button className="dark-mode-toggle" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default DarkModeToggle;
