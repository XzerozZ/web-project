"use client"; 
import React, { useEffect, useState } from 'react'
import { Avatar, Loader, Progress, Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Comment from '../../components/commentComponent';
import { Tabs, Placeholder } from 'rsuite';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { AloneRestaurant, UserSession  } from '@/interface/interface';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";




const RestaurantDetail = () => {

 

    const router = useRouter();
    const session = useSession();
   

    const [sessionData, setSessionData] = useState<UserSession>();

   
    // ...
    useEffect(() => {
        if (session) {
            setSessionData(session?.data?.user);
        }
    }, [session]);
    // console.log(sessionData?.id,"sessionData.id");
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
    
   
    const [postComment, setPostComment] = useState('');

   
   
    console.log(dataRes,"dataRes")
    
    console.log(comment)
    useEffect(() => {
        fetchRestaurant(Value)
        fetchComment(Value)
        setSessionData(session?.data?.user);
       
        
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {

      
        const formData = new FormData();
        formData.append('description', postComment.toString());
        formData.append('res_id', Value.toString());
        formData.append('user_id', sessionData?.id?.toString() ?? '');
        formData.append('rating', hoverValue.toString());
       
        
       
      
        
        console.log(formData,"formData");
        try {
            const response = axios.post('/api/comment', formData);
            console.log(response,"response");
            
        } catch (error) {
            console.error(error);
        }
    };
      

  

    
  

  ///////////////////////////// calculate rating  % /////////////////////////////
    const size_comment = comment.length;
    const per_rate_one = ((dataRes?.ratingCounts[1] ?? 0) / size_comment) * 100;
    const per_rate_two = ((dataRes?.ratingCounts[2] ?? 0) / size_comment) * 100;
    const per_rate_three = ((dataRes?.ratingCounts[3] ?? 0) / size_comment) * 100;
    const per_rate_four = ((dataRes?.ratingCounts[4] ?? 0) / size_comment) * 100;
    const per_rate_five = ((dataRes?.ratingCounts[5] ?? 0) / size_comment) * 100;

    console.log(size_comment);
    console.log(dataRes?.ratingCounts[1] ?? 0, "dataRes?.ratingCounts[1]");
    console.log(dataRes?.ratingCounts[2] ?? 0, "dataRes?.ratingCounts[2]");
    console.log(dataRes?.ratingCounts[3] ?? 0, "dataRes?.ratingCounts[3]");
    console.log(dataRes?.ratingCounts[4] ?? 0,  "dataRes?.ratingCounts[4]");
    console.log(dataRes?.ratingCounts[5] ?? 0,  "dataRes?.ratingCounts[5]");

    
    console.log(per_rate_one);
    console.log(per_rate_two);
    console.log(per_rate_three);
    console.log(per_rate_four);
    console.log(per_rate_five);





    console.log(hoverValue);
    

      
     

        // loading state
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    if (dataRes === undefined) {
      setIsLoading(false);
    }
  }, [dataRes]);

//   if (isLoading) {
//     return  <div className='flex justify-center h-[500px] items-center'>
//       <Loader size="md"  color='black'/>
//     </div>
//   }else{


  const [isFav, setIsFav] = useState(false);
     

  const handleFav = async () => {
    
    setIsFav(true)
    console.log(sessionData?.id?.toString())
    console.log(Value.toString())

    const formData = new FormData();
    formData.append('user_id', sessionData?.id?.toString() ?? '');
    formData.append('res_id', Value.toString());
    
    const res = axios.post('/api/favorite', formData).then((res) => {
        console.log(res);
    
    })

   
  };


  const deleteFav = async () => {
    
    setIsFav(false)
    console.log(sessionData?.id?.toString())
    console.log(Value.toString())

    const formData = new FormData();
    formData.append('user_id', sessionData?.id?.toString() ?? '');
    formData.append('res_id', Value.toString());
    
    const res = axios.delete('/api/favorite', { data: formData }).then((res) => {
        console.log(res);
    
    })

   
  };

  return (
    <>
     <main className='w-full  bg-[#FAFAFA]  items-center '>
        <div className='  '>
        <div className='bg-[#E3E3E3] w-full '>
            <div className='flex justify-center p-5'>
                <div className='w-[1120px] flex flex-row justify-between'>
                   <div>
                   <div className='text-[30px]'>
                      {
                            dataRes?.name
                      }
                    </div>
                    <div className='flex flex-row'>
                        <Rate max={1} defaultValue={1} allowHalf color='orange' readOnly/>
                        <h3 className='text-[25px]'>{dataRes?.averageRating.toFixed(2)}</h3>
                    </div>
                    <div>
                      {
                            dataRes?.categories.map((data,index) => (
                                <span key={index} className='text-[20px]'>{data}  </span>
                            ))
                      }
                    </div>
                   </div>
                   <div className=' my-auto'>
                   {isFav ? (
                      <FaHeart onClick={() => deleteFav()} className='text-[#ff0000]' size={35} />
                     
                    ) : (
                        
                        <FaRegHeart onClick={() => handleFav()} size={35} />
                    )}

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
                                <img src={dataRes?.image} alt='image'  className='rounded-[10px] w-full aspect-square'></img>
                            </div>
                            <div>
                                <img src={dataRes?.image_background} alt='image'  className='rounded-[10px] w-full aspect-square'></img>
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
                                                <Progress.Line percent={per_rate_one} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={2}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_two} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={3}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_three} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={4}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_four} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={5}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_five} showInfo={false} strokeColor="#787F82" />
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
                                                    <form className='m-1 flex flex-col gap-3' onSubmit={handleSubmit}>
                                                        <div>
                                                            <span>Natchapon Ponlaem</span>
                                                        </div>
                                                        <div>
                                                        <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                                                           
                                                            
                                                                 
                                                                   <input className='border-none block bg-transparent w-full border  rounded-md p-3 focus:outline-none focus:border-none focus:ring-0  sm:text-sm' 
                                                                   placeholder="แสดงความคิดเห็น" 
                                                                   type="submit" 
                                                                   name="comment" 
                                                                   value={postComment}
                                                                   onChange={(e) => {setPostComment(e.target.value)}}></input>
                                                                    <button dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2' type='submit'>
                                                                        <span className='m-2 text-white'>Post</span>
                                                                    </button>
                                                                  
                                                                
                                                                
                                                           
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
                                <Rate readOnly defaultValue={1}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_one} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={2}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_two} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={3}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_three} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={4}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_four} showInfo={false} strokeColor="#787F82" />
                                                </div>
                                                <div className='flex-row flex'>
                                                <Rate readOnly defaultValue={5}  size='xs' color='orange'/>
                                                <Progress.Line percent={per_rate_five} showInfo={false} strokeColor="#787F82" />
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
                                    <form className='m-1 flex flex-col gap-3' onSubmit={handleSubmit}>
                                        <div>
                                            <span>Natchapon Ponlaem</span>
                                        </div>
                                        <div>
                                        <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                                               <div>
                                                <input className='border-none block bg-transparent w-full border  rounded-md p-3 focus:outline-none focus:border-none focus:ring-0  sm:text-sm'
                                                placeholder="แสดงความคิดเห็น" 
                                                type="text"
                                                name="comment" 
                                                value={postComment}
                                                onChange={(e) => {setPostComment(e.target.value)}}
                                                 />
                                                    <div dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2'>
                                                      <button type='submit'>  <span className='m-2 text-white'>Post</span></button>
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
}
export default RestaurantDetail