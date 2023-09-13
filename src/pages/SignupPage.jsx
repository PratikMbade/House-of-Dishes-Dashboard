import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BiShow} from 'react-icons/bi'
import {MdOutlineVisibilityOff} from 'react-icons/md'
import Button_1 from '../components/Button_1'
import Button_2 from '../components/Button_2';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [pwMatchError, setpwMatchError] = useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password!==ConfirmPassword)
    {setpwMatchError(true)}
    else setpwMatchError(null)
    console.log(e);
  }


  

  return (
    <div className='px-4 sm:px-4 pb-16'>
      <form className='signup  flex flex-col  justify-center  items-center text-white font-primary' onSubmit={handleSubmit}>
      <h3 className='text-2xl font-semibold  mt-8  text-center  py-2'>Create a new account</h3>
      <p className='text-center mb-8 text-base text-zinc-300'>Enter the fields below to get started</p>
      
      
        <div className=' bg-gradient-to-b from-zinc-600 z-0 to-black p-0.5  rounded-lg'>

        <div className=' bg-gradient-to-b relative from-zinc-950 to-black backdrop-filter backdrop-blur-xl h-full w-full items-center p-4   md:p-16 rounded-lg flex flex-col justify-center'>
        <div className='w-[300px] h-[300px]  rounded-full absolute top-[-40px] left-[-40px] blur-3xl z-[-10] bg-[#1439b329]  '></div>
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          
        <div className='my-4'>
        <label>First Name</label>
        <input type="text"
        className='block w-[300px] py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='First Name'
        onChange={(e)=>setFirstName(e.target.value)} 
        value={firstName}
        required={true}
        />
        </div>
        <div className='my-4'>
        <label>Last Name</label>
        <input type="text"
        className='block w-[300px] py-2 placeholder:italic px-4 my-2 rounded-lg border border-zinc-600  bg-black'
        placeholder='Last Name'
        required={true}
        onChange={(e)=>{setlastName(e.target.value)}}
        value={lastName}
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
        required={true}
        />
        </div>
        </div>

        {/* <div className='flex md:gap-4 flex-col md:flex-row min-w-full'>
        <div className='my-4 min-w-full'>
        <label>Phone Number</label>
        <input type="text"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='+91 0123456789'
        onChange={(e)=>setNumber(e.target.value)} 
        value={number}
        required={true}
        />
        </div>
        </div> */}


        <div className='flex md:gap-4 flex-col md:flex-row'>

        <div className='my-4'>
        <label>Password</label>
        <div className='relative'>
        <input type={showPw ? 'text' : 'password'}
        className='block w-[300px]  py-2 px-4 placeholder:italic my-2 border border-zinc-600 rounded-lg bg-black'
        onChange={(e)=>setPassword(e.target.value)} 
        value={password}
        required={true}
        placeholder='Password'
        />
        <BiShow className={` ${showPw ? 'hidden' : 'flex'} absolute top-3 right-4 cursor-pointer`} onClick={()=>{setShowPw(!showPw)}} />
        <MdOutlineVisibilityOff className={` ${showPw ? 'flex' : 'hidden'} absolute top-3 right-4 cursor-pointer`} onClick={()=>{setShowPw(!showPw)}}/>
        </div>
        </div>
        <div className='my-4'>
          
        <label>Confirm Password</label>
        <div className='relative'>
        <input type={showConfirmPw ? 'text' : 'password'}
        className='block w-[300px] py-2 px-4 my-2 placeholder:italic rounded-lg border border-zinc-600  bg-black'
        onChange={(e)=>setConfirmPassword(e.target.value)}
        value={ConfirmPassword}
        required={true}
        placeholder='Confirm Password'
        />
         <BiShow
            className={` ${showConfirmPw ? 'hidden' : 'flex'} absolute top-3 right-4 cursor-pointer`}
            onClick={()=>{setShowConfirmPw(!showConfirmPw)}}
          />
          <MdOutlineVisibilityOff
            className={` ${showConfirmPw ? 'flex' : 'hidden'} absolute top-3 right-4 cursor-pointer`}
            onClick={()=>{setShowConfirmPw(!showConfirmPw)}}
          />
          {pwMatchError && <div className='text-rose-600 border-l-2 w-3/4 text-sm rounded border-rose-800  bg-gradient-to-r from-[#ab2c2c2a] to-transparent  px-4 py-2'>Passwords don't match</div>}
          </div>
          
        </div>
        </div>

        

     <Button_1 name={'Create Account'}/>

      <p className='text-center text-zinc-300 '>Already have an account ? <Link to='/login'>
      <Button_2 name={'Log in'}/>
      </Link></p>
        
        </div>

        </div>
    </form>
    </div>
  )
}

export default SignupPage