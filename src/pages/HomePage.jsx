import React from 'react'
import { Link } from 'react-router-dom';

import { VscDebugStart } from "react-icons/vsc";
const HomePage = () => {
  return (
    <div className=' min-h-screen py-20 text-white flex flex-col-reverse lg:flex-row md:gap-16 md:items-center justify-center font-primary px-8'>
      
      <div className='left-section relative w-full md:w-1/2'>
      <div className='w-[300px] h-[300px] z-1 rounded-full absolute top-[-40px] left-[-40px] blur-3xl  bg-[#fbdd451c]  '></div>
      <h2 className='font-semibold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8'><p className='text-amber-500 inline pr-2'>Welcome</p> 
      to House of Dishes <p>Dashboard Chef </p> </h2>
      
      <p className='description text-lg md:text-xl lg:text-2xl pb-8 relative'>Discover endless recipes and harness AI guidance for seamless cooking on our website. Elevate your kitchen game today !</p>

      <Link to='/signup'>
      <button className="get-started group relative px-8 py-3 overflow-hidden font-medium rounded-xl border border-yellow-800  text-xl md:text-2xl shadow-2xl shadow-[#ff910025] mr-8 my-8">
      <div className="absolute inset-0 w-0 bg-[#ff910032] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className=" text-white">Get Started</span>
      </button>
      </Link>
      
      <Link to='/dashboard'>
      <button className='border rounded-xl px-8 py-3 text-xl md:text-2xl font-medium bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden  border-zinc-700   bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms]'>Create Dish<VscDebugStart className='inline text-amber-500' /></button>
      </Link>
      </div>

      <div>
        <img className=' md:flex w-[300px] md:w-[500px] h-auto ' src="./assets/LOGO.png" alt="Logo" />
      </div>
      
    </div>
  )
}

export default HomePage