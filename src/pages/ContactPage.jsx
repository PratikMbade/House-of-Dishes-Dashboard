import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import Button_1 from '../components/Button_1'
const ContactPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className=' pt-32 flex flex-col overflow-x-hidden max-w-screen md:flex-row gap-8  h-screen font-primary justify-center items-center px-8'>

      <div className='text-white mt-40 md:mt-0 md:my-0'>
        <h2 className='text-3xl md:text-5xl font-semibold my-4 text-transparent  bg-clip-text bg-gradient-to-b from-white to-zinc-800'>
        Your feedback <br /> helps us improve 
        </h2>
        <div className='text-zinc-300'>
        <p>We are here to help you and we d love to connect with you.</p>

        <p>We will get back in 24h.</p>
        </div>
        
        
      </div>

      <div className='w-full md:w-1/2'>
      <form className='signup  flex flex-col  justify-center  items-center text-white font-primary w-full ' onSubmit={handleSubmit}>
      
      
      
        <div className=' bg-gradient-to-b from-zinc-600 to-black p-0.5  rounded-lg w-full md:w-2/3'>

        <div className=' bg-gradient-to-b relative from-zinc-950 to-black backdrop-filter backdrop-blur-xl h-full w-full items-center p-4  back md:p-8 rounded-lg flex flex-col justify-center'>
        <div className='w-[400px] h-[400px]  rounded-full absolute top-[-40px] left-[-40px] blur-3xl z-[-10] bg-[#14318629]  '></div>
        
        
        
        <div className='flex md:gap-4 flex-col  min-w-full'>

        <div className='my-2 min-w-full'>
        <label>Name</label>
        <input type="text"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='Full Name'
        onChange={(e)=>setName(e.target.value)} 
        value={name}
        required={true}
        />
        </div>

        <div className='my-2 min-w-full'>
        <label>Email</label>
        <input type="email"
        className='block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='abc@gmail.com'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        required={true}
        />
        </div>

        <div className='my-2 min-w-full'>
        <label>Message</label>
        <textarea type="textarea"
        className='block min-w-full min-h-[200px] py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-black'
        placeholder='Type your message...'
        onChange={(e)=>setMessage(e.target.value)} 
        value={message}
        required={true}
        />
        </div>
        </div>


       

        

      <Button_1 name={'Send Message'} />

      
        </div>

        </div>
    </form>
      </div>

    </div>
  )
}

export default ContactPage