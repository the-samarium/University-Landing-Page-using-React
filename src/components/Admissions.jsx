import React from 'react'

const Admissions = () => {
  return (
    <div  className="container flex flex-row gap-2 w-full bg-slate-50 shadow-md h-[424px] border-t border-slate-950 dark:border-white mt-2 p-2 dark:bg-slate-950 dark:text-white">
      
      
        <div className="box w-1/2 h-full p-4 flex flex-col gap-6 text-center">
            <div><p className='text-2xl font-bold underline'>Admissions</p></div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to our admissions portal! We offer a streamlined application process designed 
                to help you join our academic community. Our admissions team is committed to guiding 
                you through every step, from eligibility assessment to document submission and fee 
                structure details. Start your journey towards academic excellence with us.
            </p>
            <div className="mt-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Click a section on the left to learn more about our admissions process.
                </p>
            </div>
        </div>



      <div className="box w-1/2 h-full grid grid-cols-1 grid-rows-4 gap-1 p-2">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg  flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition-all duration-300 hover:scale-95">
          Eligibility
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600  shadow-lg flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition-all duration-300 hover:scale-95">
          Documents
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600  shadow-lg flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition-all duration-300 hover:scale-95">
          Fee Structure
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600  shadow-lg flex items-center justify-center font-medium text-black rounded-sm cursor-pointer hover:bg-gray-400 transition-all duration-300 hover:scale-95">
         Check previous year cutoff
        </div>
      </div>

      
      
    </div>
  );
};

export default Admissions;
