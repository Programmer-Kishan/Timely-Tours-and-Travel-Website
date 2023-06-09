import React from 'react';

const MainPage = () => {
  return (
    <>
        <div className="w-[97%] h-[95vh] mx-auto mt-[20px] rounded-lg shadow-[2px_2px_15px_#a4a4a4] bg-gradient-to-r from-[#6cc4a158] to-[#03C98858] flex flex-wrap">
            <div className="w-1/2 h-1/2 opacity-30 rounded-tl-lg bg-cover bg-no-repeat bg-[url('../src/images/australia.jpg')]"></div>
            <div className="w-1/2 h-1/2 opacity-30 rounded-tr-lg bg-cover bg-no-repeat bg-[url('../src/images/rajasthan.webp')]"></div>
            <div className="w-1/2 h-1/2 opacity-30 rounded-bl-lg bg-cover bg-no-repeat bg-[url('../src/images/kerala.jpg')]"></div>
            <div className="w-1/2 h-1/2 opacity-30 rounded-br-lg bg-cover bg-no-repeat bg-[url('../src/images/london.jpg')]"></div>
        </div>
        <div>
            <ul className="absolute w-full flex justify-evenly top-16 text-white text-lg font-bold font-linkStyle">
                <li className='cursor-pointer transition-all duration-500 ease-in hover:scale-[1.2] hover:drop-shadow-[0_0_7px_#000000]'><a>Home</a></li>
                <li className='cursor-pointer transition-all duration-500 ease-in hover:scale-[1.2] hover:drop-shadow-[0_0_7px_#000000]'><a>About Us</a></li>
                <li className='cursor-pointer transition-all duration-500 ease-in hover:scale-[1.2] hover:drop-shadow-[0_0_7px_#000000]'><a>Service</a></li>
                <li className='cursor-pointer transition-all duration-500 ease-in hover:scale-[1.2] hover:drop-shadow-[0_0_7px_#000000]'><a>Contact Us</a></li>
            </ul>
            <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-center font-heading text-white">
                <h1 className='underline text-8xl mb-10'>Timely Tours</h1>
                <h3 className='text-4xl'>Explore at proper time</h3>
            </div>
        </div>
    </>
  )
}

export default MainPage