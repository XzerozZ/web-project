"use client"; 
import React, { useState } from 'react'
import { Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


type Props = {}


const RestaurantDetail = (props: Props) => {

   

  return (
    <>
     <body className='w-full  bg-[#FAFAFA]'>
        <div className='bg-[#E3E3E3] w-full '>
            <div className=' ml-[160px]  max-sm:w-full pt-5 max-sm:py-3 max-sm:ml-0'>
                <span className='text-black text-[25px] mr-3  max-sm:text-[40px]'>ร้านส้มตำบ้านนายถานี</span>
                
            </div>
            <div className='flex flex-row ml-[160px]  max-sm:w-full  max-sm:py-3 max-sm:ml-0'>
                <Rate readOnly defaultValue={5} allowHalf />
                <div className='text-[25px] '>5</div>
            </div>
            <div>

            </div>
            <div className=' ml-[160px]  max-sm:w-full pb-5 max-sm:py-3 max-sm:ml-0'>
                <span className='text-black text-[15px] mr-3  max-sm:text-[40px]'>อาหารอีสาน/ส้มตำ</span>
            </div>
        </div>
        <div className=' flex flex-row justify-center items-center gap-5 my-10 mx-[160px] max-sm:mx-0'>
            <div className='w-2/5 max-sm:hidden flex flex-col'>
                <div>
                    <h3>ที่อยู่</h3>
                    <p></p>
                </div>
                <div>
                    <h3>เวลาเปิดร้าน</h3>
                    <p></p>
                </div> 
                <div>
                    <h3>เบอร์โทร</h3>
                    <p></p>
                </div>
            </div>
            <div className='w-3/4 max-sm:w-full'>
                <div className='  max-sm:w-full flex flex-col gap-3'>
                    <div className='rounded-[10px] bg-white p-2'>
                        <div className='flex flex-row'>

                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias adipisci cumque consequuntur vero non ducimus nihil, architecto voluptates dicta, earum dolore quae exercitationem eius magni fugit, deleniti doloremque modi officiis?
                        </div>
                    </div>
                    <div className='rounded-[10px] bg-white p-2'>
                        <h3>แสดงความคิดเห็น</h3>
                    </div>
                    <div className='rounded-[10px] bg-white p-2'>
                        <h3>ความคิดเห็น</h3>
                    </div>
                
                </div>
            </div>
        </div>
        

    </body>
    
    </>
  )
}
export default RestaurantDetail