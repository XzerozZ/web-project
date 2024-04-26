import React from 'react'
import Blog_card from '../components/blog_card'


type Props = {}

const blog = (props: Props) => {
  return (
    <>
    <div className='w-full  bg-[#FAFAFA]'>
       <div className='flex justify-center bg-[#E3E3E3] '>
        <div className='w-[1140px]'>
              <div className='  max-sm:w-full py-5 max-sm:py-3 max-sm:ml-0'>
              <span className='text-[#39DB4A] text-[60px] mr-3  max-sm:text-[40px]'>Blog</span>
                    <span className=' text-[60px] max-sm:text-[40px]'>|</span>
                    <span className=' text-[60px] ml-3  max-sm:text-[40px]'>บทความ</span>
              </div>
          </div>
       </div>
       <div className='flex justify-center'>
          <div className='w-[1140px]'>
          <div className=' flex flex-row justify-center items-center gap-4 my-10  max-sm:mx-0'>
                
                <div className='max-sm:w-full'>
                    <div className='grid grid-cols-4 gap-1 max-sm:grid-cols-2  max-sm:w-full'>
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                      <Blog_card />
                    
                    </div>
                </div>
            </div>
         </div>
       </div>

    </div>
    </>
  )
}
export default blog