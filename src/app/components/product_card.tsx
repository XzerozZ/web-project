import React from 'react'
import { CiStar } from "react-icons/ci";
import Image from 'next/image'
import image from '/public/restaurant.webp'
import { AllRestaurant } from '@/interface/interface';
import Link from 'next/link';


const product_card = ({data} : {data:AllRestaurant}) => {
  return (
    <>
    
   <Link href={`/restaurant/${data.res_id}`}>
     <div className='rounded-[10px] shadow-md hover:scale-105 m-2'>
       
       <div >
           <div >
               <Image src={image} alt='image'  sizes='100vw' className='rounded-t-lg'></Image>
           </div>
          <div className='mx-3 mt-1'>
           <div>
                 <h1 className='text-[20px] sm:line-clamp-2 line-clamp-1'>{data.name}</h1>
             </div>
             <div className='flex '> 
               <span ><CiStar size={25} className='m-[7px] '/></span>
               <span className='text-[20px] m-1'>4.43</span>
             </div>  
          </div>
       </div>

   </div>
   </Link>
    </>
  )
}

export default product_card