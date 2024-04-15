import React from 'react';

const Hero = ({ user }) => {

  return (
    <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-black to-gray-800 pt-16">

      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
          {user?.about?.name}
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          {user?.about?.title}
        </p>
        <div className="relative mx-auto w-32 h-32 sm:w-48 sm:h-48 mb-8">
          <img
            src={user?.about.avatar.url}
            alt=""
            className="rounded-full object-cover w-full h-full border-4 border-white"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-25"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
