import React from 'react'

const About = () => {
  return (
    <div className="container bg-slate-100 flex flex-col justify-center items-center w-full h-[232px] border-2 rounded-sm mt-2 p-2 dark:bg-slate-950 dark:text-white">
        <p className='text-2xl font-bold underline p-3'>About Us</p>
        <div className="text w-3/4 h-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vitae corrupti deleniti ullam voluptatibus tempora, non, exercitationem atque voluptates ut facilis distinctio itaque.
        </div>
        <div className="Links flex flex-row gap-4 p-4">
            <a href="#" className='bg-blue-500 text-black p-2 text-center rounded-sm shadow-md w-36'>Know more</a>
            <a href="#" className='bg-red-500 text-black p-2 text-center rounded-sm shadow-md w-36'>Explore Programs</a>
        </div>
    </div>
  )
}

export default About