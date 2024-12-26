import React, { use } from 'react'
import { useState, useEffect } from 'react'

const AnimatedSquare = ({toggleAnimation, top_loc = "20rem", left_loc ="33%", large_width="8rem", small_width="6rem"}) => {
  const [width, setWidth] = useState("8rem");

  

  const [squareProperties, setSquareProperties] = useState({
      rotate: '45deg',
      scale: 4,
      translate: '0px,0px'
    });


    useEffect(() => {
      const updateWidth = () => {
        if (window.innerWidth <= 640) {
          setWidth(small_width);
        } else {
          setWidth(large_width);
        }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);

      const intervalId = setInterval(() => {
        setSquareProperties((prev) => ({
          rotate: prev.rotate === '45deg' ? '35deg' : '45deg',
          scale: prev.scale === 4 ? 3 : 4,
          translate: (prev.translate === '0px,0px') ? '40px,0px' : '0px,0px'
        }));
      }, 3000);
  
      return () => {
        clearInterval(intervalId);
        window.removeEventListener("resize", updateWidth);
      };
    }, []);


  return (
    <span
        id ="animated-square"
        className={`absolute 
          ${toggleAnimation ? 'my-other-color-primary' : 'my-color-primary'}
          `}
        style={{
          top: top_loc,
          width: width,
          height: width,
          left: left_loc,
          transform: `rotate(${squareProperties.rotate}) scale(${squareProperties.scale}) translate(${squareProperties.translate})`,
          opacity: 0.5,
          zIndex: -1,
          transition: 'transform 1s ease, background-color 1s ease',
        }}
      ></span>
  )
}

export default AnimatedSquare