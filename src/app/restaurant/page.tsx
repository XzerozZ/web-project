import React from 'react'
import Product_card from '../components/product_card'


type Props = {}

const restaurant = (props: Props) => {

  
  return (
    <>
    <div className='w-full  bg-[#FAFAFA]'>
        <div className='bg-[#E3E3E3] w-full '>
            <div className=' ml-[120px]  max-sm:w-full py-5 max-sm:py-3 max-sm:ml-0'>
            <span className='text-[#39DB4A] text-[60px] mr-3  max-sm:text-[40px]'>Restaurant</span>
                  <span className=' text-[60px] max-sm:text-[40px]'>|</span>
                  <span className=' text-[60px] ml-3  max-sm:text-[40px]'>ร้านอาหาร</span>
            </div>
        </div>
        <div className=' flex flex-row justify-center items-center gap-5 my-10 mx-[160px] max-sm:mx-0'>
            <div className='w-1/4 max-sm:hidden'>
                    filter
            </div>
            <div className='w-3/4 max-sm:w-full'>
                <div className='grid grid-cols-3 gap-2 max-sm:grid-cols-2  max-sm:w-full'>
                <Product_card />
                <Product_card />
                <Product_card />
                <Product_card />
                <Product_card />
                <Product_card />
                <Product_card />
                
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
export default restaurant