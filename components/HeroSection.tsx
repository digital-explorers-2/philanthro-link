import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center font-dm-sans text-primary mb-4 md:mb-8">
        <span>Happiness</span>
        <span className="text-white"> comes from</span>
         <br />
        <span>your action.</span>
      </h1>
      <p className="text-base md:text-lg font-normal text-center text-white mb-4 md:mb-8">
        Be a part of the breakthrough and make someone's dream come true.
      </p>
      <img src="/hero-bg.jpg" alt="Hero" className="absolute inset-0 object-cover w-full h-full brightness-50 z-[-1]" />
      <div className="flex flex-row mt-4"> {/* Always use flex-row for horizontal alignment */}
        <button className="w-[180px] h-[45px] md:w-[200px] md:h-[55px] px-4 md:px-8 bg-primary rounded-full text-white mb-2 md:mr-4 md:mb-0 mr-4">
          Donate now
        </button>
        <button className="w-[180px] h-[45px] md:w-[200px] md:h-[55px] px-4 md:px-8 bg-transparent rounded-full border hover:bg-primary border-gray-300 text-white">
          About us
        </button>
      </div>
    </div>
  );
}
