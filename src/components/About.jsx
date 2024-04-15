import React from 'react';

const About = ({ abouts }) => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-gray-900 to-gray-700 pt-16">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">About</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Description:</h3>
              <p className="text-base sm:text-lg text-gray-600">{abouts?.description}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Quote:</h3>
              <p className="text-base sm:text-lg text-gray-600 italic">{abouts?.quote}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Sub Title:</h3>
              <p className="text-base sm:text-lg text-gray-600">{abouts?.subTitle}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Contact Information</h3>
              <div className="grid grid-cols-2 gap-2">
                <label className="text-xl font-semibold text-gray-800">Address:</label>
                <p className="text-base sm:text-lg text-gray-600">{abouts?.address}</p>
                <label className="text-xl font-semibold text-gray-800">Email:</label>
                <p className="text-base sm:text-lg text-gray-600">{abouts?.contactEmail}</p>
                <label className="text-xl font-semibold text-gray-800">Phone:</label>
                <p className="text-base sm:text-lg text-gray-600">{abouts?.phoneNumber}</p>
                <label className="text-xl font-semibold text-gray-800">Experience Year:</label>
                <p className="text-base sm:text-lg text-gray-600">{abouts?.exp_year}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={abouts.alternateAvatars[0].url}
                className="mt-8 h-48 w-48 object-cover rounded-full shadow-lg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

