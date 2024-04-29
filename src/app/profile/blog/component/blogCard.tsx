import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'
import { dataPersonalBlog } from '@/interface/interface'


const blogCard = ({data} : {data:dataPersonalBlog}) => {
  return (
    <div className="flex flex-row gap-3 bg-white">
    <div className=" w-1/3">
      
        <img src={data.image} alt="" />
    </div>
  <div className='flex flex-col'>
    <div className="">
          <h4>{data.description}</h4>
      </div>
      <div className="">
         
          <h6>{data.posted_date}</h6>
      </div>
  </div>
</div>
  )
}

export default blogCard