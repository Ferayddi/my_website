"use client";
import React, { useState, useEffect } from 'react';
import { useAnimation } from "./AnimationContext";

const Footer = () => {
  const {toggleAnimation} = useAnimation();

  return (
    <footer 
    className={`min-h-[200px] flex flex-col justify-center items-center text-center 
      ${toggleAnimation ? 'bg-white' : 'my-color-primary'}
      `}
    style={{ transition: 'background-color 2s ease-in' }}
    >
      <div className="flex flex-row">
        <p>Email:&nbsp;</p>
        <a href="mailto:ortegafred2501@gmail.com">ortegafred2501@gmail.com</a>
      </div>
      <p>Phone number: (+66) 661346438</p>
      <p>© 2024 Frederic Ortega. All rights reserved.</p>
    </footer>
  );
}

export default Footer;