import React from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'CS', last: 4000, older: 2400 },
  { name: 'IT', last: 3000, older: 1398 },
  { name: 'EnTC', last: 2000, older: 9800 },
  { name: 'Mech', last: 2780, older: 3908 },
  { name: 'Civil', last: 1890, older: 4800 },
  { name: 'Chemical', last: 2390, older: 3800 },
  { name: 'AIDS', last: 3490, older: 4300 },
];

const Barchart = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center">
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="older" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="last" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

     
      <p className="text-xs mt-2 text-gray-600 italic  dark:text-white">
        Branch wise comparison (Previous vs Last year)
      </p>
    </div>
  )
}

export default Barchart;
