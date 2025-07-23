import React from 'react'
import Navbar from './navbar'
import Hero from './Hero'
import About from './About'
import Programs from './Programs'
import Admissions from './Admissions'
import Footer from './Footer'
import Latest from '../Latest'
import Count from './Count'

const Collect = () => {
    
  return (
    <div className="container w-[90%] h-auto m-2 p-2 ">
        
        <Hero/>
        <Latest/>
        <About/>
        <Programs/>
        <Count/>
        <Admissions/>
    </div>
  )
}

export default Collect