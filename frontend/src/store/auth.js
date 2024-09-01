
import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Flag } from 'lucide-react';

export const useAuthStore = create((set) => ({
    user: null,
    isSignUp: false,
    isChekingAuth : false,
    isLoggingOut :false , 
    isLoggingIn : false ,

    signup: async (credentials) => {
        set({ isSignUp: true });
        try {
            const response = await axios.post("/api/v1/auth/signup", credentials);
            set({ user: response.data.user, isSignUp: false });
            toast.success('Signup successful');
        } catch (error) {
            toast.error('Signup failed');
            set({ isSignUp: false, user: null });
        }
    } ,

    login : async (credentials) => {
        set({isLoggingIn:true})
       try {
        const response = await axios.post('/api/v1/auth/login' , credentials)
        set({user : response.data.user , isLoggingIn:false})
        toast.success('loggedIn')
       } catch (error) {
        set({isLoggingIn:false})
        toast.error("failed login")
       }

    },

    logout : async () => {
        try {
            set({isLoggingOut:true })
        const response = await axios.post('/api/v1/auth/logout')
        set({user : null , isLoggingOut : false})
        toast.success('loggedout successfuly')
        } catch (error) {
            set({isLoggingOut:false})
            toast.error("not able to log out ")
        }
    },

    authCheck : async () => {
             set({isChekingAuth:true })
             try {
                const response = await axios.get("/api/v1/auth/authCheck" )
                set({user : response.data.user ,isChekingAuth : false })
             } catch (error) {
                set({user : null , isChekingAuth : true})
             }
            
    },
}));
