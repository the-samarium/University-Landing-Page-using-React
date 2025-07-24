import React from 'react';

const programs = [
    {
        name: 'Bachelor of Technology (B.Tech)',
        display: 'B.Tech',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque inventore quia beatae voluptatem quidem reiciendis dolorem necessitatibus soluta, asperiores, blanditiis unde aut quo, voluptatum culpa.',
        colorClass: 'bg-green-500'
    },
    {
        name: 'Master of Technology (M.Tech)',
        display: 'M.Tech',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque inventore quia beatae voluptatem quidem reiciendis dolorem necessitatibus soluta, asperiores, blanditiis unde aut quo, voluptatum culpa.',
        colorClass: 'bg-red-500'
    },
    {
        name: 'Diploma in Engineering',
        display: 'Diploma',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque inventore quia beatae voluptatem quidem reiciendis dolorem necessitatibus soluta, asperiores, blanditiis unde aut quo, voluptatum culpa.',
        colorClass: 'bg-yellow-500'
    },
    {
        name: 'Doctor of Philosophy (Ph.D.)',
        display: 'PhD',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque inventore quia beatae voluptatem quidem reiciendis dolorem necessitatibus soluta, asperiores, blanditiis unde aut quo, voluptatum culpa.',
        colorClass: 'bg-gray-500'
    }
];

const ProgramsPage = () => {
    return (
        <div className="container mx-auto dark:bg-slate-950 border m-2 rounded-lg mt-4 w-11/12 md:w-3/4 p-6 space-y-8">
            
            <div className=" pb-2">
                <h1 className="text-3xl font-bold text-gray-950 border-b dark:text-white dark:border-gray-300 pb-2">Programs Offered</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Explore our range of undergraduate, postgraduate, and doctoral programs.</p>
            </div>

            {programs.map((program, index) => (
                <div
                    key={program.name}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4 rounded-lg shadow-md bg-white dark:bg-slate-900 dark:text-white ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                >
                    <div className={`w-full h-60 object-cover rounded-md shadow-md flex items-center justify-center ${program.colorClass}`}>
                        <h1 className="text-3xl font-bold text-white drop-shadow">{program.display}</h1>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{program.name}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{program.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgramsPage;
