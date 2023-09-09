import React from 'react'

import { VscDebugStart } from "react-icons/vsc";
const HomePage = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col lg:flex-row md:gap-16 items-center justify-center font-primary px-8'>
      <div className='left-section w-full md:w-1/2'>
      <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl py-8'><p className='text-amber-500 inline pr-2'>Welcome</p> 
      to House of Dishes <p>Dashboard Chef </p> </h2>

      <p className='description text-lg md:text-xl lg:text-2xl pb-8 '>Discover endless recipes and harness AI guidance for seamless cooking on our website. Elevate your kitchen game today !</p>

      
      <button class="group relative px-8 py-3 overflow-hidden font-medium rounded-xl border border-yellow-800  text-xl md:text-2xl shadow mr-8 my-8">
      <div class="absolute inset-0 w-0 bg-[#ff910032] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span class=" text-white">Get Started</span>
      </button>
      <button className='border rounded-xl px-8 py-3 text-xl md:text-2xl font-medium bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden  border-zinc-800 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms]'>Create Dish<VscDebugStart className='inline text-amber-500' /></button>
      </div>

      <div>
        <img className='hidden md:flex w-[500px] h-auto ' src="./assets/LOGO.png" alt="Logo" />
      </div>
      
    </div>
  )
}

export default HomePage