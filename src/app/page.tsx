"use client"
import React, { useEffect, useState } from 'react'
import Poster from './components/image-component/poster'
import Product_card from './components/product_card'
import Image from 'next/image'
import poster2 from '/public/poster2.png'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import axios from 'axios'


const Home = () => {

  
  
  const router = useRouter();
  const session = useSession();
  

  const [dataRes, setDataRes] = useState([]);
  const fetchRestaurant = async () => {
    axios.get('/api/restuarant')
    .then((res) => {
        console.log(res.data)
        setDataRes(res.data)
        
    })
  }

  const [dataBlog, setDataBlog] = useState([]);
  const fetchBlog = async () => {
    axios.get('/api/blog')
    .then((res) => {
        console.log(res.data)
        setDataBlog(res.data)
        
    })
  }
  useEffect(() => {
    fetchRestaurant()
    fetchBlog()
  if (session.data === null) {
    router.push('/auth/signin');
  }
}, [session,router]);


  
  

  return (
    
    <>
    
   <div className='w-full  bg-[#FAFAFA]'>
        <div className='flex justify-center gap-10 pt-[60px]  mb-11 '>
            <div className='md:m-[140px] md:mr-0'>
              <Poster width={400} height={150}/>
            </div>
            <div className=' max-sm:hidden '>
              <Image src={poster2} alt='image' width={500} className='rounded-lg' priority={true} ></Image>
            </div>

        </div>
        
        <div className='w-full flex flex-col justify-center items-center gap-5 '>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] xl:w-[1120px] max-sm:w-full max-sm:m-5'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3'>Restaurant</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3 mr-[10px]'>ร้านอาหาร</span>

            </div>

            <div className='grid grid-cols-4 gap-6 max-sm:grid-cols-2 xl:w-[1120px] max-sm:w-full'>
               {
                dataRes.map((data,index) => {
                  return <Product_card key={index} data={data}/>
                })
               }
              
            </div>
        <Link href='/restaurant'>            <div className=' bg-[#EAECEE] rounded-[10px] xl:w-[1120px] max-sm:w-full max-sm:m-5 p-1 hover:bg-[#E8EAED]'><h3 className="text-center text-[20px] m-2">ดูทั้งหมด</h3></div>
</Link>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5 mt-3'>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] xl:w-[1120px] max-sm:w-full max-sm:m-5'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3 ml-[50px]'>Blog</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3'>บทความ</span>

            </div>

            <div className='grid grid-cols-4 gap-4  max-sm:grid-cols-2 xl:w-[1120px] max-sm:w-full'>
                {
                  dataBlog.map((data,index) => {
                    return <Product_card key={index} data={data}/>
                  })
                }
              
            </div>
            <Link href='/blog'>            <div className=' bg-[#EAECEE] rounded-[10px] xl:w-[1120px] max-sm:w-full max-sm:m-5 p-1 hover:bg-[#E8EAED]'><h3 className="text-center text-[20px] m-2">ดูทั้งหมด</h3></div>
</Link>        </div>


   </div>
    </>
  )
}

export default Home