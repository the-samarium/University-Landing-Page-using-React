import React from 'react'

const Admissions = () => {
  return (
    <div className="container flex flex-row gap-2 w-full bg-slate-100 h-[424px] border-2 mt-2 p-2 dark:bg-slate-950 dark:text-white">
      
      
        <div className="box w-1/2 h-full border-2 p-4 flex flex-col gap-6 text-center">
        <div><p className='text-2xl font-bold underline'>Admissions</p></div>
        <p className="text-sm font-semibold">
          Click a section on the left to learn more about our admissions process.
        </p>
      </div>



      <div className="box w-1/2 h-full grid grid-cols-1 grid-rows-4 gap-1 p-2">
        <div className="bg-gray-300 border flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition">
          Eligibility
        </div>
        <div className="bg-gray-300 border flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition">
          Documents
        </div>
        <div className="bg-gray-300 border flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition">
          Fee Structure
        </div>
        <div className="bg-gray-300 border flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition">
         Check previous year cutoff
        </div>
      </div>

      
      
    </div>
  );
};

export default Admissions;
