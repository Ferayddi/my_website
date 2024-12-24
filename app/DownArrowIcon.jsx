import React from 'react';

const DownArrowIcon = ({ strokeColor= "#000000" }) => {
    return (
        <svg  width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16L12 20M12 20L16 16M12 20V8M4 4H20" 
        stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default DownArrowIcon