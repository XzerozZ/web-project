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
   
   


    const fetchBlog = async () => {
        axios.get('/api/blog')
        .then((res) => {
            // console.log(res.data)
            setData(res.data)
            
        })
      }

    useEffect(() => {
        fetchBlog(),[]})

   
    const deleteRestaurant = (id:any) => {
        const formData = new FormData();
        formData.append('id',id)
        axios.delete(`/api/blog`, { data: formData })
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
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Blog id</Table.HeadCell>
          <Table.HeadCell>title</Table.HeadCell>
         
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Post date</Table.HeadCell>
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
                     {(item as { blog_id: string })?.blog_id}
                    </Table.Cell>
                    <Table.Cell>{(item as { title: string })?.title}</Table.Cell>
                    <Table.Cell>{(item as { user_id:string})?.user_id}</Table.Cell>
                    <Table.Cell>{(item as { posted_date:string})?.posted_date}</Table.Cell>
                    <Table.Cell>
                        <div className='flex gap-5'>
                           
                            <button onClick={() => deleteRestaurant( (item as { blog_id: string })?.blog_id)} className="font-medium text-[#ff0000] hover:underline dark:text-[#ff0000]/50">
                                Delete
                            </button>
                        </div>
                    </Table.Cell>
                  </Table.Row>
                )
            })
         } 
          
        
        </Table.Body>
      </Table>
    </div>
			
		</div>
	</div>
</div>

</>
  )
}
export default page