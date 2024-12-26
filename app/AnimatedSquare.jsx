import React, { use } from 'react'
import { useState, useEffect } from 'react'

const AnimatedSquare = ({toggleAnimation}) => {
  const [squareProperties, setSquareProperties] = useState({
      rotate: '45deg',
      scale: 4,
      translate: '0px,0px'
    });

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSquareProperties((prev) => ({
          rotate: prev.rotate === '45deg' ? '35deg' : '45deg',
          scale: prev.scale === 4 ? 3 : 4,
          translate: (prev.translate === '0px,0px') ? '40px,0px' : '0px,0px'
        }));
      }, 3000);
  
  
      return () => {
        clearInterval(intervalId);
  
      };
    }, []);


  return (
    <span
        id ="animated-square"
        className={`w-32 h-32 md:w-52 md:h-52 absolute top-80 left-1/3 
          ${toggleAnimation ? 'my-other-color-primary' : 'my-color-primary'}
          `}
        style={{
          transform: `rotate(${squareProperties.rotate}) scale(${squareProperties.scale}) translate(${squareProperties.translate})`,
          opacity: 0.5,
          zIndex: -1,
          transition: 'transform 2s ease, background-color 2s ease',
        }}
      ></span>
  )
}

export default AnimatedSquare