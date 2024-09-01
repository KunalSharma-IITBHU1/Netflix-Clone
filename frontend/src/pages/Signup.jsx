import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/auth'; // Adjust the path as necessary

export default function Signup() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const emailValue = searchParams.get('email');

    const [email, setEmail] = useState(emailValue || '');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const { signup } = useAuthStore(); // Destructure signup from the store

    const handleEvent = (e) => {
        e.preventDefault();
        if (typeof signup === 'function') {
            signup({ email, username, password });
        } else {
            console.error('Signup function is not available');
        }
    };

    return (
        <div className='heroimage h-screen w-full '>
            <header className='max-w-6l mx-auto flex items-center justify-between p-4'>
                <Link to={'/'} />
                <img src="netflix-logo.png" alt="logo" className='w-32 mx-56 ' />
            </header>
            <div>
                <div className='flex justify-center items-center mt-20 mx-3'>
                    <div className='w-96 mx-w p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
                        <h1 className='text-white flex justify-center items-center font-bold text-2xl'>Sign Up</h1>
                        <form className='space-y-4'>
                            <label htmlFor="email" className='text-white'>Email</label>
                            <input 
                                type="email" 
                                className='flex items-center justify-center w-full px-3 py-2 top-1 border border-grey-50 rounded-md bg-transparent text-white focus:outline-none focus:ring' 
                                placeholder='you@example.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id='email'
                            />
                            <label htmlFor="password" className='text-white'>Password</label>
                            <input 
                                type="password" 
                                className='flex items-center justify-center w-full px-3 py-2 top-1 border border-grey-50 rounded-md bg-transparent text-white focus:outline-none focus:ring' 
                                placeholder='1234abc@23hhd'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id='password'
                            />
                            <label htmlFor="username" className='text-white'>Username</label>
                            <input 
                                type="text" 
                                className='flex items-center justify-center w-full px-3 py-2 top-1 border border-grey-50 rounded-md bg-transparent text-white focus:outline-none focus:ring' 
                                placeholder='Arman2006'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id='username'
                            />
                        </form>
                        <button 
                            className='text-white flex justify-center items-center bg-red-600 w-full rounded-md font-semibold hover:bg-red-700' 
                            onClick={handleEvent}
                        >
                            Sign Up
                        </button>
                        <div className='text-center text-green-100'>
                            Already a member?{" "}
                            <Link to={'/login'} className='text-red-500'>
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
