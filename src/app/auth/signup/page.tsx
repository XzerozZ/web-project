import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
     <div className='flex justify-center bg-[#FAFAFA] py-[100px] max-sm:p-[50px]'>
    <div >
        <form  className='flex flex-col w-[450px] gap-5 max-sm:p-10'>
        <h1 className='text-center text-[40px]'>Sign up</h1>
             <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input 
                    type="text" 
                    id="username" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
            </div>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
            </div>
            <div className='flex flex-row gap-3 w-full justify-between'>
                <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                        <input 
                        type="text" 
                        id="telephone" 
                        // onChange={(e) => setEmail(e.target.value)}
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="087-123457" required />
                </div>
                <div  className='w-full'>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                    <input 
                    type="text" 
                    id="birthday" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
                 </div>

            </div>

            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    // onChange={(e) => setPassword(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="password" required />
            </div>


            <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Sign up</button>

 
        </form>
    </div>
   </div>
    </>
  )
}

export default page