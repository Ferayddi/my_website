"use client";
import React, { useState, useEffect } from 'react';
import { useAnimation } from "./AnimationContext";
import AnimatedSquare from "./AnimatedSquare";

const MainWrapper = ({ children }) => {
  const {toggleAnimation} = useAnimation();
  //console.log(toggleAnimation);
  return (
    <main
      className={`flex-grow flex flex-col z-0 overflow-x-clip w-full
        ${toggleAnimation ? "my-other-color-secondary" : "my-color-secondary"}
        `}
      style={{ transition: "background-color 1s ease-in" }}
    >
      <AnimatedSquare toggleAnimation={toggleAnimation} />

      <AnimatedSquare top_loc={'25rem'} toggleAnimation={toggleAnimation} />

      <AnimatedSquare large_width='6rem' small_width='3rem' left_loc='90%' top_loc={'55rem'} toggleAnimation={toggleAnimation} />
      <AnimatedSquare large_width='6rem' small_width='3rem' left_loc='90%' top_loc={'60rem'} toggleAnimation={toggleAnimation} />
      {/* Pass toggleAnimation to all child components */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child)
      )}
    </main>
  );
}

export default MainWrapper;