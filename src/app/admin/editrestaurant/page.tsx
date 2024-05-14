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
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { dataInformation } from '@/interface/interface';
import { Loader, SelectPicker } from 'rsuite';

const page = () => {
    const router = useRouter();
    const {data:session ,status} = useSession();
    const [user, setUser] = useState<dataInformation>({} as dataInformation);
    const [isLoading, setIsLoading] = useState(true);
    const fetchUser = async () => {
        const formData = new FormData();
        formData.append('email', session?.user?.email || '');
        await axios.post(`/api/user/`, formData)
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
        });
    }
   

    const [dataRes, setDataRes] = useState([]);
 
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage2, setPreviewImage2] = useState<string | null>(null);
    const [selectedImage2, setSelectedImage2] = useState<File | null>(null);

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
    axios.get('/api/restaurant')
    .then((res) => {
        // console.log(res.data)
        setDataRes(res.data)
        
    })
}


    const editRestaurant = (id:any) => {
        const formData = new FormData();
        axios.put(`/api/restaurant`,formData)
    }


   

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataRes((prev:any) => ({
            ...prev,
            [name]: value,
    }));
};

    useEffect(() => {
      
        fetchUser();
        console.log(user);
        console.log(user?.role);
        if (user !== null) {
          setIsLoading(false);
          if (user?.role === 'user') {
            console.log('not admin');
            
            // router.push('/auth/signin');
          }
          else if (user?.role !== 'user') {
             console.log(' admin');
              setIsLoading(false);
          }
        }
        else if (user === null) {
            setIsLoading(true);
        }
        
      }, [session, router,user]);
    
    //   if (isLoading) {
    //     return  <div className='flex justify-center h-[500px] items-center'>
    //       <Loader size="md"  color='black'/>
    //     </div>
    //   }
    

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
          <Sidebar.Item href="/admin/addrestaurant" icon={HiInbox}>
            Add Restaurant
          </Sidebar.Item>
          <Sidebar.Item href="/admin/editrestaurant" icon={HiInbox}>
            Edit Restaurant
          </Sidebar.Item>
         
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
		
		</div>
	<div className='w-4/5 h-[700px] flex flex-col gap-3 mr-8'>
    <div>
    </div>
    <div className="overflow-x-auto">
    <div className='flex flex-col justify-center w-full'>
                      
                      <form onSubmit={editRestaurant} className='flex flex-col gap-5 max-sm:p-10  w-[800px] mx-auto'>
                      <div className='flex justify-center gap-3'>
                      <div className='w-1/2'>
                              {previewImage ? (
                                      <label htmlFor='uploadImage'>
                                      <img className='w-[100px] h-[100px] rounded-md'
                                              src={previewImage}
                                              alt='Preview'
                                      
                                      />
                                      </label>
                              ) : (
                                      <label htmlFor='uploadImage' className='cursor-pointer my-auto  bg-[#d9d9d9] flex justify-center rounded-md h-[200px]'>
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
                               <div className='w-1/2'>
                              {previewImage2 ? (
                                      <label htmlFor='uploadImage'>
                                      <img className='w-[100px] h-[100px] rounded-md'
                                              src={previewImage2}
                                              alt='Preview'
                                      
                                      />
                                      </label>
                              ) : (
                                      <label htmlFor='uploadImage' className='cursor-pointer my-auto  bg-[#d9d9d9] flex justify-center rounded-md h-[200px] '>
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
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurant name</label>
                              <input 
                              type="text" 
                              id="res_name" 
                             
                              onChange={handleChange}
                              name='res_name'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Restaurant name" required />
                      </div>
                      
                      <div className='flex flex-row gap-3 w-full justify-between'>
                              <div  className='w-full'>
                                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                      <input 
                                      type="text" 
                                      id="address" 
                                      name='address'
                                     
                                      onChange={handleChange}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Addres" required />
                              </div>
                      
                      </div>
                      <div className='flex flex-row gap-3 w-full justify-between'>
                              <div  className='w-full'>
                                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                      <input 
                                      type="text" 
                                      id="phone_number" 
                                      name='phone_number'
                                     
                                      onChange={handleChange}
                                      
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Phone number" required />
                              </div>
                      
                      </div>

                      <div>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <input 
                              type="text" 
                              id="description" 
                            
                              name='descripition'
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="description" required />
                      </div>
                     
                   

                      


                      <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Update</button>

              
                      </form>
    </div>
    
        
    </div>
			
		</div>
	</div>
</div>

</>
  )
}
export default page