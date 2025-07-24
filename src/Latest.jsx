import React from 'react'

const Latest = () => {
  return (
    <div className="container grid grid-rows-1 grid-cols-2 gap-2 w-full border-b shadow-md border-slate-950 dark:border-white bg-slate-50 h-[424px] mt-2 p-2 dark:bg-slate-950">
        <div className="right bg-white  dark:bg-slate-900 dark:text-white border border-slate-600 rounded-lg">
            <div className="head flex justify-center text-center bg-black text-white text-xl font-bold italic rounded-t-lg underline dark:bg-slate-500 dark:text-black">Notices</div>

        </div>
        <div className="left bg-white  dark:bg-slate-900 shadow-md dark:text-white border rounded-lg border-slate-600">
             <div className="head flex justify-center text-center bg-black text-white text-xl font-bold italic rounded-t-lg underline dark:bg-slate-500 dark:text-black">Latest in campus</div>
              
        </div>

    </div>
  )
}

export default Latest