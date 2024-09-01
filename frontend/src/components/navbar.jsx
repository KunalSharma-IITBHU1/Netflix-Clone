import React from 'react'
import { Link } from 'react-router-dom'
import { LogOut, Search } from 'lucide-react'
import { useAuthStore } from '../store/auth'
import { useContentStore } from '../store/content'

 const  Navbar = () => {
const {user , logout} = useAuthStore();
const {contentType , setContentType} =useContentStore();



  return (
    <div>

    <header className='w-full mx-auto  p-4 h-24'>
      <div className='flex flex-row z-50 gap-6'>
         <Link to={'/'}>
         <img src="/netflix-logo.png" alt="" className='w-32 sm:40 ml-56'  />
         </Link>
         <Link to={'/'} className='hover:underline text-white '  onClick={() => setContentType('movie')} >
        Movies
        </Link>
        <Link to={'/'} className='hover:underline  text-white'  onClick={() => setContentType('tv')} >
      Tv SHows
        </Link>
        <Link to={'/history'} className='hover:underline  text-white'>
        SearchHistory
        </Link>
        <Link to={'/history'} className='hover:underline ml-80 size-6 cursor-pointer text-white'>
        <Search/>
        </Link>
        <img src='/avatar1.png' alt="avatar" className='w-8'/>
        <LogOut className='cursor-pointer text-white' onClick={logout}/>
         {/* <div className='    sm:flex gap-8 w-full px-40 py-1 '>
       
         </div> */}
        
      </div>
    </header>
    </div>
  )
}

export  {Navbar}