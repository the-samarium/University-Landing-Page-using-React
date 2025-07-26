import React from 'react'
import Chart from '../charts/AreaChart';
import Barchart from '../charts/Barchart';
import Linechart from '../charts/Linechart';

const TPO = () => {
  // Sample company data - you can replace with actual company data
  const companies = [
    { name: "Google", logo: "G" },
    { name: "Microsoft", logo: "M" },
    { name: "Amazon", logo: "A" },
    { name: "Apple", logo: "A" },
    { name: "Meta", logo: "M" },
    { name: "IBM", logo: "I" },
    { name: "Intel", logo: "I" },
    { name: "Cisco", logo: "C" },
    { name: "Salesforce", logo: "S" }
  ];
  return (
    <div className="container w-3/4 p-4 m-4 border-2 rounded-lg bg-white dark:bg-slate-950 dark:text-white space-y-6">
      
      {/* Title */}
      <div className="w-full border-b border-gray-300 dark:border-slate-700 pb-2">
        <h1 className="text-3xl font-bold text-gray-950 dark:text-white">Training & Placement Office</h1>
      </div>
      
     
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white mb-3">TPO Goal</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Training & Placement Office is dedicated to bridging the gap between academia and industry. 
          We strive to provide comprehensive career guidance, skill development programs, and placement 
          opportunities to ensure our students are well-prepared for successful careers in their chosen fields. 
          Our goal is to achieve 100% placement for eligible students through strategic partnerships with 
          leading companies and continuous skill enhancement initiatives.
        </p>
      </div>

      {/* Placement Stats Section */}
     <div className="space-y-4">
  <h2 className="text-2xl font-bold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-2">
    Placement Statistics
  </h2>

  <div className="border border-gray-300 dark:border-slate-700 rounded-lg p-8 bg-gray-50 dark:bg-slate-950 shadow-sm">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="h-56 flex items-center justify-center text-gray-500 dark:text-gray-400">
        <Chart />
      </div>
      <div className="h-56 flex items-center justify-center text-gray-500 dark:text-gray-400">
        <Barchart />
      </div>
      <div className="h-56 flex items-center justify-center text-gray-500 dark:text-gray-400 sm:col-span-2">
        <Linechart />
      </div>
    </div>
  </div>
</div>

      {/* Our Recruiters Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-2">
          Our Recruiters
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="border border-gray-300 dark:border-slate-700 rounded-lg p-4 bg-gray-50 dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                {company.logo}
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white text-center">
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Internship Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-2">
          Internship Opportunities
        </h2>
        <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Internships provide students with valuable industry experience and practical exposure to real-world 
            challenges. Our internship program is designed to complement academic learning with hands-on 
            experience in professional environments.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Important Information
            </h3>
            <p className="text-blue-700 dark:text-blue-300">
              Each department has a separate internship section. Students are advised to contact their 
              respective department internship coordinator for updates on internship opportunities, 
              application procedures, and placement details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TPO