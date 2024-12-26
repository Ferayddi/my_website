"use client";
import React from 'react'
import { motivationPage } from '/assets/constants';
import { FaHeart, FaBook, FaMoneyBillWave } from 'react-icons/fa';
import { useAnimation } from '/app/AnimationContext';
import AnimatedSquare from '/app/AnimatedSquare';

const page = () => {
  const { toggleAnimation } = useAnimation();

  return (
    <div className="px-16 flex-grow flex flex-col justify-center relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Motivation</h1>
      <AnimatedSquare toggleAnimation={toggleAnimation} />
      <p className="text-3xl font-light mb-8 text-center italic">
      &quot;The only way to do great work is to love what you do.&quot; - Steve Jobs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaHeart className="text-red-500 text-6xl mb-4" />
          <p className="text-center">{motivationPage.motivation}</p>
        </div>
        {/* Section 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaBook className="text-blue-500 text-6xl mb-4" />
          <p className="text-center">Fulfill my thirst for knowledge and competency. I enjoy the process of gaining competency in varied fields of computer science.</p>
        </div>
        {/* Section 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaMoneyBillWave className="text-green-500 text-6xl mb-4" />
          <p className="text-center">The second aspect is money. I need money to support my ambitions and lifestyle.</p>
        </div>
      </div>
    </div>
  );
};

export default page