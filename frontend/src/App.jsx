import './index.css'
import {Routes ,Route, Navigate} from 'react-router-dom'
import HomePage from './home/HomePage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/auth'
import { useEffect } from 'react'
import {Loader} from 'lucide-react'


function App() {
  const {user , isChekingAuth , authCheck} = useAuthStore();
 console.log(user);

useEffect(()=>{
  authCheck();
} ,[])

if(isChekingAuth){
  return(
    <div className='h-screen'>
       <div className='flex items-center justify-center'>
        <Loader className='animate-spin bg-red-600 size-10' />
       </div>
    </div>
  )
}

  return (
    <>

     <Routes>
      <Route path='/'     element = { <HomePage/>}/>
      <Route path='/signup' element = { !user ? <Signup/> : <Navigate to={'/'}/>}/>
      <Route path='/login'   element = {!user ? <Login/> : <Navigate to={'/'}/>}/>
     </Routes>
    
     <Toaster/>
    </>
  )
}

export default App
