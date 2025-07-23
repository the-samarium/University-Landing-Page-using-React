import { useState } from 'react'
import Navbar from './components/navbar'
import Collect from './components/Collect'
import Footer from './components/Footer'

function App() {


  return (
    <div className='flex flex-col justify-center items-center dark:bg-slate-800'>
      <Navbar />
      <Collect />
      <Footer /> 
    </div>
  )
}

export default App
