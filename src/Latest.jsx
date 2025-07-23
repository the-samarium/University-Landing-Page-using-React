import React from 'react'

const Latest = () => {
  return (
    <div className="container grid grid-rows-1 grid-cols-2 gap-2 w-full bg-slate-100 h-[424px] border-2 mt-2 p-2 dark:bg-slate-800">
        <div className="right border-2 dark:bg-slate-950 dark:text-white">
            <div className="head flex justify-center text-center bg-black text-white text-xl font-bold italic underline dark:bg-slate-500 dark:text-black">Notices</div>

        </div>
        <div className="left border-2 dark:bg-slate-950 dark:text-white">
             <div className="head flex justify-center text-center bg-black text-white text-xl font-bold italic underline dark:bg-slate-500 dark:text-black">Latest in campus</div>

        </div>

    </div>
  )
}

export default Latest