import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
    { name: '2019', placements: 60 },
    { name: '2020', placements: 23 },
    { name: '2021', placements: 90 },
    { name: '2022', placements: 55 },
    { name: '2023', placements: 75 }
];

const Chart = () => {
    return (
        <div className="w-full h-full flex justify-center flex-col items-center">

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="placements" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
            <p className="text-xs mt-2 text-gray-600 italic dark:text-white">
                Overall placements
            </p>
        </div>
    )
}

export default Chart