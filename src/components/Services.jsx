import React from 'react';

const Services = ({ services }) => {
  return (
    
<section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-gray-700 to-gray-500 pt-16">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center text-white">
          Services
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <li
              key={service._id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                    {service.name}
                  </p>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <p className="text-gray-600 mb-4">{service.charge}</p>
                </div>
                <div className="relative mx-auto h-32 w-32 sm:h-48 sm:w-48 mb-4">
                  <img
                    src={service.image.url}
                    alt={service.name}
                    className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg"
                  />
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;