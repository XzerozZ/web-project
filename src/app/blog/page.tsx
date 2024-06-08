"use client"
import React, { useState } from 'react'
import Blog_card from '../components/blog_card'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


type Props = {}

const blog = (props: Props) => {


  const router = useRouter();
  const session = useSession();
  const [dataBlog, setDataBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {data:sessionCheck ,status} = useSession();
  const fetchBlog = async () => {
    axios.get('/api/blog')
    .then((res) => {
        console.log(res.data)
        setDataBlog(res.data)
        
    })
  }


  useEffect(() => {
    fetchBlog()
    
    
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
       <div className='flex justify-center bg-[#E3E3E3] '>
        <div className='w-[1140px]'>
              <div className='  max-sm:w-full py-5 max-sm:py-3 max-sm:ml-0'>
              <span className='text-[#39DB4A] text-[60px] mr-3  max-sm:text-[40px]'>Blog</span>
                    <span className=' text-[60px] max-sm:text-[40px]'>|</span>
                    <span className=' text-[60px] ml-3  max-sm:text-[40px]'>บทความ</span>
              </div>
          </div>
       </div>
       <div className='flex justify-center'>
          <div className='w-[1140px]'>
          <div className=' flex flex-row justify-center items-center gap-4 my-10  max-sm:mx-0'>
                
                <div className='max-sm:w-full'>
                    <div className='grid grid-cols-4 gap-1 max-sm:grid-cols-2  max-sm:w-full'>
                        {dataBlog.map((data,index) => {
                            return (
                                <Blog_card data={data} key={index}/>
                            )
                        })}
                    
                    </div>
                </div>
            </div>
         </div>
       </div>

    </div>
    </>
  )
}
export default blog