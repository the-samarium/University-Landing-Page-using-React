import React from 'react'
import { useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  }
  return (

    <div className="container bg-slate-50 flex flex-col justify-center items-center w-full h-[232px] border-b border-slate-950 dark:border-white mt-2 p-2 dark:bg-slate-950 dark:text-white">
      <p className='text-2xl font-bold underline p-3'>About Us</p>
      <div className="text w-3/4 h-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae corrupti deleniti ullam voluptatibus tempora, non, exercitationem atque voluptates ut facilis distinctio itaque.
      </div>
      <div className="Links flex flex-row gap-4 p-4">
        <button onClick={handleClick} className='bg-blue-500 text-black p-2 text-center rounded-sm shadow-md w-36'>Know more</button>

      </div>
    </div>
  )
}

export default About