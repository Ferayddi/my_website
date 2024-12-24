// File: app/projects/page.jsx
import React from 'react';
import { project_portfolio_page } from '/assets/constants';

const ProjectPage = () => {
  return (
    <div className="container mx-auto p-4 flex-grow">
      <h1 className="text-4xl font-bold mb-8 text-center">Project Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project_portfolio_page.projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{project.type}</p>
            {project.awards && (
              <p className="text-sm text-green-500 mb-4 font-semibold">Awards: {project.awards}</p>
            )}
            <p className="mb-4">{project.description}</p>
            <p className="text-sm text-gray-700 mb-4">{project.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
            {project.techniques && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techniques.map((technique, techniqueIndex) => (
                  <span key={techniqueIndex} className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {technique}
                  </span>
                ))}
              </div>
            )}
            {project.video_link && (
              <div className="relative pb-9/16 mb-4" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={project.video_link}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;