// File: app/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="mb-4">Would you like to watch an interactive web page presentation of myself?</p>
        <div className="flex justify-end">
          <button
            className="my-button-primary my-text-primary px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            No, thanks
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={onAccept}
          >
            Yes, please!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;