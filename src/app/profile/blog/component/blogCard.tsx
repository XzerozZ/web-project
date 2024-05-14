import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'
import { dataPersonalBlog } from '@/interface/interface'
import axios from 'axios'


const blogCard = ({data} : {data:dataPersonalBlog}) => {

  const deleteBlog = (e:any) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('id', data.blog_id.toString())
    axios.delete(`/api/blog/`, { data: formData })
  }


  

  return (
    <div className="flex flex-row gap-3 bg-white rounded-[10px] ">
      <div className="w-1/3">
        <img src={data?.image} alt="" className='aspect-square rounded-l-[10px]'/>
      </div>
      <div className='flex flex-col justify-start'>
        <div className="">
          <h4>{data?.title}</h4>
        </div>
        <div className="">
          <h6>{new Date(data?.posted_date).toLocaleString()}</h6>
        </div>
      </div>
      <div className='p-3'>
        <button className='bg-red-500 p-3 rounded-md text-white ' onClick={() => deleteBlog} >Delete</button>
      </div>
    </div>

  )
}

export default blogCard