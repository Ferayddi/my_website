"use client";
import React, { useState, useEffect } from "react";
import DownArrowIcon from "./DownArrowIcon.jsx";
import UpArrowIcon from "./UpArrowIcon.jsx";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [switchColor, setSwitchColor] = useState(false);

  const toggleNavbar = () => {
    setIsOpened(!isOpened);
    setIsRotated(false); // Reset rotation when clicked
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpened) {
        setIsRotated((prev) => !prev);
      }
    }, 3000); // Rotate every 3 seconds if not opened

    const colorInterval = setInterval(() => {
      setSwitchColor((prev) => !prev);
    }, 3000); // Switch color every 3 seconds

    return () => {
      clearInterval(interval);
      clearInterval(colorInterval);
    };
  }, [isOpened]);

  return (
    <div className="relative w-full">
      {/* Background layer */}
      {/*<div className="absolute inset-0 flex flex-row">*/}
        {/* Have half the row being white background */}
        {/* <div className="w-1/2 h-full bg-slate-100 opacity-50"></div>*/}
        {/* Have the other half the row being bg-slate-200 color */}
        {/*<div className="w-1/2 h-full bg-slate-100 opacity-50"></div> */ }
      {/*</div>*/}
      {/* Rotating block */}
      <div
        className={` relative flex w-full flex-col items-center justify-center py-4 
        ${
          isRotated ? "rotate-0" : "rotate-0"
        } 
        ${isOpened ? "opacity-100" : "opacity-50"} 
        ${
          switchColor ? "bg-white" : "my-color-primary"
        }`}
        style={{ transition: 'background-color 2s ease-in' }}

      >
        <div
          style={{
            opacity: isOpened ? "0" : "1",
          }}
        >
          <p className="text-center font-thin text-black">Click me</p>
        </div>

        <div
          id="navbarContent"
          className="transition-height ease-in duration-700 overflow-hidden"
          style={{
            maxHeight: isOpened ? "500px" : "0",
          }}
        >
          {/* Your expandable content here */}
          <div className="grid grid-cols-12 gap-4 w-full">
            {/* Section 1 */}
            <div className="col-span-12 md:col-span-4 p-4">
              <p className="font-semibold">About me</p>
              <ul className="list-disc pl-5">
              <li><a href='/' className="hover:underline">Introduction</a></li>
                <li><a href='/aboutme/motivation' className="hover:underline">Motivation</a></li>
                <li><a href='/aboutme/background' className="hover:underline">Background</a></li>
                <li><a href='/aboutme/academics' className="hover:underline">Academics</a></li>
                <li><a href='/aboutme/personality' className="hover:underline">Personality results</a></li>
                <li><a href='/aboutme/resume' className="hover:underline">Resume</a></li>
              </ul>
            </div>
            {/* Section 2 */}
            <div className="col-span-12 md:col-span-4 p-4">
              <a className="font-semibold">Project portfolio</a>
              <ul className="list-disc pl-5">
                <li><a href='/projects' className="hover:underline">All</a></li>
              </ul>
            </div>
            {/* Section 3 */}
            <div className="col-span-12 md:col-span-4 p-4">
              <a className="font-semibold">Research portfolio</a>
              <ul className="list-disc pl-5">
                <li><a href='/research' className="hover:underline">All</a></li>
              </ul>
            </div>
            {/* Section 4 */}
            <div className="col-span-12 md:col-span-4 p-4">
              <a className="font-semibold">Skills</a>
              <ul className="list-disc pl-5">
                <li><a href='/skills' className="hover:underline">All</a></li>
              </ul>
            </div>
            {/* Section 5 */}
            <div className="col-span-12 md:col-span-4 p-4">
              <a className="font-semibold">Contact me</a>
              <ul className="list-disc pl-5">
                <li><a href='/contactme' className="hover:underline">Contact form</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block" onClick={toggleNavbar}>
          {isOpened ? <UpArrowIcon strokeColor="#94a3b8" /> : <DownArrowIcon strokeColor="#94a3b8" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;