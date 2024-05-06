"use client"
import axios from 'axios';
import { Modal, Sidebar } from 'flowbite-react';
import { Table } from "flowbite-react";
import Link from 'next/link';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { RiAdminFill } from 'react-icons/ri';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";


import 'rsuite/dist/rsuite.min.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { set } from 'mongoose';

const page = () => {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState({
        res_id: '',
        res_name: '',
        res_address: '',
        res_rating: '',
        res_image: '',
    
    })
    const [openModal, setOpenModal] = useState(true);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
};

    const fetchRestaurant = async () => {
        axios.get('/api/restuarant')
        .then((res) => {
            // console.log(res.data)
            setData(res.data)
            
        })
      }

    useEffect(() => {
        fetchRestaurant(),[]})

    const editRestaurant = (id:any) => {
        const formData = new FormData();
        axios.put(`/api/restaurant`,formData)
    }

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
    <div>
        <button className='bg-[#39db4a] rounded-md px-3 py-2 text-white'>Add Restaurant</button>
    </div>
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Res Id</Table.HeadCell>
          <Table.HeadCell>Restaurant name</Table.HeadCell>
         
          <Table.HeadCell>Average Rating</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
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
                     {(item as { res_id: string })?.res_id}
                    </Table.Cell>
                    <Table.Cell>{(item as { name: string })?.name}</Table.Cell>
                    <Table.Cell>{(item as { averageRating:string})?.averageRating}</Table.Cell>
                    <Table.Cell>{(item as { address:string})?.address}</Table.Cell>
                    <Table.Cell>
                        <div className='flex gap-5'>
                            <button className="font-medium text-[#39db4a] hover:underline dark:text-[#39db4a]/50">
                                Edit
                            </button>
                            <button onClick={() => deleteRestaurant( (item as { res_id: string })?.res_id)} className="font-medium text-[#ff0000] hover:underline dark:text-[#ff0000]/50">
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
<Modal show={openModal} onClose={() => setOpenModal(false)} size='md'>
                        <Modal.Header>Update profile</Modal.Header>
                        <Modal.Body>
                        <div className='flex flex-col justify-center '>
                      
                                <form onSubmit={editRestaurant} className='flex flex-col w-full] gap-5 max-sm:p-10'>
                                <div className='flex justify-center'>
                                <div className=''>
                                        {previewImage ? (
                                                <label htmlFor='uploadImage'>
                                                <img className='w-[100px] h-[100px] rounded-md'
                                                        src={previewImage}
                                                        alt='Preview'
                                                
                                                />
                                                </label>
                                        ) : (
                                                <label htmlFor='uploadImage' className='cursor-pointer my-auto w-[100px] h-[100px] bg-[#d9d9d9] flex justify-center rounded-full'>
                                                <FaCloudUploadAlt className='my-auto text-[#b3b3b1] text-5xl' />
                                                </label>
                                        )}
                                        
                                        <input
                                                id='uploadImage'
                                                type='file'
                                                style={{ display: 'none' }}
                                                onChange={handleImageChange}
                                                
                                        />
                                        </div>
                                        
                        
                                </div>

                                <div>
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurant id</label>
                                        <input 
                                        type="text" 
                                        id="res_id" 
                                        // onChange={handleChange}
                                        name='username'
                                        
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
                                </div>
                                
                                <div className='flex flex-row gap-3 w-full justify-between'>
                                        <div  className='w-full'>
                                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                                                <input 
                                                type="text" 
                                                id="phone_number" 
                                                name='phone_number'
                                                // onChange={()=> setEdit({...edit, phone_number: edit.phone_number})}
                                                
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="087-123457" required />
                                        </div>
                                
                                </div>

                                <div>
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input 
                                        type="password" 
                                        id="password" 
                                        // onChange={handleChange}
                                        name='password'
                                        
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="password" required />
                                </div>


                                <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Update</button>

                        
                                </form>
                        </div>
                        
                        </Modal.Body>
                      
                </Modal>
</>
  )
}
export default page