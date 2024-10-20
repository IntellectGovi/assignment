import React, { useState } from 'react';
import './App.css';
import Popup from './components/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [popups, setPopups] = useState([{ id: 1, text: 'Hello world 1' }]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [popupBgColor, setPopupBgColor] = useState('#0000FF'); // Default background color

  // Open the pop-up
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Close the pop-up
  const closePopup = (id) => {
    setPopups(popups.filter((popup) => popup.id !== id));
    if (popups.length === 1) {
      setIsPopupOpen(false);
    }
  };

  // Add a new pop-up on top
  const openNextPopup = () => {
    const newPopupId = popups.length + 1;
    setPopups([...popups, { id: newPopupId, text: `Hello world ${newPopupId}` }]);
  };

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme === 'light' ? '' : 'dark-mode';
  };

  return (
    <div className={`app-container`}>
      {/* Background that will blur */}
      <div className={`background-content ${isPopupOpen ? 'blur-background' : ''}`}>
        <button className="open-btn" onClick={openPopup}>
          Click Here
        </button>

        {/* Dark mode toggle icon */}
        <div className="dark-mode-icon" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} size="2x" />
        </div>
      </div>

      {/* Render all the pop-ups */}
      {isPopupOpen && popups.map((popup, index) => (
        <Popup
          key={popup.id}
          id={popup.id}
          text={popup.text}
          bgColor={popupBgColor}
          closePopup={closePopup}
          openNextPopup={openNextPopup}
          setPopupBgColor={setPopupBgColor}
          zIndex={index + 1}
        />
      ))}
    </div>
  );
};

export default App;
