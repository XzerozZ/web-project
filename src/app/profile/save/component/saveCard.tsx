import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'
import {  SaveData } from '@/interface/interface'
import Link from 'next/link'


const saveCard = ({data} : {data : SaveData}) => {

  
    
   
   

  return (
    <Link href={`/restaurant/${data?.res_id}` } className='hover:text-black no-underline text-black hover:no-underline hover:border-[#39db5a] hover:rounded-[10px] hover:border'>
    <div className="flex flex-row gap-3 bg-white rounded-[10px]">
    <div className="w-1/3">
      <img src={data?.restaurant.image} alt="" className='aspect-square rounded-l-[10px]'/>
    </div>
    <div className='flex flex-col w-2/3'>
      <div className="">
        <h4>{data?.restaurant.name}</h4>
      </div>
      <div className="max-sm:hidden">
       {data?.restaurant.address}
      </div>
    </div>
    
  </div>
    </Link>
  )
}
export default saveCard