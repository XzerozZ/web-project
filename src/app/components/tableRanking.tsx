import {  CatRank } from '@/interface/interface'
import { Table } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'



 const tableRanking = ({data} : {data: CatRank[]}) => {
  return (
    <>
     <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Rank</Table.HeadCell>
          <Table.HeadCell>Restaurant name</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
         
         
        </Table.Head>
        <Table.Body className="divide-y">
          {
            data.map((item, index) => (
                
              <Table.Row key={index}>
               
                <Table.Cell> <Link href={`/restaurant/${item.res_id}`} className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]   hover:no-underline'>{index + 1} </Link></Table.Cell>
                <Table.Cell> <Link href={`/restaurant/${item.res_id}`} className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]   hover:no-underline'>{item.name}</Link></Table.Cell>
                <Table.Cell> <Link href={`/restaurant/${item.res_id}`} className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]   hover:no-underline'>{item.averageRating}</Link></Table.Cell>
                
               
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