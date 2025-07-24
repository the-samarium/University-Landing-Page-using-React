import { useState } from 'react'
import Navbar from './components/Navbar'
import Collect from './components/Collect'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className='flex flex-col justify-center items-center dark:bg-slate-800'>
      <Navbar />
      <div className="flex justify-center items-center">
        <Outlet /> {/* Child route content appears here */}
      </div>
      <Footer /> 
    </div>
  )
}

export default App
