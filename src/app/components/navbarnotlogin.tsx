"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Logo from './image-component/logo'
import { useSession,signOut } from "next-auth/react";
import { IoSearchOutline } from "react-icons/io5";
import { Dropdown } from 'flowbite-react';
import axios from 'axios';
import { AllBlog, SearchRestaurant, dataInformation } from '@/interface/interface';
import SearchBar from './searchbar';
import { Drawer } from 'rsuite';
import SearchbarRes from './serachbar_res';

import { LuCrown } from "react-icons/lu";



const navbar = () => {

 
 
  const [dataBlog , setDataBlog] = useState<(AllBlog)[]>([]);
  const [data, setData] = useState<(SearchRestaurant)[]>([]);

  const session = useSession();
 

  
  

    const fetchRestaurant = async () => {
        axios.get('/api/restuarant')
            .then((res) => {
              
                setData(res.data)
  
            })
    }
 
  const fetchBlog = async () => {
      axios.get('/api/blog')
          .then((res) => {
        
              setDataBlog(res.data)

          })
  }
  

  useEffect(() => {
      fetchRestaurant();
      fetchBlog();
     
     
    
    
    
  }, []);


  const [open, setOpen] = React.useState(false);
  
  
  
  if (session.data === null || undefined){
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
                  <input className='border-none block bg-transparent w-full border  rounded-md p-4 focus:outline-none focus:border-none focus:ring-0  sm:text-sm' placeholder="ร้านอาหาร บทความ" type="text" name="search"
                   />
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
            <SearchBar  data={data} dataBlog={dataBlog}/>
         </div>
         
         <div className='flex-none gap-10 flex'>
            <div className='max-sm:flex hidden'>
              <IoSearchOutline className='w-[25px] h-[25px] ' onClick={() => setOpen(true)}/>
            </div>
            <div>
            <Link className='hover:text-[#39db4a] focus:text-[#39db4a] no-underline text-black hover:no-underline' href="/leaderboard"><LuCrown className='w-[25px] h-[25px] hover:text-[#39db4a]' /></Link>

            </div>
             <div>
              <Link href='/profile/save' className='hover:text-[#39db4a] focus:text-[#39db4a] no-underline text-black hover:no-underline'> <MdFavoriteBorder className='w-[25px] h-[25px] hover:text-[#39db4a]'/></Link>
             </div>
             <div>
               
                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><FaUser className='w-[25px] h-[25px]'/></span>}>
                  <Dropdown.Item><Link href="/profile" className='hover:text-[#39db4a] no-underline text-black hover:no-underline'>Profile</Link></Dropdown.Item>
                  <Dropdown.Item><Link href="/blog/writeblog" className='hover:text-[#39db4a] no-underline text-black hover:no-underline'>Write your blog</Link></Dropdown.Item>
                  <Dropdown.Item><Link href="/profile/comment" className='hover:text-[#39db4a] no-underline text-black hover:no-underline'>Comment</Link></Dropdown.Item>
                  <Dropdown.Item><Link href="/profile/blog" className='hover:text-[#39db4a] no-underline text-black hover:no-underline'>My blog</Link></Dropdown.Item>
                  <Dropdown.Item><Link href="/profile/save" className='hover:text-[#39db4a] no-underline text-black hover:no-underline'>favorite</Link></Dropdown.Item>
                 

                  <Dropdown.Item onClick={() => signOut({callbackUrl:'/auth/signin'})} className='hover:text-[#39db4a]'>Sign out</Dropdown.Item>
                </Dropdown>
                    
             </div>
         </div>
     </div>
     <Drawer size='xs' open={open} onClose={() => setOpen(false)}>
        <Drawer.Body >
          <SearchbarRes data={data} dataBlog={dataBlog}/>
        </Drawer.Body>
      </Drawer>

     
    </nav>
    
    </>
   );
}

}

export default navbar