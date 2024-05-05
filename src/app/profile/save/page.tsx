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
import SaveCard from './component/saveCard';
import { SideBar } from '../component_profile/SideBar';


const page = () => {

  
  const router = useRouter();
  const {data:session ,status} = useSession();
  const [sessionData, setSessionData] = useState<UserSession>();
  const [fav, setFav] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setDataUser] = useState<dataInformation>({} as dataInformation);



 
 
  const fetchFav = async (email:any) => {
        const formData = new FormData();
        formData.append('email', email)
        console.log(email)
        await axios.post(`/api/favorite/user`,formData)
        .then((res) => {
            console.log(res.data)
            setFav(res.data)
            
            
        })
  }
  const fetchInformation = async (email:any) => {
        const formData = new FormData();
        formData.append('email',email)
        await axios.post(`/api/user/`,formData)
        .then((res) => {
            console.log(res.data)
            setDataUser(res.data)
            
            
        })
  }


  
useEffect(() => {
                        

                if (session) {
                        fetchFav(session?.user?.email);
                        fetchInformation(session?.user?.email)
                        setIsLoading(false);
                }
                else if (status === 'unauthenticated') {
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
                                               <SideBar />
                                        </div>
                                        <div className='w-4/5 max-sm:w-full flex flex-col gap-3'>
                                              {
                                                fav.map((item,index) => {
                                                        return <SaveCard data={item} key={index}/>
                                                })
                                              }
                                        </div>
                                        
                                </div>
                        </div>
                </div>
        </>
);
}

export default page