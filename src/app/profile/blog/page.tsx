"use client";
import React, { use } from 'react'
import { Avatar, Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

import { useState,useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import {UserSession, dataInformation } from '@/interface/interface';


const page = () => {

  
  const router = useRouter();
  const {data:session ,status} = useSession();
  const [sessionData, setSessionData] = useState<UserSession>();
  const [data, setData] = useState<dataInformation>({} as dataInformation);
  const [isLoading, setIsLoading] = useState(true);



 
 
  const fetchBlog = async (user:any) => {
        await axios.get(`/api/save/${user}`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            
            
        })
  }


  
useEffect(() => {
                        
console.log(session?.user?.email)
                        if (session) {
                                 fetchBlog(session.user?.email);
                                 setIsLoading(false);
                        }
                if (status === 'unauthenticated') {
                        router.push('/auth/signin');
                }
        
        }, [session]);


  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
return (
        <>
                <div className='flex flex-col justify-center bg-[#fafafa]'>
                        <div className='bg-[#e3e3e3] flex w-full justify-center p-5'>
                                <div className='flex flex-row w-[1140px] justify-between gap-5 '>
                                        <div className=''>
                                                <div className='max-sm:hidden'>
                                                        <Avatar circle size='xxl' src={data.image}/>
                                                </div>
                                                <div className='sm:hidden'>
                                                        <Avatar circle size='xl' src={data.image}/>
                                                </div>
                                        </div>
                                        <div className='flex flex-row grow justify-between max-sm:flex-col'>
                                                <h1 className='my-auto max-sm:text-[20px]'>{data.username}</h1>
                                                <div className='my-auto'></div>
                                        </div>
                                </div>
                        </div>
                        <div className='flex justify-center p-3'>
                                <div className='flex gap-5 w-[1140px]'>
                                        <div className='w-1/5 max-sm:hidden '>
                                                <ul className='flex flex-col  p-3  bg-white rounded-[10px] gap-3'>
                                                       
                                                        <Link
                                                                href='/profile/restaurant'
                                                                className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'
                                                        >
                                                                <li>
                                                                        <h5>ความคิดเห็น</h5>
                                                                </li>
                                                        </Link>
                                                        <Link
                                                                href='/profile/blog'
                                                                className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'
                                                        >
                                                                <li>
                                                                        <h5>บทความ</h5>
                                                                </li>
                                                        </Link>
                                                        <Link
                                                                href='/profile/save'
                                                                className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'
                                                        >
                                                                <li>
                                                                        <h5>บันทึก</h5>
                                                                </li>{" "}
                                                        </Link>
                                                      
                                                </ul>
                                        </div>
                                        <div className='w-4/5 max-sm:w-full'>
                                       
                                        </div>
                                        
                                </div>
                        </div>
                </div>
        </>
);
}

export default page