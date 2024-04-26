import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'

type Props = {}

const blogCard = (props: Props) => {
  return (
    <div className="flex flex-row gap-3 bg-white">
    <div className=" w-1/3">
        <Image src={ImageRes} alt="Restaurant" className='rounded-l-[10px]'/>
    </div>
  <div className='flex flex-col'>
    <div className="">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum ab consequatur, omnis beatae odio.</h4>
      </div>
      <div className="">
         
          <h6>Sat 25 2022 11.25</h6>
      </div>
  </div>
</div>
  )
}

export default blogCard