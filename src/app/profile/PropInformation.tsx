import { dataInformation } from '@/interface/interface'
import React from 'react'



const PropInformation = ({data} : {data:dataInformation}) => {
    
  return (
    <>
      <div className='flex flex-col gap-3' >
      

          
      <div>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
             <div 
            
            
             
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]">
               {data?.username}
                </div>
     </div>
     <div>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
             <div 
            
            
             
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]">
               {data?.email}
                </div>
     </div>
     <div className='flex flex-row gap-3 w-full justify-between'>
         <div  className='w-full'>
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                 <div  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" >
                        {data?.phone_number}</div>
         </div>
         <div  className='w-full'>
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                 <div  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" >
                        {data?.birthday}</div>
         </div>

     </div>

     <div>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
             <div 
            
            
             
             
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]">
               {data?.password}
                </div>
     </div>





</div></>
  )
}

export default PropInformation