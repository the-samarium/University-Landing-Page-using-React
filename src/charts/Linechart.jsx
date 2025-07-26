import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2018', companies: 45 },
  { year: '2019', companies: 60 },
  { year: '2020', companies: 50 },
  { year: '2021', companies: 70 },
  { year: '2022', companies: 90 },
  { year: '2023', companies: 120 },
  { year: '2024', companies: 150 },
];

export default function Linechart() {
  return (
    <div className="w-3/4 h-[230px] m-5 mt-4 p-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: 'Companies', position: 'insideBottomRight', offset: -10 }} />
          <YAxis type="category" dataKey="year" label={{ value: 'Year', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line dataKey="companies" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-xs mt-2 text-gray-600 italic">Companies visited per year</p>
    </div>
  );
}
