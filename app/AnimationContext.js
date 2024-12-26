"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AnimationContext = createContext();

// Create the provider
export const AnimationProvider = ({ children }) => {
  const [toggleAnimation, setToggleAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleAnimation((prev) => !prev); // Toggle the value every 2 seconds
    }, 3000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <AnimationContext.Provider value={{ toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Custom hook to consume the context
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};


/*
export default function AnimationProvider({ children }) {
  const [toggleAnimation, setToggleAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleAnimation((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Pass the toggle state to all children via React.cloneElement
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { toggleAnimation })
      )}
    </>
  );
}
*/