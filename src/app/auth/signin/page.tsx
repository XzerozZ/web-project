"use client";
import React from 'react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

type Props = {}

const  LoginPage = (props: Props) => {

   
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async () => {
      
        await signIn('credentials', {
            email: email,
            password: password,
            redirect: true,
            callbackUrl: '/'
        })
    }
  return (
   <>
   <div className='flex justify-center bg-[#FAFAFA] py-[150px] max-sm:p-[75px]'>
    <div >
        <form onSubmit={handleSignIn} className='flex flex-col w-[450px] gap-5 max-sm:p-10'>
        <h1 className='text-center text-[40px]'>Sign in</h1>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
            </div>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="password" required />
            </div>
            <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Sign in</button>

 
        </form>
    </div>
   </div>
   </>
  )
}

export default LoginPage