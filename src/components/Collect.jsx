import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Programs from './Programs'
import Admissions from './Admissions'
import Footer from './Footer'
import Latest from './Latest'
import Count from './Count'
import AboutPage from '../pages/AboutPage'
import AdmissionsPage from '../pages/AdmissionsPage'
import ProgramsPage from '../pages/ProgramsPage'
import CampusLife from '../pages/CampusLife'

const Collect = () => {
    
  return (
    <div className="container w-3/4 h-auto flex flex-col rounded-lg justify-center items-center mt-4 mb-4 p-4 border border-gray-300 dark:bg-slate-950 bg-white">
        
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