import React from 'react'
import ImageRes from '/public/restaurant.webp'
import Image from 'next/image'

type Props = {}

const saveCard = (props: Props) => {
  return (
    <div className="flex flex-row gap-3 bg-white">
    <div className=" w-1/3">
        <Image src={ImageRes} alt="Restaurant" className='rounded-l-[10px]'/>
    </div>
  <div className='flex flex-col'>
    <div className="">
          <h3>Starbuck @kmutt</h3>
      </div>
      <div className="">
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, aliquam!</h4>
      </div>
  </div>
</div>
  )
}
export default saveCard