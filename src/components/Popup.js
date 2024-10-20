import React from 'react';
import './Popup.css';

const Popup = ({ id, text, bgColor, closePopup, openNextPopup, setPopupBgColor, zIndex }) => {
  return (
    <div className="popup popup-show" style={{ backgroundColor: bgColor, zIndex }}>
      <p>{text}</p>
      <button className="plus-btn" onClick={openNextPopup}>Plus</button>
      <button className="close-btn" onClick={() => closePopup(id)}>Close</button>

      <div className="color-picker">
        <label>Change Background Color: </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setPopupBgColor(e.target.value)}
          aria-label="Change popup background color"
        />
      </div>
    </div>
  );
};

export default Popup;
