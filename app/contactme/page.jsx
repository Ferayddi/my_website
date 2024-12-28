// File: app/contactme/page.jsx
'use client'
import React, { useState } from 'react';
import AnimatedSquare from '../AnimatedSquare';
import { useAnimation } from '../AnimationContext';

const ContactPage = () => {
  const { toggleAnimation } = useAnimation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const sendContactForm = () => {
    // Implement the logic to send the contact form data to your email
    // This could involve using an email API like SendGrid, Mailgun, or a backend service
    console.log('Contact form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-4 flex-grow flex flex-col justify-center relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

      <form 
      className="mx-auto bg-white p-4 md:p-28 rounded-lg shadow-md w-full"
      style={{ maxWidth: '800px' }}
      >
        <div className="mb-4">
          <label className="block my-text-primary text-xl mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border rounded-lg"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block my-text-primary text-xl mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border rounded-lg"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block my-text-primary text-xl mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-2 border rounded-lg"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
          />
        </div>
        <button
          className="w-full bg-slate-400 text-white p-2 rounded-lg text-xl"
          type="button"
          onClick={sendContactForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;