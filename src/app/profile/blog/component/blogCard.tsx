import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'
import { dataPersonalBlog } from '@/interface/interface'
import axios from 'axios'
import Link from 'next/link'


const blogCard = ({data} : {data:dataPersonalBlog}) => {

  const deleteBlog = (e:any) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('id', data.blog_id.toString())
    axios.delete(`/api/blog/`, { data: formData })
  }


  

  return (
  <Link href={`/blog/${data.blog_id}`} className='text-black hover:text-black hover:no-underline hover:border hover:border-[#39db4a]'>
    <div className="flex flex-row gap-3 bg-white rounded-[10px]  justify-between">
      <div className="w-1/3">
        <Image width={500} height={300} src={data?.image} alt="" className='aspect-square rounded-l-[10px]'/>
      </div>
      <div className='w-2/3 flex justify-between p-3'>
      <div className='flex flex-col justify-start'>
        <div className="">
          <h4>{data?.title}</h4>
        </div>
        <div className="">
          <h6>{new Date(data?.posted_date).toLocaleString()}</h6>
        </div>
      </div>
      <div className='p-3'>
        <button className='text-[#ff0000] p-3 rounded-md  ' onClick={() => deleteBlog} >Delete</button>
      </div>
      </div>
    </div>
  </Link>

  )
}

export default blogCard