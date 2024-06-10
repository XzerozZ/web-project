"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

type Props = {}

const page = (props: Props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirm, setConfirm] = React.useState('')
    const Router = useRouter()


    const handleSubmit = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password)
        if (password !== confirm) {
            Swal.fire({
                icon: 'error',
                title: 'Password not match',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            axios.post('/api/password/forgetpass', formData).then((res) => {
                console.log(res)
             
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Please check your email to reset your password',
                })
                Router.push('/auth/signin')
              
    
            })
        }
        
    }
    localStorage.getItem('verifyOTP');
    if (localStorage.getItem('verifyOTP') === 'not verify') {
      Router.push('/auth/signin')
    }
    
    else if (localStorage.getItem('verifyOTP') === 'verify') {

   
  return (
    <>
    <div className='w-full flex justify-center pt-[50px] max-sm:pt-[10px] min-h-screen bg-[#fafafa]'>
        <div className='w-[640px] flex flex-col gap-6 p-3'>
          <form onSubmit={handleSubmit}>
          <div className='justify-center flex flex-col gap-3'>
           <h1 className='text-3xl text-[#39db4a] text-center'>Changepassword</h1>
           <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39db4a] focus:border-[#39db4a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39db4a] dark:focus:border-[#39db4a]" placeholder="email@email.com"  />
            </div>
            <div>
                   
                    <input 
                    type="password" 
                    id="password" 
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39db4a] focus:border-[#39db4a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39db4a] dark:focus:border-[#39db4a]" placeholder="input your new password"  />
            </div>
            <div>
                   
                   <input 
                   type="password" 
                   id="confirm" 
                   name='confirm'
                   onChange={(e) => setConfirm(e.target.value)}
                   required
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39db4a] focus:border-[#39db4a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39db4a] dark:focus:border-[#39db4a]" placeholder="Confirm your new password"  />
           </div>
            <button type='submit' className='border-[#39db4a]  bg-[#39db4a] border-2 text-white py-2 rounded-md'>Confirm</button>
           </div>
          </form>
        </div>
    </div>
    </>
  )
}}

export default page