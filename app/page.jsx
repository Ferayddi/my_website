'use client';
import Image from 'next/image';
import Me1 from '/assets/images/Me1.png';
import { homePage } from '/assets/constants';
import { useAnimation } from "./AnimationContext";
import AnimatedSquare from './AnimatedSquare';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


import { useEffect, useRef, useState } from "react";
// Remove the import for InteractionModal
// import Modal from './InteractionModal';

export default function Home () {
  const { toggleAnimation } = useAnimation();
  const [descriptionsVisible, setdescriptionsVisible] = useState(false);
  const [letterReset, setLetterReset] = useState(false);
  

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

  // Remove the state for the modal
  // const [isModalOpen, setIsModalOpen] = useState(true);

  // Remove the modal handlers
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleAcceptModal = () => {
  //   setIsModalOpen(false);
  //   // Implement the logic to start the interactive presentation
  //   startInteractivePresentation();
  // };

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

  }, []);

  return (
    <main 
    className="flex min-h-screen flex-col w-full items-center justify-start p-4 sm:p-8 md:p-24 relative overflow-x-hidden"
    >
      {/* Remove the Modal component */}
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} onAccept={handleAcceptModal} /> */}
      <p className="text-4xl sm:text-6xl md:text-8xl font-thin text-wrap ">
        <span className="font-semibold">F</span>re
        <span
          ref={nameLetterRef1}
          className="text-4xl sm:text-6xl md:text-8xl"
          style={{
            //fontSize: nameLetterProperties.nameLetter1.fontSize,
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
          className="text-4xl sm:text-6xl md:text-8xl"
          style={{
            
            //fontSize: nameLetterProperties.nameLetter2.fontSize,
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
          className="text-4xl sm:text-6xl md:text-8xl"
          style={{
            //fontSize: nameLetterProperties.nameLetter3.fontSize,
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
          className="text-4xl sm:text-6xl md:text-8xl"
          style={{
            //fontSize: nameLetterProperties.nameLetter4.fontSize,
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
      
      <p className="text-sm sm:text-lg">{homePage.home_quote}</p>

      <div className="w-full py-6">
        <hr />
      </div>
      <div
        className="flex flex-row justify-around gap-4 text-lg flex-wrap"
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

      <div className="py-0 md:py-4"> </div>

   
      <div className="w-full grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex flex-col items-start justify-center">
          <p className="text-4xl md:text-5xl font-thin">Welcome</p>
          <div className="py-6"></div>
          <p className="text-2xl text-justify font-thin">
            {homePage.paragraph_1}
          </p>
        </div>
        <div className="div col-span-12 md:col-span-1 py-6"></div>
        <div className="div md:col-span-5 col-span-12 flex justify-center items-start">
          <div className="rounded-full overflow-hidden border-4 my-border-primary" style={{ maxWidth: '25rem', maxHeight: '30rem' }}>
            <Image className="object-fit" src={Me1} alt="Me" layout="responsive" />
          </div>
        </div>
        
      </div>
      
      <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }}></div>


      <div className="flex w-full flex-col items-start md:items-end">
        <p className="text-5xl font-thin">My passion</p>
        <div className="py-6"></div>
        <div className="w-full grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-2xl text-justify font-thin">{homePage.paragraph_2}</p>
          </div>
          
        </div>
        
      </div>
    </main>
  );
}