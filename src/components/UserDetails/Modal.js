// Modal.js
import React from 'react';
import './Modal.css'; // Import your custom modal styles

const Modal = ({ children }) => {
  return (
    <div className="custom-modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
