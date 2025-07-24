import React from "react";

const Count = () => {
  return (
    <div
      className="w-full bg-cover bg-center text-white bg-slate-600 mt-4 mb-4 border-t border-slate-950 dark:border-white border-b rounded-md py-16"
      style={{
        backgroundImage: "url('/path-to-your-image/7c283391-a4d7-4933-8bbd-f8b31396fcdc.png')",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-around text-center px-4">
        {/* Students */}
        <div>
          <h2 className="text-4xl font-bold">10,000+</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto my-2 relative">
            <div className="absolute w-3 h-1 bg-red-700 left-0 rounded-full"></div>
            <div className="absolute w-3 h-1 bg-red-700 right-0 rounded-full"></div>
          </div>
          <p className="text-sm tracking-wide">STUDENTS</p>
        </div>

        {/* Faculty */}
        <div>
          <h2 className="text-4xl font-bold">600+</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto my-2 relative">
            <div className="absolute w-3 h-1 bg-red-700 left-0 rounded-full"></div>
            <div className="absolute w-3 h-1 bg-red-700 right-0 rounded-full"></div>
          </div>
          <p className="text-sm tracking-wide">FACULTY</p>
        </div>

        {/* Staff */}
        <div>
          <h2 className="text-4xl font-bold">700+</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto my-2 relative">
            <div className="absolute w-3 h-1 bg-red-700 left-0 rounded-full"></div>
            <div className="absolute w-3 h-1 bg-red-700 right-0 rounded-full"></div>
          </div>
          <p className="text-sm tracking-wide">STAFF</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
