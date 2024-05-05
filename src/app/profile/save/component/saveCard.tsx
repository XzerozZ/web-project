import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'
import {  SaveData } from '@/interface/interface'


const saveCard = ({data} : {data : SaveData}) => {
  return (
    <div className="flex flex-row gap-3 bg-white rounded-[10px]">
    <div className="w-1/3">
      <img src={data.restaurant.image} alt="" className='aspect-square rounded-l-[10px]'/>
    </div>
    <div className='flex flex-col'>
      <div className="">
        <h4>{data.restaurant.name}</h4>
      </div>
      <div className="">
       {data.restaurant.address}
      </div>
    </div>
  </div>
  )
}
export default saveCard