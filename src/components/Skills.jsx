import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-gray-800 to-gray-600 pt-16">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-white text-center">
          Skills
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills?.map((skill) => (
            <li key={skill._id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {skill.name}
                </p>
                <div className="w-full bg-gray-300 h-4 rounded-full mb-2">
                  <div
                    className="bg-indigo-600 h-4 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {skill.percentage}% Completed
                </p>
              </div>
              <img
                src={skill.image.url}
                alt={skill.name}
                className="mx-auto h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full shadow-md"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
