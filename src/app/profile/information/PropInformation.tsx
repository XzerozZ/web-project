import { dataInformation } from '@/interface/interface'
import React from 'react'



const PropInformation = ({data} : {data:dataInformation}) => {
    
  return (
    <>
      <div className='flex flex-col gap-3' >
      
   
      <div>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
             <input 
             type="text" 
             id="username" 
             value={data.username}
            
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
     </div>
     <div>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
             <input 
             type="text" 
             id="email" 
             value={data.email}
             
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
     </div>
     <div className='flex flex-row gap-3 w-full justify-between'>
         <div  className='w-full'>
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                 <input 
                 type="text" 
                 id="telephone" 
                 value={data.phone_number}
                 
                 
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="087-123457" required />
         </div>
         <div  className='w-full'>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
             <input 
             type="text" 
             id="birthday" 
                value={data.birthday}
             
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
          </div>

     </div>

     <div>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
             <input 
             type="password" 
             id="password" 
                value={data.password}
            
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="password" required />
     </div>





</div></>
  )
}

export default PropInformation