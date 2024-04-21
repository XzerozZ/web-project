"use client"; 
import React, { useState } from 'react'
import { Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


type Props = {}


const RestaurantDetail = (props: Props) => {

   

  return (
    <>
     <main className='w-full  bg-[#FAFAFA]  items-center '>
        <div className='  '>
        <div className='bg-[#E3E3E3] w-full '>
            <div className='flex justify-center py-5'>
                <div className='w-[1120px] '>
                    <div className='text-[30px]'>
                        ร้านส้มตำนายถานี
                    </div>
                    <div className='flex flex-row'>
                        <Rate defaultValue={3} allowHalf color='orange'/>
                        <h3 className='text-[25px]'>5</h3>
                    </div>
                    <div>
                        ส้มตำ/อาหารอีสาน
                    </div>
                </div>

            </div>
        </div>
        <div className='w-full '>
            <div className='flex justify-center '>
            <div className=' flex flex-row justify-center items-center gap-5 my-10 mx-[160px] max-sm:mx-0 w-[1120px]'>
            <div className='w-1/4 max-sm:hidden flex flex-col bg-white rounded-[10px]'>
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
            </div>
        </div>
        
        </div>

    </main>
    
    </>
  )
}
export default RestaurantDetail