import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='bg-black border-b text-white border-zinc-600 z-20 py-4 sticky top-0 left-0 px-4 md:px-8 w-screen flex items-center md:justify-around'>
      <h1 >
        <a href='/'><img src="./assets/LOGO-text.png" alt="logo" /></a>
      </h1>

      <ul className='hidden md:flex md:items-center h-full '>
            <li key='home' className=' text-lg font-primary px-4 h-full  transition-all duration-300   py-2 hover:text-amber-500'>
            <NavLink  to='/' >Home</NavLink>
            </li>
            <li key='dashboard' className=' text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-amber-500'>
            <NavLink  to='/dashboard'>Dashboard</NavLink>
            </li>
            <li key='contact' className=' text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-amber-500'>
            <NavLink  to='/contact'>Contact</NavLink>
            </li>
      </ul>
          
          <ul className='hidden md:flex md:items-center  h-full'>
            <li key='login' className=' pr-4 '>
            <Link className='text-lg text-white font-primary px-4 h-full  transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 ' to='/login'>Login</Link>
            </li>
            <li key='signup' >
            <Link className='text-lg text-white font-primary px-4 h-full  transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 ' to='/signup'>Signup</Link>
            </li>
          </ul>
           
               
           
    </header>
  )
}

export default Navbar