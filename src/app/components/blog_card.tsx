import React from 'react'
import Image from 'next/image'
import image from '/public/restaurant.webp'
import { AllBlog } from '@/interface/interface'
import Link from 'next/link'



const blog_card = ({data}: {data:AllBlog}) => {
return (
  <>
  <Link href={`/blog/${data.blog_id}`}>
  <div className="hover:scale-105 relative m-2">
    
       <div className=''>
         <Image src={image} alt='image' sizes='100vw' className="rounded-lg " priority={true}></Image>
         <div className="absolute inset-0 bg-black opacity-0 sm:opacity-20 rounded-lg blur-sm sm:hover:opacity-0"></div>
       </div>
       
       <div className='absolute bottom-0 left-0 overlay'>
        <p className="text-white text-[15px] -translate-y-[10px] mx-5  line-clamp-2	">{data.title}</p>
       
       </div>
       
    </div></Link>
  </>
)
}
export default blog_card