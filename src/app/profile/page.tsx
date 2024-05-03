"use client";
import React, { use } from 'react'
import { Avatar } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

import { useState,useEffect} from "react";

import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import PropInformation from './PropInformation';
import axios from 'axios';

import test from 'node:test';
import {dataInformation } from '@/interface/interface';


const ProfilePage = () => {

  
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (!session.data) {
      router.push('/auth/signin');
    }
  }, [session,router]);
  const [data, setData] = useState<dataInformation>({} as dataInformation);

  const fetchInformation = async () => {
        axios.get('http://localhost:3000/api/user/3')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            
        })
  }

  useEffect(() => {
        fetchInformation()
        },[])


        console.log(data);
        
 
return (
        <>
                <div className='flex flex-col justify-center bg-[#fafafa]'>
                        <div className='bg-[#e3e3e3] flex w-full justify-center p-5'>
                                <div className='flex flex-row w-[1140px] justify-between gap-5 '>
                                        <div className=''>
                                                <div className='max-sm:hidden'>
                                                        <Avatar circle size='xxl' />
                                                </div>
                                                <div className='sm:hidden'>
                                                        <Avatar circle size='xl' />
                                                </div>
                                        </div>
                                        <div className='flex flex-row grow justify-between max-sm:flex-col'>
                                                <h1 className='my-auto max-sm:text-[20px]'>Natchapon Ponlaem</h1>
                                                <div className='my-auto'></div>
                                        </div>
                                </div>
                        </div>
                        <div className='flex justify-center p-3'>
                                <div className='flex gap-5 w-[1140px]'>
                                        <div className='w-1/5  '>
                                                <ul className='flex flex-col  p-3  bg-white rounded-[10px] gap-3'>
                                                       
                                                        <Link
                                                                href='/profile/restaurant'
                                                                className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'
                                                        >
                                                                <li>
                                                                        <h5>ร้านอาหาร</h5>
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
                                                        <Link
                                                                href='/profile/information'
                                                                className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'
                                                        >
                                                                <li>
                                                                        <h5>ข้อมูลส่วนตัว</h5>
                                                                </li>
                                                        </Link>
                                                </ul>
                                        </div>
                                        <div className='w-4/5'>
                                        <PropInformation data={data} />
                                        </div>
                                        
                                </div>
                        </div>
                </div>
        </>
);
}

export default ProfilePage