import React from 'react'
import { useState } from "react";
//Adding feature to change text in right column 
const Programs = () => {
    const [selectedBox, setSelectedBox] = useState(null);

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
                    <div key={num} className="bg-gray-300 rounded-md border flex items-center justify-center cursor-pointer hover:bg-gray-400 transition" >
                        {num}
                    </div>
                ))}
            </div>


            <div className="box w-1/2 h-full border-slate-400 rounded-md flex flex-col items-center justify-center gap-7">
                <p className="text-center">
                    Know more about courses offered
                </p>
                <a href="#" className='bg-red-500 text-black p-2 text-center rounded-sm shadow-md w-44'>More</a>
            </div>
        </div>

    )
}

export default Programs