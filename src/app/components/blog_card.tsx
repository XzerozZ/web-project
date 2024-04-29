import React from 'react'
import Image from 'next/image'
import image from '/public/restaurant.webp'
import { AllBlog } from '@/interface/interface'



const blog_card = ({data}: {data:AllBlog}) => {
return (
    <div className="hover:scale-105 relative m-2">
       <div className=''>
         <Image src={image} alt='image' sizes='100vw' className="rounded-lg " priority={true}></Image>
         <div className="absolute inset-0 bg-black opacity-0 sm:opacity-20 rounded-lg blur-sm sm:hover:opacity-0"></div>
       </div>
       
       <div className='absolute bottom-0 left-0 overlay'>
        <p className="text-white text-[15px] -translate-y-[10px] mx-5  line-clamp-2	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, officia.</p>
       
       </div>
       
    </div>
)
}
export default blog_card