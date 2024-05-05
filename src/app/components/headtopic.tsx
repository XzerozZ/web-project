import React from 'react'

type Props = {
    name: string;
    th_name: string;
}

 const headtopic = (props: Props) => {
  return (
    <div className='flex justify-center bg-[#FFFFFF] rounded-[10px] h-[65px] md:w-[1120px] max-sm:w-full max-sm:m-1'>
                  <span className='text-[#39DB4A] text-[30px] mt-3 mb-3 ml-[50px]'>{props.name}</span>
                  <span className=' text-[30px] mt-3 mb-3 mx-5'>|</span>
                  <span className=' text-[30px] mt-3 mb-3'>{props.th_name}</span>

    </div>
  )
}
export default headtopic