"use client"
import { AloneBlog } from '@/interface/interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Avatar } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

type Props = {}

const BlogDetail = (props: Props) => {


  const router = useRouter();
  const session = useSession();
  const params = useParams();
  useEffect(() => {
    if (session.data === null) {
      router.push('/auth/signin');
    }
  }, [session,router]);

  const [dataBlog, setDataBlog] = useState<AloneBlog>();
  const fetchBlog = async () => {
    axios.get(`/api/blog/${params.id}`)
    .then((res) => {
        console.log(res.data)
        setDataBlog(res.data)
        
    })
  }
  useEffect(() => {
    fetchBlog()
  }, []);

  console.log(dataBlog)
  
    
  return (
    <>
     <main className='w-full bg-[#FAFAFA]  items-center flex justify-center p-5'>
       <div className='w-[1140px] '>
            <h1  className='text-[50px]'>{dataBlog?.title}</h1>
            <div className='flex flex-row p-5 gap-4'>
                <div className=''>
                    <Avatar circle size='lg' />
                </div>
                <div className=''>
                    <div className='text-[30px]'>
                       {
                        dataBlog?.user?.username
                       }
                    </div>
                    <div>
                    Published {dataBlog?.posted_date}
                    </div>
                </div>
            </div>
            <div>
                <img src={dataBlog?.image} alt='blog' className='w-full'/>
            </div>
            <div className='text-[20px]'>
              {
                dataBlog?.description
              }
            </div>
       
       </div>

    </main>
    </>
  )
}
export default BlogDetail