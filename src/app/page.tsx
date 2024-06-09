"use client"
import React, { useEffect, useState } from 'react'
import Poster from './components/image-component/poster'
import Product_card from './components/product_card'
import Image from 'next/image'
import poster2 from '/public/poster2.png'
import  Link  from 'next/link';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Blog_card from './components/blog_card'
import { Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Headtopic from './components/headtopic'
import { dataInformation } from '@/interface/interface'

const Home = () => {

  
  
 
  const router = useRouter();
  const {data:session ,status} = useSession();
  const [user, setUser] = useState<dataInformation>({} as dataInformation);
  const fetchUser = async () => {
      const formData = new FormData();
      formData.append('email', session?.user?.email || '');
      await axios.post(`/api/user/`, formData)
      .then((res) => {
          console.log(res.data);
          setUser(res.data);
      });
  }


  

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
    
    fetchUser()
   
  // if (session.data === null) {
  //   router.push('/auth/signin');
  // }
}, [session,router,user]);


  
  // loading state
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    if (dataRes.length > 0 && dataBlog.length >= 0) {
      setIsLoading(false);
    }
  }, [dataRes, dataBlog]);

  if (isLoading) {
    return  <div className='flex justify-center h-[1000px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
  else {
    return (
    
      <>
      
     <div className='w-full  bg-[#FAFAFA] min-h-screen'>
          <div className='flex justify-center gap-10 pt-[60px]  mb-11 '>
              <div className='md:m-[140px] md:mr-0'>
                <Poster width={400} height={150} />
              </div>
              <div className=' max-sm:hidden '>
                <Image src={poster2} alt='image' width={500} className='rounded-lg' priority={true} ></Image>
              </div>
  
          </div>
          
          <div className='w-full flex flex-col justify-center items-center gap-3 '>
            
              <div className=' max-sm:w-full'>
              
               <Headtopic name="Restaurant" th_name="ร้านอาหาร" />
               
              
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
             
              <Headtopic name="Blog" th_name="บทความ"/>
  
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
}

export default Home