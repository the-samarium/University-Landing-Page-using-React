import React from 'react'

const Hero = () => {
    return (
        <div className="container w-full h-[424px] border-2 rounded-sm">
            <div className="image bg-slate-100 flex flex-col w-full h-full justify-center items-end">

                <div className="heroText border-2  p-2  mr-4">
                    <p className='font-extrabold text-6xl'>Hero Text</p>
                </div>
                <div className="subText border-2   mr-4">
                     <p className='font-light text-xl'>Sub-Text</p>
                </div>
            </div>
        </div>
    )
}

export default Hero