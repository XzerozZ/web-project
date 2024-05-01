"use client"; 
import React, { useEffect, useState } from 'react'
import { Avatar, Loader, Progress, Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Image from 'next/image'
import image from '/public/restaurant.webp'
import Comment from '../../components/commentComponent';
import { Tabs, Placeholder } from 'rsuite';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { AloneRestaurant, ratingData, sessionData } from '@/interface/interface';
import { set } from 'mongoose';








const RestaurantDetail = () => {

 

    const router = useRouter();
    const session = useSession();

    // useEffect(() => {
    //     // if (session.data === null) {
    //     // router.push('/auth/signin');
    //     // }
    // }, [session,router]);

    const params = useParams();
    
    const Value = Number(params.id);

    const [dataRes, setDataRes] = useState<AloneRestaurant>();
    const fetchRestaurant = async (id:Number) => {
        axios.get(`/api/restuarant/${id}`)
        .then((res) => {
            console.log(res.data)
            setDataRes(res.data)
            
        })
    }

    const [comment, setComment] = useState([]);
    const fetchComment = async (id:Number) => {
        axios.get(`/api/comment/res/${id}`)
        .then((res) => {
            
            setComment(res.data)
            
        })
    }

    
    const [hoverValue, setHoverValue] = React.useState<number>(0);
    
   
    const [postComment, setPostComment] = useState({
        description: '',
       
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('description', postComment.description);
        formData.append('res_id', Value.toString());
        
        e.preventDefault();
        const RatingFormData = new FormData();
        RatingFormData.append('rating', hoverValue.toString());
        RatingFormData.append('res_id', Value.toString());


        try {
            const response = await axios.post('/api/comment', formData);
            console.log(response);
            const responseRating = await axios.post('/api/rating', RatingFormData);
            console.log(responseRating);
        } catch (error) {
            console.error(error);
        }
    };

    

    
    console.log(comment)
    useEffect(() => {
        fetchRestaurant(Value)
        fetchComment(Value)
        
    }, []);
      

  

    
  

    const ProgressNumber = {
        width: '50%'
    }
  
    console.log(hoverValue);
    

      
     

        // loading state
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (dataRes === undefined) {
      setIsLoading(false);
    }
  }, [dataRes]);

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }else{

  return (
    <>
     <main className='w-full  bg-[#FAFAFA]  items-center '>
        <div className='  '>
        <div className='bg-[#E3E3E3] w-full '>
            <div className='flex justify-center p-5'>
                <div className='w-[1120px] '>
                    <div className='text-[30px]'>
                      {
                            dataRes?.name
                      }
                    </div>
                    <div className='flex flex-row'>
                        <Rate defaultValue={dataRes?.averageRating} allowHalf color='orange'/>
                        <h3 className='text-[25px]'>{dataRes?.averageRating}</h3>
                    </div>
                    <div>
                      {
                            dataRes?.categories.map((data,index) => (
                                <span key={index} className='text-[20px]'>{data}  </span>
                            ))
                      }
                    </div>
                </div>

            </div>
        </div>
        <div className='w-full '>
            <div className='flex justify-center '>
            <div className=' flex flex-row justify-center  gap-5 my-10 mx-[160px] max-sm:mx-0 w-[1120px] items-start'>
            <div className='w-1/4 n max-sm:hidden flex flex-col bg-white rounded-[10px] p-3 gap-2'>
                <div>
                    <h3>ที่อยู่</h3>
                    <p>{dataRes?.address}</p>
                </div>
                <div>
                    <h3>เวลาเปิดร้าน</h3>
                    <div>
                        {
                            dataRes?.openingHours.map((data,index) => (
                                <p key={index}>{data}</p>
                            ))
                        }
                    </div>
                </div> 
                <div>
                    <h3>เบอร์โทร</h3>
                    <p>{dataRes?.phone_number}</p>
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
                        <div className='text-[20px] max-sm:hidden'>
                                {
                                    dataRes?.description
                                }                           
                        </div>
                        <div className='sm:hidden'>
                            <Tabs defaultActiveKey="1" appearance="subtle">
                                <Tabs.Tab eventKey="1" title="ข้อมูลร้าน" >
                                    <div>
                                        {
                                            dataRes?.description
                                        }
                                    </div>
                                    <div className='w-full n sm:hidden flex flex-col bg-white rounded-[10px] p-3 gap-3'  >
                                        <div>
                                            <h5>ที่อยู่</h5>
                                            <p>{dataRes?.address}</p>
                                        </div>
                                        <div>
                                            <h5>เวลาเปิดร้าน</h5>
                                            <div>
                                                {
                                                    dataRes?.openingHours.map((data,index) => (
                                                        <p key={index}>{data}</p>
                                                    ))
                                                }
                                            </div>
                                        </div> 
                                        <div>
                                            <h5>เบอร์โทร</h5>
                                            <p>{dataRes?.phone_number}</p>
                                        </div>
                                    </div>
                                </Tabs.Tab>
                                <Tabs.Tab eventKey="2" title="รีวิว">
                                    <div className='rounded-[10px] bg-white p-2 '>
                                        <h3>แสดงความคิดเห็น</h3>
                                        <div className='showrating flex flex-row'>
                                            <div className='w-1/3 flex-col flex '>
                                                <div className='text-[80px] text-center'>
                                                1 
                                                </div>
                                                <div className='text-[30px] text-center'>
                                                    จาก 5
                                                </div>
                                            </div>
                                            <div className='w-2/3 flex flex-col p-4'>
                                                <div className='flex-row flex '>
                                                <Rate readOnly defaultValue={1}  size='xs' color='orange'/>
                                                <Progress.Line percent={100} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={2}  size='xs' color='orange'/>
                                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={3}  size='xs' color='orange'/>
                                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={4}  size='xs' color='orange'/>
                                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={5}  size='xs' color='orange'/>
                                                <Progress.Line percent={0} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                            
                                            
                                                
                                                
                                            

                                            </div>
                                        </div>
                                        <div className='rating flex justify-center'>
                                                <div className='flex flex-col justify-center w-[340px] shadow-xl  p-5 m-3 rounded-lg'>
                                                    <div className='text-center'> 
                                                        <h3 className='text-bold text-[25px] '>ให้คะแนนร้านนี้</h3>
                                                        <Rate defaultValue={2} onChangeActive={setHoverValue} color='orange'/>
                                                
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='comment flex flex-row justify-between m-10'>
                                            <div className=''>
                                            <Avatar size="lg" circle />
                                            </div>
                                            <div className='grow'>
                                                <div className='w-full  '>
                                                    <form className='m-1 flex flex-col gap-3'>
                                                        <div>
                                                            <span>Natchapon Ponlaem</span>
                                                        </div>
                                                        <div>
                                                        <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                                                            <div>
                                                                <div>
                                                                   {/* <form >
                                                                   <input className='border-none block bg-transparent w-full border  rounded-md p-3 focus:outline-none focus:border-none focus:ring-0  sm:text-sm' placeholder="แสดงความคิดเห็น" type="submit" name="search" />
                                                                    <button dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2'>
                                                                        <span className='m-2 text-white'>Post</span>
                                                                    </button>
                                                                   </form> */}
                                                                  </div>
                                                                
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div> 
                                        <div className='rounded-[10px] bg-white p-2 '>
                                            <h3>ความคิดเห็น</h3>
                                            <div className='flex flex-col gap-4 p-3'>
                                                {
                                                    comment.map((data,index) => (
                                                        <Comment key={index} data={data}/>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </div>
         
                                </Tabs.Tab>
                               
                            </Tabs>
                        </div>
                        
                    </div>
                    <div className='rounded-[10px] bg-white p-2 max-sm:hidden'>
                        <h3>แสดงความคิดเห็น</h3>
                        <div className='showrating flex flex-row'>
                            <div className='w-1/3 flex-col flex '>
                                <div className='text-[80px] text-center'>
                                   1 
                                </div>
                                <div className='text-[30px]  text-center'>
                                    จาก 5
                                </div>
                            </div>
                            <div className='w-2/3 flex flex-col p-3'>
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
                                <div className='flex flex-col justify-center w-[340px] shadow-xl  p-5 m-3 rounded-lg'>
                                    <div className='text-center'> 
                                        <h3 className='text-bold text-[25px] '>ให้คะแนนร้านนี้</h3>
                                        <Rate defaultValue={2} onChangeActive={setHoverValue} />
                                
                                    </div>
                                </div>
                        </div>
                        <div className='comment flex flex-row justify-between m-10'>
                            <div className=''>
                            <Avatar size="lg" circle />
                            </div>
                            <div className='grow'>
                                 <div className='w-full  '>
                                    <form className='m-1 flex flex-col gap-3'>
                                        <div>
                                            <span>Natchapon Ponlaem</span>
                                        </div>
                                        <div>
                                        <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                                               <div>
                                                <input className='border-none block bg-transparent w-full border  rounded-md p-3 focus:outline-none focus:border-none focus:ring-0  sm:text-sm' placeholder="แสดงความคิดเห็น" type="text" name="search"/>
                                                    <div dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2'>
                                                        <span className='m-2 text-white'>Post</span>
                                               </div>
                                                
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                 </div>
                            </div>
                            <div>

                            </div>
                        </div> 

                    </div>
                    <div className='rounded-[10px] bg-white p-2 max-sm:hidden'>
                        <h3>ความคิดเห็น</h3>
                       <div className='flex flex-col gap-4 p-3'>
                          {
                            comment.map((data,index) => (
                                <Comment key={index} data={data}/>
                                
                            ))
                          }
                       </div>
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
}}
export default RestaurantDetail