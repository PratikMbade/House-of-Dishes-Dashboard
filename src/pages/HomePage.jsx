import React from 'react'

import { VscDebugStart } from "react-icons/vsc";
const HomePage = () => {
  return (
    <div className='bg-black min-h-screen text-white flex md:gap-16 items-center justify-center font-primary px-8'>
      <div className='left-section w-full md:w-1/2'>
      <h2 className='font-semibold text-2xl md:text-4xl py-8'><p className='text-amber-500 inline pr-2'>Welcome</p> 
      to House of Dishes <p>Dashboard Chef</p> </h2>

      <p className='description text-lg md:text-xl pb-8 '>Discover endless recipes and harness AI guidance for seamless cooking on our website. Elevate your kitchen game today!</p>

      <button className='border rounded-full px-8 py-2 text-xl font-medium hover:bg-[#ff91005a] border-amber-500 mr-8 my-8 transition-all duration-300'>Get Started</button>
      <button className='border rounded-full px-8 py-2 text-xl font-medium hover:bg-zinc-950 trasition-all duration-300'>Create Dish<VscDebugStart className='inline text-amber-500' /></button>
      </div>

      <div>
        <img className='hidden md:flex w-[400px] h-auto' src="./assets/LOGO.png" alt="Logo" />
      </div>
      
    </div>
  )
}

export default HomePage