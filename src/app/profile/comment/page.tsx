"use client";
import React, { useEffect, useState } from 'react'
import ComCard from './component/comCard'
import axios from 'axios'
import { dataPersonalComment } from '@/interface/interface';
import Link from 'next/link';
import { Avatar } from 'rsuite';


const page = () => {

  const [data, setData] = useState([]);
  const fetchPersonalComment = async () => {
    axios.get('/api/comment/user/3')
    .then((res) => {
        console.log(res.data)
        setData(res.data)
        
    })
  }
  useEffect(() => {
        fetchPersonalComment()
  },[])
  console.log(data,"from comment")


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
                                                    href='/profile'
                                                    className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'
                                            >
                                                    <li>
                                                            <h5>ภาพรวม</h5>
                                                    </li>
                                            </Link>
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
                            <div className='w-4/5 flex flex-col gap-4 bg-white rounded-[10px] p-5'>
                              {
                                data.map((item) => {
                                  return (
                                    <ComCard data={item} />
                                  )
                                })
                              }
                            </div>
                            
                    </div>
            </div>
    </div>
</>
  )
}

export default page