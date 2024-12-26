// File: app/Chat.jsx

//use client
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import AvatarMe from '/assets/images/AvatarMe.png';
import { FaTimes } from 'react-icons/fa';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendToPhone = () => {
    // Implement the logic to send the message to your phone
    // This could involve using an SMS API like Twilio or a backend service
    console.log('Message sent to phone:', message);
    setMessage('');
  };

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 flex flex-col items-center cursor-pointer"
        onClick={toggleChat}
      >
        
        {!isOpen && (
          <div className="ml-2 p-2 bg-white rounded-lg shadow-lg">
            <p className="text-center">Are you liking my portfolio?</p> 
            <p className="text-center">Send me a message on my phone!</p>
          </div>
        )}
        <div className="w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden hover-vibrate">
          <Image src={AvatarMe} alt="Avatar" layout="responsive" objectFit="cover" />
        </div>
      </div>
      {isOpen && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-80 z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Send a Message</h2>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>
          <textarea
            className="w-full p-2 border rounded-lg mb-2"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button
            className="w-full bg-slate-400 text-white p-2 rounded-lg"
            onClick={sendToPhone}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;