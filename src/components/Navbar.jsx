import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, } from 'react-router-dom';
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
            <div className="container flex min-w-full flex-row bg-white items-center justify-between p-2 shadow-md sticky top-0 z-50 dark:bg-slate-900 dark:text-white">
                <div className='flex flex-row  p-2 justify-center items-center gap-3'>
                    <span className="logo font-bold text-lg ">Vishwakarma Group</span>
                    <button className=' p-1 shadow-xl bg-green-500 w-8 rounded-full border' onClick={() => setDarkMode(prev => !prev)}>
                        {darkMode ? '◐' : '◑'}
                    </button>

                </div>

                <div className="options flex flex-row items-center gap-8">
                    <ul className="flex flex-row">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `mx-2 p-2 ${isActive ? 'text-blue-500 font-semibold p-2  rounded-xl' : ''}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/programs"
                            className={({ isActive }) => `mx-2 p-2 ${isActive ? 'text-blue-500 font-semibold p-2  rounded-xl' : ''}`}
                        >
                            Courses
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) => `mx-2 p-2 ${isActive ? 'text-blue-500 font-semibold p-2  rounded-xl' : ''}`}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/admission"
                            className={({ isActive }) => `mx-2 p-2 ${isActive ? 'text-blue-500 font-semibold p-2  rounded-xl' : ''}`}
                        >
                            Admissions
                        </NavLink>
                        <NavLink
                            to="/tpo"
                            className={({ isActive }) => `mx-2 p-2 ${isActive ? 'text-blue-500 font-semibold p-2  rounded-xl' : ''}`}
                        >
                            TPO
                        </NavLink>
                        <NavLink
                            to="/campus"
                            className={({ isActive }) => `mx-2 p-2 ${isActive ? 'text-blue-500 font-semibold p-2  rounded-xl' : ''}`}
                        >
                            On-Campus
                        </NavLink>
                    </ul>

                    <div className="btns flex flex-row items-center gap-2">
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm shadow-md w-24">Student</button>
                        <button className="bg-gray-400 text-black px-4 py-2 rounded-sm shadow-md w-24">Admin</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar