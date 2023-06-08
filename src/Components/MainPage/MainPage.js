import React from 'react'

const MainPage = () => {
  return (
    <div className="w-[97%] h-[95vh] mx-auto mt-[20px] rounded-lg shadow-[2px_2px_15px_#a4a4a4] bg-gradient-to-r from-[#6cc4a158] to-[#03C98858] flex flex-wrap">
        <div className="w-1/2 h-1/2 opacity-30 rounded-tl-lg bg-cover bg-no-repeat bg-[url('../src/images/australia.jpg')]"></div>
        <div className="w-1/2 h-1/2 opacity-30 rounded-tr-lg bg-cover bg-no-repeat bg-[url('../src/images/rajasthan.webp')]"></div>
        <div className="w-1/2 h-1/2 opacity-30 rounded-bl-lg bg-cover bg-no-repeat bg-[url('../src/images/kerala.jpg')]"></div>
        <div className="w-1/2 h-1/2 opacity-30 rounded-br-lg bg-cover bg-no-repeat bg-[url('../src/images/london.jpg')]"></div>
    </div>
  )
}

export default MainPage