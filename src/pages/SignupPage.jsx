import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const SignupPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className='px-4 sm:px-4 pb-16'>
      <form className='signup  flex flex-col  justify-center z-10 items-center text-white font-primary' onSubmit={handleSubmit}>
      <h3 className='text-3xl font-semibold  mt-8  text-center  py-2'>Create a new account</h3>
      <p className='text-center mb-8 text-base text-zinc-300'>Enter the fields below to get started</p>
      
      
        <div className=' bg-gradient-to-b from-zinc-600 to-black p-0.5  rounded-lg'>

        <div className=' bg-gradient-to-b relative from-zinc-950 to-black backdrop-filter backdrop-blur-xl h-full w-full items-center p-4  back md:p-16 rounded-lg flex flex-col justify-center'>
        <div className='w-[300px] h-[300px]  rounded-full absolute top-[-40px] left-[-40px] blur-3xl z-[-10] bg-[#1439b329]  '></div>
        
        
        <div className='flex flex-col md:flex-row md:gap-4'>
        <div className='my-4'>
        <label>First Name</label>
        <input type="text"
        className='block w-[300px] py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='First Name'
        />
        </div>
        <div className='my-4'>
        <label>Last Name</label>
        <input type="text"
        className='block w-[300px] py-2 placeholder:italic px-4 my-2 rounded-lg border border-zinc-600  bg-black'
        placeholder='Last Name'
        />
        </div>
        </div>

        <div className='flex md:gap-4 flex-col md:flex-row min-w-full'>
        <div className='my-4 min-w-full'>
        <label>Email</label>
        <input type="email"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='abc@gmail.com'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        />
        </div>
        </div>


        <div className='flex md:gap-4 flex-col md:flex-row'>

        <div className='my-4'>
        <label>Password</label>
        <input type="password"
        className='block w-[300px] py-2 px-4 placeholder:italic my-2 border border-zinc-600 rounded-lg bg-black'
        />
        </div>
        <div className='my-4'>
        <label>Confirm Password</label>
        <input type="password"
        className='block w-[300px] py-2 px-4 my-2 placeholder:italic rounded-lg border border-zinc-600  bg-black'
        
        />
        </div>
        </div>

        

        <button className="get-started group relative md:w-1/2 px-8 py-3 overflow-hidden font-medium rounded-xl border border-yellow-800  text-xl  shadow-2xl shadow-[#ff910025]  my-8">
      <div className="absolute inset-0 w-0 bg-[#ff910032] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className=" text-white">Create Account</span>
      </button>

      <p className='text-center text-zinc-300 '>Already have an account ? <Link to='/login'>
      <button className='border rounded-xl px-4 py-1 mx-2 font-medium bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden  border-zinc-700   bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms]'>Log In</button>
      </Link></p>
        
        </div>

        </div>
    </form>
    </div>
  )
}

export default SignupPage