"use client";
import React, { useState, useEffect } from 'react';
import { useAnimation } from "./AnimationContext";

const MainWrapper = ({ children }) => {
  const {toggleAnimation} = useAnimation();
  //console.log(toggleAnimation);
  return (
    <main
      className={`flex-grow z-0 
        ${toggleAnimation ? "my-other-color-secondary" : "my-color-secondary"}
        `}
      style={{ transition: "background-color 2s ease-in" }}
    >
      {/* Pass toggleAnimation to all child components */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child)
      )}
    </main>
  );
}

export default MainWrapper;