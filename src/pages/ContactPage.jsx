import React, { useState } from 'react'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
const ContactPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className='flex flex-col md:flex-row gap-8 w-screen h-screen font-primary justify-center items-center p-8'>

      <div className='text-white mt-40 md:mt-0 md:my-0'>
        <h2 className='text-3xl md:text-5xl font-semibold my-4 text-transparent  bg-clip-text bg-gradient-to-b from-white to-zinc-800'>
        Your feedback <br /> helps us improve 
        </h2>
        <div className='text-zinc-300'>
        <p>We are here to help you and we'd love to connect with you.</p>

        <p>We'll get back in 24h.</p>
        </div>
        
        
      </div>

      <div className='w-full md:w-1/2'>
      <form className='signup  flex flex-col  justify-center  items-center text-white font-primary w-full ' onSubmit={handleSubmit}>
      
      
      
        <div className=' bg-gradient-to-b from-zinc-600 to-black p-0.5  rounded-lg w-full md:w-2/3'>

        <div className=' bg-gradient-to-b relative from-zinc-950 to-black backdrop-filter backdrop-blur-xl h-full w-full items-center p-4  back md:p-8 rounded-lg flex flex-col justify-center'>
        <div className='w-[400px] h-[400px]  rounded-full absolute top-[-40px] left-[-40px] blur-3xl z-[-10] bg-[#57575729]  '></div>
        
        
        
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


       

        

      <button type='submit' className="get-started group relative  px-8 py-3 overflow-hidden font-medium rounded-xl border border-yellow-800  text-xl  shadow-2xl shadow-[#ff910025]  my-8">
      <div className="absolute inset-0 w-0 bg-[#ff910032] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className=" text-white">Send Message</span>
      </button>

      
        </div>

        </div>
    </form>
      </div>

    </div>
  )
}

export default ContactPage