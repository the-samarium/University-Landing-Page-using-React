import React from 'react'
import { useState } from "react";
//Adding feature to change text in right column 
import { useNavigate } from 'react-router';
 
const Programs = () => {
    const [selectedBox, setSelectedBox] = useState(null);
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/programs');
  }
    const contentMap = {
        1: "Content for Box 1",
        2: "Content for Box 2",
        3: "Content for Box 3",
        4: "Content for Box 4",
    };
    return (
        <div  className="container flex flex-row gap-2 w-full bg-slate-50 shadow-md h-[424px] border-b border-slate-950 dark:border-white mt-2 p-2 dark:bg-slate-950 dark:text-white">
            <div className="box w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-2">
                {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-all duration-300 hover:scale-95" >
                        {num}
                    </div>
                ))}
            </div>


            <div className="box w-1/2 h-full border-slate-400 rounded-md flex flex-col items-center justify-center gap-7 p-6">
                <h3 className="text-xl font-bold underline text-gray-800 dark:text-white mb-4">
                    Explore Our Programs
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Discover our comprehensive range of undergraduate, postgraduate, and doctoral programs 
                    designed to prepare you for successful careers in engineering and technology. Our 
                    curriculum combines theoretical knowledge with practical applications, industry 
                    partnerships, and cutting-edge research opportunities.
                </p>
               <button onClick={handleClick} className='bg-blue-500 text-black p-2 text-center rounded-sm shadow-md w-36'>Know more</button>
            </div>
        </div>

    )
}

export default Programs
