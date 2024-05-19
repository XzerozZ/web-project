import {  CatRank } from '@/interface/interface'
import { Table } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'



 const tableRanking = ({data} : {data: CatRank[]}) => {
  const router = useRouter()


  const onClicktoRestaurant = (id: number) => {
    router.push(`/restaurant/${id}`)
    
  }
  return (
    <>
     <div className="w-full">
      <Table >
        <Table.Head>
          <Table.HeadCell>Rank</Table.HeadCell>
          <Table.HeadCell>Restaurant name</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
         
         
        </Table.Head>
        <Table.Body className="divide-y">
          {
            data.map((item, index) => (
                
              <Table.Row key={index} className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]   hover:no-underline' onClick={() => onClicktoRestaurant(item.res_id)}>
           
          
              <Table.Cell> {index + 1} </Table.Cell>

            
             
              <Table.Cell> {item.name}</Table.Cell>

             
           
                      <Table.Cell> {item.averageRating}</Table.Cell>
                  
              
               
              </Table.Row>
            ))
          }
        
      
        </Table.Body>
      </Table>
    </div>
    </>
  )
}
export default tableRanking