"use client"; 
import React, { useState } from 'react'
import { Progress, Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Image from 'next/image'
import image from '/public/restaurant.webp'



type Props = {
    texts: string[];
}


const RestaurantDetail = (props: Props) => {

    const ProgressNumber = {
        width: '50%'
    }
    const [hoverValue, setHoverValue] = React.useState(3);

    
    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
      };

      const texts = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent'
      };

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
                        <Rate defaultValue={1} allowHalf color='orange'/>
                        <h3 className='text-[25px]'>1</h3>
                    </div>
                    <div>
                        ส้มตำ/อาหารอีสาน
                    </div>
                </div>

            </div>
        </div>
        <div className='w-full '>
            <div className='flex justify-center '>
            <div className=' flex flex-row justify-center  gap-5 my-10 mx-[160px] max-sm:mx-0 w-[1120px] items-start'>
            <div className='w-1/4 n max-sm:hidden flex flex-col bg-white rounded-[10px] p-3 ' >
                <div>
                    <h3>ที่อยู่</h3>
                    <p>R3GW+638, Thammasala, Mueang Nakhon Pathom District, Nakhon Pathom 73000</p>
                </div>
                <div>
                    <h3>เวลาเปิดร้าน</h3>
                    <p>จันทร์ - อังคาร	10:00 - 15:00 <br/>
                        พฤหัสบดี - อาทิตย์	10:00 - 15:00</p>
                </div> 
                <div>
                    <h3>เบอร์โทร</h3>
                    <p>081-705-4942 <br/>
                    095-556-1659</p>
                </div>
            </div>
            <div className='w-3/4 max-sm:w-full'>
                <div className='  max-sm:w-full flex flex-col gap-3'>
                    <div className='rounded-[10px] bg-white p-4 flex flex-col gap-3'>
                        <div className='flex flex-row gap-3 '>
                                <div>
                                    <Image src={image} alt='image'  sizes='10vw' className='rounded-[10px]'></Image>
                                </div>
                                <div>
                                    <Image src={image} alt='image'  sizes='10vw' className='rounded-[10px]'></Image>

                                </div>
                        </div>
                        <div className='text-[20px] max-sm:10px'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit corrupti dolores velit quaerat eos, laudantium, tempore modi deleniti esse nobis, quidem ut consequatur harum aperiam voluptatem consequuntur? Ut voluptates distinctio explicabo molestias magni iure repudiandae beatae, delectus consequuntur minima! Deserunt nam similique quia illo officiis ea hic modi molestias?
                        </div>
                    </div>
                    <div className='rounded-[10px] bg-white p-2'>
                        <h3>แสดงความคิดเห็น</h3>
                        <div className='showrating flex flex-row'>
                            <div className='w-1/3 flex-col flex '>
                                <div className='text-[80px]'>
                                   1 
                                </div>
                                <div className='text-[30px]'>
                                    จาก 5
                                </div>
                            </div>
                            <div className='w-2/3 flex flex-col '>
                                <div className='flex-row flex'>
                                <Rate readOnly defaultValue={1}  size='xs' />
                                <Progress.Line percent={100} showInfo={false} strokeColor="#787F82" />
                                </div>
                                <div className='flex-row flex'>
                                <Rate readOnly defaultValue={2}  size='xs' />
                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                </div>
                                <div className='flex-row flex'>
                                <Rate readOnly defaultValue={3}  size='xs' />
                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                </div>
                                <div className='flex-row flex'>
                                <Rate readOnly defaultValue={4}  size='xs' />
                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                </div>
                                <div className='flex-row flex'>
                                <Rate readOnly defaultValue={5}  size='xs' />
                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                </div>
                               
                               
                                
                                
                               

                            </div>
                        </div>
                        <div className='rating flex justify-center'>
                                <div>
                                <Rate defaultValue={2} onChangeActive={setHoverValue} />
                                
                                </div>
                        </div>
                        <div className='comment'>

                        </div>

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