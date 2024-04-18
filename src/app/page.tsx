import React from 'react'
import Poster from './components/image-component/poster'
import Product_card from './components/product_card'


type Props = {}

const Home = (props: Props) => {
  return (
    
    <>
   <body className='w-full  bg-[#FAFAFA]'>
        <div className='flex justify-center gap-10 mt-[120px] max-sm:mt-[50px] mb-11'>
            <div>
              <Poster width={400} height={150}/>
            </div>
            <div className=' max-sm:hidden'>
              <Poster width={400} height={150}/>
            </div>

        </div>
        
        <div className='w-full flex flex-col justify-center items-center gap-5 '>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] xl:w-[1120px] max-sm:w-full max-sm:m-5'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3'>Restaurant</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3 mr-[10px]'>ร้านอาหาร</span>

            </div>

            <div className='grid grid-cols-4 gap-4  max-sm:grid-cols-2 xl:w-[1120px] max-sm:w-full'>
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
              
            </div>
            <div className=' bg-[#EAECEE] rounded-[10px] xl:w-[1120px] max-sm:w-full max-sm:m-5'><h3 className="text-center text-[20px] m-2">ดูทั้งหมด</h3></div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5 '>
            <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] xl:w-[1120px] max-sm:w-full max-sm:m-5'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3 ml-[50px]'>Blog</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3'>บทความ</span>

            </div>

            <div className='grid grid-cols-4 gap-4  max-sm:grid-cols-2 xl:w-[1120px] max-sm:w-full'>
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
               <Product_card />
              
            </div>
            <div className=' bg-[#EAECEE] rounded-[10px] xl:w-[1120px] max-sm:w-full max-sm:m-5'><h3 className="text-center text-[20px] m-2">ดูทั้งหมด</h3></div>
        </div>


   </body>
    </>
  )
}

export default Home