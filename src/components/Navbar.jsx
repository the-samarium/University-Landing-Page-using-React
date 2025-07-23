import React from 'react'
import { useState, useEffect } from 'react';
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [darkMode]);


    return (
        <>
            <div className="container flex flex-row bg-white items-center justify-between p-2 shadow-md sticky top-0 z-50 dark:bg-slate-900 dark:text-white">
                <div className='flex flex-row  p-2 justify-center items-center gap-3'>
                    <span className="logo font-bold text-lg ">Vishwakarma Group</span>
                    <button
                        onClick={() => setDarkMode(prev => !prev)}
                        
                    >
                        {darkMode ? (
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4V2m0 20v-2m4.24-14.83l1.41-1.41M6.34 17.66l-1.41 1.41M20 12h2M2 12H4m14.83 4.24l1.41 1.41M6.34 6.34L4.93 4.93M12 18a6 6 0 100-12 6 6 0 000 12z" />
                            </svg>
                        ) : (
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 14A9 9 0 0121 12.79z" />
                            </svg>
                        )}
                    </button>


                </div>

                <div className="options flex flex-row items-center gap-8">
                    <ul className="flex flex-row">
                        <a href="#"><li className="mx-3">Courses</li></a>
                        <a href="#"><li className="mx-3">About</li></a>
                        <a href="#"><li className="mx-3">Contact</li></a>
                    </ul>

                    <div className="btns flex flex-row items-center gap-2">
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm shadow-md w-24">Login</button>
                        <button className="bg-gray-400 text-black px-4 py-2 rounded-sm shadow-md w-24">SignUp</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar