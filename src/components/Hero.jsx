import React from 'react';

const Hero = () => {
  return (
    <div
      className="w-full h-[424px] rounded-lg shadow-md bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/54/d5/7d/54d57d87f7fd99d604ab0fb6fb5485d1.jpg')",
      }}
    >
      <div className="flex flex-col w-full h-full justify-center items-end bg-black bg-opacity-30">
        <div className="heroText p-2 mr-4">
          <p className="font-extrabold text-6xl text-white">Hero Text</p>
        </div>
        <div className="subText mr-4">
          <p className="font-light text-xl text-white">Sub-Text</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
