import React from 'react'
import {skillsPage} from '/assets/constants'

const page = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-6 h-6 ${i <= rating ? 'text-gray-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.732 9.21l8.2-1.192z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
      {/* Hard Skills Section */}
      <h2 className="text-3xl font-semibold mb-4">Hard Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
        {skillsPage.hard_skills.map((skill) => (
          <div key={skill.title} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
            <div className="flex">{renderStars(skill.rating)}</div>
          </div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <h2 className="text-3xl font-semibold mb-4">Soft Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skillsPage.soft_skills.map((skill) => (
          <div key={skill.title} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
            <div className="flex">{renderStars(skill.rating)}</div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default page