"use client"
import axios from 'axios';
import {Sidebar } from 'flowbite-react';
import { Table } from "flowbite-react";

import React, { ChangeEvent, useEffect, useState } from 'react'
import { RiAdminFill } from 'react-icons/ri';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";


import 'rsuite/dist/rsuite.min.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { set } from 'mongoose';

const page = () => {
    const [data, setData] = useState([]);
   
   


    const fetchComment = async () => {
        axios.get('/api/comment')
        .then((res) => {
            // console.log(res.data)
            setData(res.data)
            
        })
      }

    useEffect(() => {
        fetchComment(),[]})

   
    const deleteRestaurant = (id:any) => {
        const formData = new FormData();
        formData.append('id',id)
        axios.delete(`/api/restuarant`, { data: formData })
    }

  return (
   <>
 


<div className='flex justify-center'>
	<div>
	
	</div>
	<div className='w-full flex flex-row '>
		<div className='w-1/5'>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/restaurant" icon={HiChartPie}>
            Restaurant
          </Sidebar.Item>
          <Sidebar.Item href="/admin/blog" icon={HiInbox}>
            Blog
          </Sidebar.Item>
          <Sidebar.Item href="/admin/comment" icon={HiUser}>
            Comment
          </Sidebar.Item>
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
		
		</div>
	<div className='w-4/5 h-[700px] flex flex-col gap-3 mr-8'>
    
    <div className="overflow-x-auto">
      {/* <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Comment id</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
         
          <Table.HeadCell>description</Table.HeadCell>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
         {
            data.map((item, index) => {
                return (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                     {(item as { comment_id: string })?.comment_id}
                    </Table.Cell>
                    <Table.Cell>{(item as { rating: string })?.rating}</Table.Cell>
                    <Table.Cell>{(item as { description:string})?.descripiton}</Table.Cell>
                    <Table.Cell>{(item as { username:string})?.user.username}</Table.Cell>
                    <Table.Cell>
                        <div className='flex gap-5'>
                           
                            <button onClick={() => deleteRestaurant( (item as { comment_id: string })?.comment_id)} className="font-medium text-[#ff0000] hover:underline dark:text-[#ff0000]/50">
                                Delete
                            </button>
                        </div>
                    </Table.Cell>
                  </Table.Row>
                )
            })
         } 
          
        
        </Table.Body>
      </Table> */}
    </div>
			
		</div>
	</div>
</div>

</>
  )
}
export default page