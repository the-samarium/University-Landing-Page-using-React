import React from 'react';

const AboutPage = () => {
  return (
    <div className="container w-3/4 p-4 m-4 border rounded-lg bg-white dark:bg-slate-950 dark:text-white space-y-6">
      
      {/* Title */}
      <div className="w-full border-b border-gray-300 dark:border-slate-700 pb-2">
        <h1 className="text-3xl font-bold text-gray-950 dark:text-white">About Us</h1>
      </div>

      {/* About Section */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eveniet
          adipisci eligendi rerum dolores explicabo exercitationem possimus eaque
          repellat nesciunt...
        </p>
      </div>

      {/* Mission Section */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white mb-2">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam
          quaerat expedita inventore dolor aut aspernatur...
        </p>
      </div>

      {/*  Directors */}
      <div>
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 mb-2 pb-1">
          Board of Directors
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 p-4 rounded shadow text-gray-950 dark:text-white"
            >
              Director {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Director's View */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-1">
          Director's View
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-slate-700 p-4 rounded text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque odio dolor, tenetur nemo consequatur nam maiores molestias vero provident soluta dicta libero officiis asperiores fuga blanditiis! Necessitatibus tempora earum iusto laboriosam. Ullam dignissimos voluptas rerum, quidem vero ipsum voluptates voluptatum saepe, porro fuga tempore id esse unde doloremque libero optio similique sit cumque cupiditate. Sapiente nisi ad ratione dignissimos autem! Itaque a cupiditate soluta nesciunt veniam. 
          </div>
          <div className="bg-slate-700 border border-gray-300 dark:border-slate-600 rounded h-[220px]"></div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-1 mb-4">
          College Timeline
        </h2>
        <div className="h-40 bg-gray-200 dark:bg-slate-900 border-dashed border-2 border-gray-400 dark:border-slate-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-400">
          Timeline Placeholder
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
