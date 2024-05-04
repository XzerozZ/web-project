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
import Blog_card from './components/blog_card'
import { Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

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
  // if (session.data === null) {
  //   router.push('/auth/signin');
  // }
}, [session,router]);


  
  // loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestaurant();
    fetchBlog();
  }, [session, router]);

  useEffect(() => {
    if (dataRes.length > 0 && dataBlog.length > 0) {
      setIsLoading(false);
    }
  }, [dataRes, dataBlog]);

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
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
        
        <div className='w-full flex flex-col justify-center items-center gap-3 '>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] md:w-[1120px] max-sm:w-full max-sm:m-1'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3'>Restaurant</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3 mr-[10px]'>ร้านอาหาร</span>

            </div>

            <div className='grid grid-cols-4 gap-3 px-2 max-sm:grid-cols-2 xl:w-[1120px] max-sm:w-full'>
               {
                dataRes.map((data,index) => {
                  return <Product_card key={index} data={data}/>
                })
               }
              
            </div>
            <Link href='/restaurant' className='hover:no-underline bg-[#EAECEE] rounded-[10px] md:w-[1120px] max-sm:w-full max-sm:m-1 p-1 hover:bg-[#E8EAED]/70'>            
                 <h3 className="text-center text-[20px] m-1 text-[#39db4a] ">ดูทั้งหมด</h3>
            </Link>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5 mt-3'>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] md:w-[1120px] max-sm:w-full max-sm:m-1'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3 ml-[50px]'>Blog</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3'>บทความ</span>

            </div>

            <div className='grid grid-cols-4 gap-3 px-2 max-sm:grid-cols-2 xl:w-[1120px] max-sm:w-full'>
                {
                  dataBlog.map((data,index) => {
                    return <Blog_card key={index} data={data}/>
                  })
                }
              
            </div>
            <Link href='/blog' className='hover:no-underline bg-[#EAECEE] rounded-[10px] md:w-[1120px] max-sm:w-full max-sm:m-1 p-1 hover:bg-[#E8EAED]/70'>            
                 <h3 className="text-center text-[20px] m-1 text-[#39db4a] ">ดูทั้งหมด</h3>
            </Link>
   </div>


   </div>
    </>
  )
}

export default Home