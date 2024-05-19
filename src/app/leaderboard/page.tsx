"use client"
import React, { use, useEffect, useState } from 'react'
import TableRanking from '../components/tableRanking'
import axios from 'axios';
import { CatRank } from '@/interface/interface';
import { Rate } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


const page = () => {
    const [foodRanking, setFoodRanking] = useState<CatRank[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const fetchRanking = async () => {
      axios.get('/api/leaderboard')
      .then((res) => {
          console.log(res.data)
          setFoodRanking(res.data)
          
      })
    }
    useEffect(() => {
        fetchRanking();
    }, []);
    
return (
    <>
            
            <div className='flex flex-col justify-center bg-[#fafafa]  text-black'>
                            <div className='bg-[#fafafa] flex w-full justify-center p-5 h-[800px]'>
                                            <div className='flex flex-col w-[1140px]  gap-5 '>
                                                    <div>
                                                            <h1 className='text-[40px]'>Leaderboard</h1>
                                                    </div>
                                                 <div className='flex justify-center '>
                                                 <div className='flex justify-between w-[700px] max-sm:w-full flex-col gap-3'>
                                                                <div className='flex justify-center'>
                                                                    <div className=''>
                                                                       
                                                                         {
                                                                                foodRanking[0] && 
                                                                                <div className='flex justify-center flex-col'>
                                                                                    <div className='flex justify-center'>
                                                                                        <img src={foodRanking[0].image} alt="" className='rounded-full w-[100px] h-[100px]   '/>

                                                                                    </div>
                                                                                    <h3 className='text-lg'>1 {foodRanking[0].name} <span><Rate max={1} size='sm' color='yellow' readOnly defaultValue={1}/>{foodRanking[0].averageRating}</span></h3>
                                                                                </div>
                                                                         }
                                                                    </div>
                                                                
                                                                </div>
                                                            <div className='flex justify-between'>
                                                            <div className=''>
                                                                       
                                                                       {
                                                                              foodRanking[0] && 
                                                                              <div className='flex justify-center flex-col'>
                                                                                  <div className='flex justify-center'>
                                                                                      <img src={foodRanking[1].image} alt="" className='rounded-full w-[100px] h-[100px] '/>

                                                                                  </div>
                                                                                  <h3 className='text-lg'>2 {foodRanking[1].name} <span><Rate max={1} size='sm' readOnly defaultValue={1} color='yellow'/>{foodRanking[1].averageRating}</span></h3>
                                                                              </div>
                                                                       }
                                                                  </div>
                                                                  <div className=''>
                                                                       
                                                                       {
                                                                              foodRanking[0] && 
                                                                              <div className='flex justify-center flex-col'>
                                                                                  <div className='flex justify-center'>
                                                                                      <img src={foodRanking[2].image} alt="" className='rounded-full w-[100px] h-[100px] '/>

                                                                                  </div>
                                                                                  <h3 className='text-lg'>3 {foodRanking[2].name} <span><Rate max={1} size='sm' color='yellow' readOnly defaultValue={1}/>{foodRanking[2].averageRating}</span></h3>
                                                                              </div>
                                                                       }
                                                                  </div>
                                                            </div>
                                                    </div>
                                                 </div>
                                                    <div>
                                                    <TableRanking data={foodRanking}/>
                                                    </div>

                                            </div>
                            </div>
            </div>
    </>
)
}

export default page