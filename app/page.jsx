'use client';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Modal from './InteractionModal';

export default function Home() {
  const [descriptionsVisible, setdescriptionsVisible] = useState(false);
  const [letterReset, setLetterReset] = useState(false);
  const [squareProperties, setSquareProperties] = useState({
    rotate: '45deg',
    scale: 4,
    translate: '0px,0px'
  });

  const [nameLetterProperties, setNameLetterProperties] = useState({
    nameLetter1: {
      position: 'static',
      fontSize: '96px',
      textTransform: null,
      scale: 1,
      opacity: 1
    },
    nameLetter2: {
      position: 'static',
      fontSize: '96px',
      textTransform: null,
      scale: 1,
      opacity: 1
    },
    nameLetter3: {
      position: 'static',
      fontSize: '96px',
      textTransform: null,
      scale: 1,
      opacity: 1
    },
    nameLetter4: {
      position: 'static',
      fontSize: '96px',
      textTransform: null,
      scale: 1,
      opacity: 1
    }
  });

  //const square = useRef(null);
  //Letters in the name
  const nameLetterRef1 = useRef(null);
  const nameLetterRef2 = useRef(null);
  const nameLetterRef3 = useRef(null);
  const nameLetterRef4 = useRef(null);

  //Placed letters:
  const letterRef1 = useRef(null);
  const letterRef2 = useRef(null);
  const letterRef3 = useRef(null);
  const letterRef4 = useRef(null);

  const [transforms, setTransforms] = useState({
    nameLetter1: { x: 0, y: 0 },
    nameLetter2: { x: 0, y: 0 },
    nameLetter3: { x: 0, y: 0 },
    nameLetter4: { x: 0, y: 0 },
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAcceptModal = () => {
    setIsModalOpen(false);
    // Implement the logic to start the interactive presentation
    startInteractivePresentation();
  };

  const startInteractivePresentation = () => {
    // Play upbeat music
    const audio = new Audio('/path/to/upbeat-music.mp3');
    audio.play();

    // Dynamically show each section of the application
    // This could involve scrolling to each section, highlighting elements, etc.
    // Implement your presentation logic here
  };

  const moveLettersAsync = async () => {
    await sleep(1000);

    //Obtain the x and y locations of all the nameLetterRefs
    const nameLetterRef1Location = nameLetterRef1.current.getBoundingClientRect();
    const nameLetterRef2Location = nameLetterRef2.current.getBoundingClientRect();
    const nameLetterRef3Location = nameLetterRef3.current.getBoundingClientRect();
    const nameLetterRef4Location = nameLetterRef4.current.getBoundingClientRect();


    //Obtain the x and y location of all the letterRefs
    const letterRef1Location = letterRef1.current.getBoundingClientRect();
    const letterRef2Location = letterRef2.current.getBoundingClientRect();
    const letterRef3Location = letterRef3.current.getBoundingClientRect();
    const letterRef4Location = letterRef4.current.getBoundingClientRect();


    //Clone the nameLetterRefs
    const nameLetterRef1Clone = nameLetterRef1.current.cloneNode(true);
    const nameLetterRef2Clone = nameLetterRef2.current.cloneNode(true);
    const nameLetterRef3Clone = nameLetterRef3.current.cloneNode(true);
    const nameLetterRef4Clone = nameLetterRef4.current.cloneNode(true);

    //Remove the ref,position, left and top from the cloned nacmeLetterRefs
    nameLetterRef1Clone.removeAttribute("ref"); nameLetterRef2Clone.removeAttribute("ref"); nameLetterRef3Clone.removeAttribute("ref"); nameLetterRef4Clone.removeAttribute("ref");
    nameLetterRef1Clone.removeAttribute("left"); nameLetterRef2Clone.removeAttribute("left"); nameLetterRef3Clone.removeAttribute("left"); nameLetterRef4Clone.removeAttribute("left");
    nameLetterRef1Clone.removeAttribute("top"); nameLetterRef2Clone.removeAttribute("top"); nameLetterRef3Clone.removeAttribute("top"); nameLetterRef4Clone.removeAttribute("top");
    nameLetterRef1Clone.removeAttribute("position"); nameLetterRef2Clone.removeAttribute("position"); nameLetterRef3Clone.removeAttribute("position"); nameLetterRef4Clone.removeAttribute("position");
    nameLetterRef1Clone.removeAttribute("style"); nameLetterRef2Clone.removeAttribute("style"); nameLetterRef3Clone.removeAttribute("style"); nameLetterRef4Clone.removeAttribute("style");


    setTransforms({
      nameLetter1: {
        x: letterRef1Location.x - nameLetterRef1Location.x,
        y: letterRef1Location.y - nameLetterRef1Location.y + (letterRef1Location.height - nameLetterRef1Location.height)/2,
      },
      nameLetter2: {
        x: letterRef2Location.x - nameLetterRef2Location.x,
        y: letterRef2Location.y - nameLetterRef2Location.y + (letterRef2Location.height - nameLetterRef2Location.height)/2,
      },
      nameLetter3: {
        x: letterRef3Location.x - nameLetterRef3Location.x,
        y: letterRef3Location.y - nameLetterRef3Location.y + (letterRef3Location.height - nameLetterRef3Location.height)/2,
      },
      nameLetter4: {
        x: letterRef4Location.x - nameLetterRef4Location.x,
        y: letterRef4Location.y - nameLetterRef4Location.y + (letterRef4Location.height - nameLetterRef4Location.height)/2,
      },
    });
  
    //Set the position of the nameLetterRefs to the position of the letterRefs
    await sleep(1500);
    setNameLetterProperties((prev) => ({
      ...prev,
      nameLetter1: {
        ...prev.nameLetter1,
        scale: 0.5,
        opacity: 0
      },
      nameLetter2: {
        ...prev.nameLetter2,
        scale: 0.5,
        opacity: 0
      },
      nameLetter3: {
        ...prev.nameLetter3,
        scale: 0.5,
        opacity: 0
      },
      nameLetter4: {
        ...prev.nameLetter4,
        scale: 0.5,
        opacity: 0
      }
    }));

    setdescriptionsVisible(true);
    await sleep(2000);
    setLetterReset(true);
  }

  useEffect(() => {
    moveLettersAsync();

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
    <main className="flex min-h-screen flex-col items-around justify-start p-24 relative">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onAccept={handleAcceptModal} />
      <p className="text-8xl font-thin">
        <span className="font-semibold">F</span>re
        <span
          ref={nameLetterRef1}
          style={{
            fontSize: nameLetterProperties.nameLetter1.fontSize,
            position: 'relative',
            textTransform: nameLetterProperties.nameLetter1.textTransform,
            opacity: nameLetterProperties.nameLetter1.opacity,
            transform: `translate(${transforms.nameLetter1.x}px, ${transforms.nameLetter1.y}px) scale(${nameLetterProperties.nameLetter1.scale})`,
            transition: 'transform 1s ease, font-size 2s ease, scale 2s ease, opacity 2s ease',
            display: 'inline-block',
            ...(letterReset && { all: 'unset', display: 'inline-block' }),
          }}
        >
          d
        </span>
        <span
          ref={nameLetterRef2}
          style={{
            fontSize: nameLetterProperties.nameLetter2.fontSize,
            position: 'relative',
            textTransform: nameLetterProperties.nameLetter2.textTransform,
            opacity: nameLetterProperties.nameLetter2.opacity,
            transform: `translate(${transforms.nameLetter2.x}px, ${transforms.nameLetter2.y}px) scale(${nameLetterProperties.nameLetter2.scale})`,
            transition: 'transform 1s ease, font-size 2s ease, scale 2s ease, opacity 2s ease',
            display: 'inline-block',
            ...(letterReset && { all: 'unset', display: 'inline-block' }),
          }}
        >
          e
        </span>
        r
        <span
          ref={nameLetterRef3}
          style={{
            fontSize: nameLetterProperties.nameLetter3.fontSize,
            position: 'relative',
            textTransform: nameLetterProperties.nameLetter3.textTransform,
            opacity: nameLetterProperties.nameLetter3.opacity,
            transform: `translate(${transforms.nameLetter3.x}px, ${transforms.nameLetter3.y}px) scale(${nameLetterProperties.nameLetter3.scale})`,
            transition: 'transform 1s ease, font-size 2s ease, scale 2s ease, opacity 2s ease',
            display: 'inline-block',
            ...(letterReset && { all: 'unset', display: 'inline-block' }),
          }}
        >
          i
        </span>
        <span
          ref={nameLetterRef4}
          style={{
            fontSize: nameLetterProperties.nameLetter4.fontSize,
            position: 'relative',
            textTransform: nameLetterProperties.nameLetter4.textTransform,
            opacity: nameLetterProperties.nameLetter4.opacity,
            transform: `translate(${transforms.nameLetter4.x}px, ${transforms.nameLetter4.y}px) scale(${nameLetterProperties.nameLetter4.scale})`,
            transition: 'transform 1s ease, font-size 2s ease, scale 2s ease, opacity 2s ease',
            display: 'inline-block',
            ...(letterReset && { all: 'unset', display: 'inline-block' }),
          }}
        >
          c
        </span>
        &nbsp;<span className="font-semibold">O</span>rtega
      </p>

      <div className="w-full py-6">
        <hr />
      </div>
      <div
        className="flex flex-row justify-around gap-4 text-lg"
        style={{ opacity: descriptionsVisible ? 1 : 0, transition: 'opacity 2s ease' }}
      >
        <p>
          <span className="font-semibold" ref={letterRef1}>
            D
          </span>
          evelopper
        </p>
        <p>
          <span className="font-semibold" ref={letterRef2}>
            E
          </span>
          ntrepreneur
        </p>
        <p>
          <span className="font-semibold" ref={letterRef3}>
            I
          </span>
          nquisitor
        </p>
        <p>
          <span className="font-semibold" ref={letterRef4}>
            C
          </span>
          ommunicator
        </p>
      </div>

      <div className="py-6"></div>
      <span
        className="w-52 h-52 bg-slate-200 absolute top-80 left-1/3"
        style={{
          transform: `rotate(${squareProperties.rotate}) scale(${squareProperties.scale}) translate(${squareProperties.translate})`,
          opacity: 0.5,
          zIndex: -1,
          transition: 'transform 2s ease',
        }}
      ></span>

      <div className="w-full py-6">
        <hr />
      </div>
      <p className="text-5xl font-thin">Welcome</p>
      <div className="py-6"></div>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xl text-justify font-light">
            I am a computer science graduate, with a passion for technology and innovation. I aim to make my skills
            useful. In a world where people aim to have the best job, or in a society where corporations redefines the
            working mindset, an entrepreneur is like a bird&apos;s egg. I have met so many smart people, who fails to
            envision how their life will span, and I had to learn from great minds that think intelligence can be judged
            by a set of answers.
          </p>
        </div>
      </div>
    </main>
  );
}