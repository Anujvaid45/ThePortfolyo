// import React from 'react';

// const Projects = ({ projects }) => {
//     return (
//         <section className="projects-section">
//             <div className="container">
//                 <h2>Projects</h2>
//                 <ul>
//                     {projects?.map((project) => (
//                         <li key={project.id}>
//                             <span>{project.title}</span>
//                             <hr />
//                             <span>{project.sequence}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// };

// export default Projects;


import React from 'react';

const Projects = ({ projects, onProjectClick }) => {
    return (
        <section className="py-12 px-4 sm:px-8">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects?.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md p-4 cursor-pointer" onClick={() => onProjectClick(project)}>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600">Sequence:{project.sequence}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
