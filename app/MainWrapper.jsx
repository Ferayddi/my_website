"use client";
import React, { useState, useEffect } from 'react';
import { useAnimation } from "./AnimationContext";
import AnimatedSquare from "./AnimatedSquare";

const MainWrapper = ({ children }) => {
  const {toggleAnimation} = useAnimation();
  //console.log(toggleAnimation);
  return (
    <main
      className={`flex-grow flex flex-col z-0 
        ${toggleAnimation ? "my-other-color-secondary" : "my-color-secondary"}
        `}
      style={{ transition: "background-color 2s ease-in" }}
    >
      <AnimatedSquare toggleAnimation={toggleAnimation} />
      <div className="py-2"></div>
      <AnimatedSquare top_loc={'25rem'} toggleAnimation={toggleAnimation} />
      {/* Pass toggleAnimation to all child components */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child)
      )}
    </main>
  );
}

export default MainWrapper;