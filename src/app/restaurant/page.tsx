"use client"
import React, { useEffect, useState } from 'react'
import Product_card from '../components/product_card'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import axios from 'axios';
import { FaV } from 'react-icons/fa6';
import { Loader } from 'rsuite';



const restaurant = () => {

  const router = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const {data:sessionCheck ,status} = useSession();
   

  const [dataRes, setDataRes] = useState([]);
  const fetchRestaurant = async () => {
    axios.get('/api/restuarant')
    .then((res) => {
        console.log(res.data)
        setDataRes(res.data.message)
        
    })
  }



  
  useEffect(() => {
    fetchRestaurant()
    
   
  }, []);
   
  useEffect(() => {
                        

    if (session) {
                  
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
    <div className='w-full  bg-[#FAFAFA]'>
    <div className=' w-full '>
       <div className='bg-[#E3E3E3] flex justify-center'>
          <div className=' w-[1140px]  max-sm:w-full py-5 max-sm:py-3 max-sm:ml-0'>
                  <span className='text-[#39DB4A] text-[60px] mr-3  max-sm:text-[40px]'>Restaurant</span>
                  <span className=' text-[60px] max-sm:text-[40px]'>|</span>
                  <span className=' text-[60px] ml-3  max-sm:text-[40px]'>ร้านอาหาร</span>
          </div>
        </div>
        <div className='flex justify-center '>
            <div className='w-[1140px]'>
              <div className=' flex flex-row justify-center items-center gap-5 my-10  max-sm:mx-3'>
              <div className='w-1/4 max-sm:hidden'>
                      filter
              </div>
              <div className='w-3/4 max-sm:w-full'>
                  <div className='grid grid-cols-3 gap-2 max-sm:grid-cols-2  max-sm:w-full'>
                    {dataRes.map((data,index) => (
                      <Product_card data={data} key={index}/>
                    ))}
                  
                  </div>
              </div>
        </div>
            </div>
        </div>
       </div>

    </div>
    </>
  )
}
export default restaurant