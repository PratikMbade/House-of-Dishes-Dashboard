import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='bg-black border-b text-white border-zinc-600 py-4 fixed top-0 left-0 px-4 md:px-8 w-screen flex items-center md:justify-around'>
      <h1 >
        <a href='/'><img src="./assets/LOGO-text.png" alt="logo" /></a>
      </h1>

      <ul className='hidden md:flex md:items-center pr-16 h-full '>
            <li key='home' className=' text-lg font-primary px-4 h-full  transition-all duration-300   py-2 hover:text-amber-500'>
            <NavLink exact to='/' >home</NavLink>
            </li>
            <li key='dashboard' className=' text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-amber-500'>
            <NavLink exact to='/dashboard'>dashboard</NavLink>
            </li>
            <li key='dashboard' className=' text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-amber-500'>
            <NavLink exact to='/contact'>contact</NavLink>
            </li>
      </ul>
          
          <ul className='hidden md:flex md:items-center pr-16 h-full'>
            <li key='login' className=' pr-4 '>
            <Link className='text-lg text-white font-primary px-4 h-full  transition-all duration-300 border border-amber-500 rounded-full hover:bg-[#ff91005a]  py-2 ' to='/login'>login</Link>
            </li>
            <li key='signup' >
            <Link className='text-lg text-white font-primary px-4 h-full  transition-all duration-300 border border-amber-500 rounded-full hover:bg-[#ff91005a]  py-2 ' to='/signup'>signup</Link>
            </li>
          </ul>
           
               
           
    </header>
  )
}

export default Navbar