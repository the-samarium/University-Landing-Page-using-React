import React from 'react';

const AdmissionsPage = () => {
  return (
    <div className="container w-3/4 p-4 m-4 border rounded-lg bg-white dark:bg-slate-950 dark:text-white space-y-6">



      {/* Title */}
      <div className="w-full border-b border-gray-300 dark:border-slate-700 pb-2">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admissions</h1>
      </div>
      {/* Hero Section */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-slate-900 rounded-lg p-6 shadow">
        <div className="space-y-3 md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Join Our Academic Community</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Discover a transformative learning experience. Explore programs, learn about the process, and take the first step toward your future.
          </p>
          
          <a href="/form.pdf" download>
             <button className="mt-3 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
          </a>
        </div>
        <div className="md:w-1/3 h-3/4 mt-4 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Admissions"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Intro */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to our admissions section. Here, you'll find all the necessary information regarding the application process, eligibility, and deadlines for various courses offered by the institution.
        </p>
      </div>

      {/* Eligibility Criteria */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Eligibility Criteria</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Minimum 50% in 12th grade for undergraduate programs.</li>
          <li>Relevant bachelor's degree for postgraduate admissions.</li>
          <li>Entrance exam score.</li>
        </ul>
      </div>

      {/* Admission Procedure */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Admission Procedure</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Register on the official government portal.</li>
          <li>Fill out the online application form.</li>
          <li>Upload required documents.</li>
          <li>Pay the application fee.</li>
          <li>Attend counseling or entrance exam (if needed).</li>
        </ol>
      </div>

      {/* Important Dates */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Important Dates</h2>
        <ul className="text-blue-500 dark:text-red-300 space-y-1">
          <li><strong>Application Start:</strong> May 1, 2025</li>
          <li><strong>Application Deadline:</strong> July 15, 2025</li>
          <li><strong>Entrance Exam:</strong> August 1, 2025</li>
          <li><strong>Counseling:</strong> August 20–25, 2025</li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Contact Admissions Office</h2>
        <p className="text-blue-700 dark:text-blue-500">
          Email: admissions@college.edu <br />
          Phone: +91 12345 67890 <br />
          Address: 123 College Road, City, State, India
        </p>
      </div>

      {/* Application Status Placeholder */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-1 mb-4">
          Check Application Status
        </h2>
        <div className="h-40 bg-gray-200 dark:bg-slate-950 border-dashed border-2 border-gray-400 dark:border-slate-700 rounded flex items-center justify-center text-gray-500 dark:text-gray-400">
          Application status portal coming soon...
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
