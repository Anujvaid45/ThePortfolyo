// import React from 'react';

// const Skills = ({ skills }) => {
//     return (
//         <section className="skills-section">
//             <div className="container">
//                 <h2>Skills</h2>
//                 <ul>
//                     {skills?.map((skill) => (
//                         <li key={skill.id}>
//                             <span>{skill.name}</span>
//                             <hr />
//                             <span>{skill.sequence}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// };

// export default Skills;

import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section className="py-12 px-4 sm:px-8 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">Skills</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills?.map((skill) => (
                        <li key={skill.id} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-lg sm:text-xl font-semibold">{skill.sequence}</p>
                                <p className="text-lg sm:text-xl font-semibold">{skill.name}</p>
                                <p className="text-lg sm:text-xl">{skill.percentage}</p>
                            </div>
                            <img
                                src={skill.image.url}
                                alt={skill.percentage}
                                className="mx-auto h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;

