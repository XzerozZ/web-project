import React from 'react'
import { CiStar } from "react-icons/ci";

import { AllRestaurant } from '@/interface/interface';
import Link from 'next/link';
import { Rate } from 'rsuite';
import Image from 'next/image'


const product_card = ({data} : {data:AllRestaurant}) => {
  return (
    <>
    
   <Link href={`/restaurant/${data.res_id}`} className='hover:text-black no-underline text-black hover:no-underline'>
     <div className='rounded-[10px] shadow-md hover:scale-105 m-1'>
       
       <div >
           <div >
           
          <Image src={data.image} alt='image' width={300} height={100} className="rounded-t-lg aspect-square" />
          
           </div>
          <div className=' flex flex-col px-3 pb-2'>
             <div>
                 <h1 className='text-[18px] sm:line-clamp-2 line-clamp-1'>{data.name}</h1>
             </div>
             <div className='flex '> 
               <span >   <Rate max={1} defaultValue={1} readOnly color='yellow'/> </span>
               <span className='text-[20px] m-1'>{data.averageRating.toFixed(2)}</span>
             </div>  
          </div>
       </div>

   </div>
   </Link>
    </>
  )
}

export default product_card