import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 md:px-20">
      {/* Overlay Decoration */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Grow Your App Business with <span className="text-yellow-300">AdMob</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Manage your apps, analyze performance, and boost your revenue using AdMob tools.
        </p>
        <button className="bg-white text-purple-700 hover:bg-yellow-400 hover:text-black font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
          Get Started Now
        </button>
      </div>

    
    </div>
  );
};

export default Banner;
