import React from 'react'

const UpArrowIcon = ({ strokeColor = "#000000" }) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12L12 8M12 8L16 12M12 8V20M4 4H20" 
    stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default UpArrowIcon
