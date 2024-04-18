import React from 'react'
import { CiStar } from "react-icons/ci";
import Image from 'next/image'
import image from '/public/restaurant.webp'
type Props = {}

const product_card = (props: Props) => {
  return (
    <>
    <div className='rounded-[10px] shadow-md'>
       
        <div >
            <div >
                <Image src={image} alt='image'  sizes='100vw' className='rounded-t-lg'></Image>
            </div>
           <div className='m-3'>
            <div>
                  <h1 className='text-[25px]'>Starbuck @kmutt</h1>
              </div>
              <div className='flex '> 
                <span ><CiStar size={25} className='m-[7px] '/></span>
                <span className='text-[20px] m-1'>4.43</span>
              </div>  
           </div>
        </div>

    </div>
    </>
  )
}

export default product_card