import React from 'react'
import Poster from './components/image-component/poster'
import Product_card from './components/product_card'


type Props = {}

const Home = (props: Props) => {
  return (
    
    <>
   <body className='w-full h-full bg-[#FAFAFA]'>
        <div className='flex justify-center gap-10 mt-[120px] max-sm:mt-[50px] mb-11'>
            <div>
              <Poster width={400} height={150}/>
            </div>
            <div className=' max-sm:hidden'>
              <Poster width={400} height={150}/>
            </div>

        </div>
        
        <div className='w-full flex flex-col justify-center items-center '>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] w-[1120px]'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3'>Restaurant</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3'>ร้านอาหาร</span>

            </div>

            <div>
               <Product_card />
            </div>
        </div>

   </body>
    </>
  )
}

export default Home