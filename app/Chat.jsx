'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AvatarMe from '/assets/images/AvatarMe.png';
import { FaTimes } from 'react-icons/fa';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendToPhone = async () => {
    if (!name || !message) {
      alert('Please enter both your name and a message.');
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      const res = await fetch('https://send-telegram-message-895105839858.us-central1.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) {
        throw new Error(`Failed to send message. Status: ${res.status}`);
      }

      const result = await res.text();
      setResponse('Message sent successfully!');
      console.log('Response:', result);
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Chat Icon & Toggle */}
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

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-80 z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Send a Message</h2>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>

          {/* Name Input */}
          <input
            type="text"
            className="w-full p-2 border rounded-lg mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />

          {/* Message Textarea */}
          <textarea
            className="w-full p-2 border rounded-lg mb-2"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />

          {/* Submit Button */}
          <button
            className="w-full bg-slate-400 text-white p-2 rounded-lg"
            onClick={sendToPhone}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>

          {/* Response Feedback */}
          {response && (
            <p className={`mt-2 text-sm ${response.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
              {response}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Chat;
