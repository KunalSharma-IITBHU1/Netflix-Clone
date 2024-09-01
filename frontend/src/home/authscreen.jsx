import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Authscreen() {
    const [email ,setEmail] = useState('') 
   const naviigate = useNavigate()

   const handleGetStarted = (e)=>{
    e.preventDefault();
       naviigate('/signup?email' + email);
   }


  return (
    <div className='heroimage h-screen'>
    <header className='max-w-6l mx-auto flex items-center justify-between p-4'>
 <img src="netflix-logo.png" alt="logo" className='w-32 mx-56 '  />
 <Link className='bg-red-600 text-white  rounded-md mr-14 w-16 flex items-center justify-center border-red-950'>Sign In</Link>
    </header>
    <div className='w-full h-96 flex flex-col items-center justify-center mx-auto py-40 px-[400px]'>
        <h1 className='text-white  text-4xl md:text-6xl'>
            Unlited movies ,TV shows and more
        </h1>
        <h2 className='text-white px-52 py-4 text-xl'>
            Watch anytime . Cancel anytime.
        </h2>
            <h3 className='py-0 text-white px-24 text-[20px]'>
                Ready to watch ? Enter your email to get started .
            </h3>
     <form  className='flex flex-col md:flex-row gap-4' >
     <input type="email" className=' flex items-center justify-center w-full px-10 py-3 top-1 border border-grey-50 rounded-md bg-transparent border-red-500 text-white  focus:outline-none focus:ring' 
            placeholder='you@example.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id='email'/>
            <button onClick={handleGetStarted} className='text-white flex justify-center items-center bg-red-600 w-full rounded-md font-semibold hover:bg-red-700' >Get Started
            </button>
     </form>
</div>
  <div className='w-full h-2 bg-red-200 mt-[330px]'/>
  <div className='flex items-center justify-center max-w-8xl mx-auto md:flex-row flex-col px-4  md:px-2 py-10 bg-black'>
                 <div className='text-white flex-1 text-center'>
                    < h1 className='text-white font-bold text-2xl '>Enjoy Your TV</h1>
                             <p className='text-2xl'> Watch on smart TV's , playstation , Xbox , chromecast ,Apple TV and more</p>
                 </div>
               <div className='text-white flex-1'>
                <img className='inset-0 z-20 mt-4 relative object-cover' src="/tv.png" alt="" />
                <video className='inset-0 h-[650px] w-[484px] mt-[684px] ml-72 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10   '
                playsInline
                autoPlay={true}
                muted 
                loop
                >
                    <source src='/hero-vid.m4v' type='video/mp4' />
                </video>
               </div>
             </div>
                 <div className='w-full h-2 bg-red-200 '/>
                 <div className='flex items-center justify-center max-w-8xl mx-auto md:flex-row flex-col px-4  md:px-2 py-10 bg-black'>
                        <div className= 'flex-1 text-center' >
                          <img src="/stranger-things-lg.png" alt="" />
                        </div>
                        <div className='text-white flex-1 text-center'>
                        < h1 className='text-white font-bold text-2xl '>Download your shows And watch Offline</h1>
                        <p className='text-2xl'>save your faviourates and anytime.</p>
                        </div>
                 </div>
                 <div className='w-full h-2 bg-red-200 '/>
                 <div className='flex items-center justify-center max-w-8xl mx-auto md:flex-row flex-col px-4  md:px-2 py-10 bg-black' >
                        <div className='text-white flex-1 text-center' >
                        < h1 className='text-white font-bold text-2xl '>Download your shows And watch Offline</h1>
                        <p className='text-2xl'>save your faviourates and anytime.</p>
                        </div>
                        <div className= 'flex-1 text-center'>
                           <video playsInline
                           autoPlay={true}
                            muted
                            loop
                           >
                            <source  src='/vdo.m4v' type='video/mp4'/>
                           </video>
                        </div>
                 </div>
    </div>
  )
}
