// import React from 'react'

// const Services = ({ services }) => {
//   return (
//     <section className="services-section">
//             <div className="container">
//                 <h2>Services</h2>
//                 <ul>
//                     {services?.map((service) => (
//                         <li key={service.id}>
//                             <span>{service.name}</span>
//                             <hr />
//                             <span>{service.desc}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//   )
// }

// export default Services

import React from 'react';

const Services = ({ services }) => {
    return (
        <section className="py-12 px-4 sm:px-8 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">Services</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services?.map((service) => (
                        <li key={service.id} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-lg sm:text-xl font-semibold mb-2">{service.name}</p>
                                    <p className="text-lg sm:text-xl">{service.desc}</p>
                                </div>
                                <img
                                    src={service.image.url}
                                    alt={service.name}
                                    className="mx-auto h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-full"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;
