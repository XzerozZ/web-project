"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Logo from './image-component/logo'
import { useSession,signOut } from "next-auth/react";

import { IoSearchOutline } from "react-icons/io5";
import { Dropdown } from 'flowbite-react';
import { Span } from 'next/dist/trace';



type Props = {
 
}

const navbar = (props: Props) => {

  const session = useSession();
  console.log("session from navbar",session);

 
  
  
  if (session.data === null){
  return (
   <>
   <nav className='bg-[#fff] flex justify-center h-[120px] items-center w-full max-sm:p-3'>
    <div className='flex justify-between w-[1120px] items-center gap-10'>
        <div className='flex-none w-[150px] pt-3'>
           <Link href='/'><Logo width={150} height={75}/></Link>
          
        </div>
        <div className=' max-sm:hidden grow'>
           <form className='m-1'>
                <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                  <input className='border-none block bg-transparent w-full border  rounded-md p-4 focus:outline-none focus:border-none focus:ring-0  sm:text-sm' placeholder="ร้านอาหาร บทความ" type="text" name="search"/>
                  <div dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2'>
                    <span className='m-2 '><IoSearchOutline className='w-[25px] h-[25px] '/></span>
                
                  </div>
               </div>
           </form>
        </div>
        <div className='max-sm:flex gap-5 flex'>
          <Link href='/auth/signup'><button className='py-3 px-4 text-black'>Sign up</button></Link>
         <Link href="/auth/signin"> <button className='border-[#39DB4A] py-3 px-4 border-2 rounded-md hover:bg-[#39DB4A] hover:text-white text-black'>Login</button></Link>
        </div>
    </div>
   </nav>
   
   </>
  );
}else {
  return (
    <>
    <nav className='bg-[#fff] flex justify-center h-[120px] items-center w-full'>
     <div className='flex justify-between w-[1120px] items-center gap-10'>
         <div className='flex-none w-[150px] pt-3'>
         <Link href='/'><Logo width={150} height={75}/></Link>
           
         </div>
         <div className=' max-sm:hidden grow'>
            <form className='m-1'>
                 <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                   <input className='border-none block bg-transparent w-full border  rounded-md p-4 focus:outline-none focus:border-none focus:ring-0  sm:text-sm' placeholder="ร้านอาหาร บทความ" type="text" name="search"/>
                   <div dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2'>
                     <span className='m-2 '><IoSearchOutline className='w-[25px] h-[25px] '/></span>
                 
                   </div>
                </div>
            </form>
         </div>
         <div className='max-sm:flex'>
           <IoSearchOutline className='w-[25px] h-[25px] '/>
         </div>
         <div className='flex-none gap-10 flex'>
             <div>
               <MdFavoriteBorder className='w-[25px] h-[25px]'/>
             </div>
             <div>
               
                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><FaUser className='w-[25px] h-[25px]'/></span>}>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item onClick={() => signOut({callbackUrl:'/auth/signin'})}>Sign out</Dropdown.Item>
                </Dropdown>
                    
             </div>
         </div>
     </div>
    </nav>
    
    </>
   );
}

}

export default navbar