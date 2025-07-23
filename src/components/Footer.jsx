import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full border-t-4 border-slate-900">
      {/* Top decorative bar */}
      <div className='w-full flex justify-center items-center'>
        <hr className="border-t border-gray-300 my-4 w-11/12" />
      </div>
      

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Institution Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-300">Vishwakarma Institutes</h2>
          <p className="text-gray-300">
            Leading the way in technical education and research. Empowering students through innovation, collaboration, and practical excellence.
          </p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Vishwakarma Institutes. All rights reserved.</p>
        </div>

        {/* Right Column: Contact + Social */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-indigo-200">Contact Us</h3>
            <p className="text-gray-300"> New York, America</p>
            <p className="text-gray-300">Phone: +xxxxxxxxxx</p>
            <p className="text-gray-300">Email: info@abc.edu.mail</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-200">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
