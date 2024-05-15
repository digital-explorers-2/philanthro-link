import React from 'react'

export default function HeroSection() {
  return (
        <div className="flex justify-center items-center flex-col h-screen relative">
        <h1 className="text-5xl font-bold text-center font-dm-sans text-primary">
            Happiness comes from your action.
        </h1>
        <p className="mt-4 font-dm-sans text-base font-normal leading-5 text-left">
            Be a part of the breakthrough and make someone's dream come true.
        </p>
        <img src="/hero-bg.jpg" alt="Hero" className="absolute -z-20 object-cover w-screen h-screen brightness-50"/>
        <div className="flex mt-4">
            <button className="w-[166px] h-[55px] px-8 gap-2 bg-primary rounded-full text-white">
            Donate Now
            </button>
            <div className="w-4"></div> {/* Spacer between buttons */}
            <button className="w-[152px] h-[55px] px-8 gap-2 bg-transparent rounded-full border border-gray-300 text-gray-800">
            About Us
            </button>
        </div>
        </div>
  )
}
