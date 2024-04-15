import React from 'react';

const Projects = ({ projects, onProjectClick }) => {
  return (
    
<section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-black to-gray-700 pt-16">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-white text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => onProjectClick(project)}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">Sequence: {project.sequence}</p>
              <div className="flex items-center justify-between">
                <a
                  href={project.githuburl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-3 py-1 bg-green-200 text-green-800 rounded-full hover:bg-green-300 transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.liveurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-3 py-1 bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300 transition duration-300"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;