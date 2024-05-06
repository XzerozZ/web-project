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
    const [openModal, setOpenModal] = useState(false);
    const fetchUser = async () => {
        const formData = new FormData();
        formData.append('email', session?.user?.email || '');
        await axios.post(`/api/user/`, formData)
        .then((res) => {
            console.log(res.data);
            setUser(res.data);
        });
    }
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
        item => ({ label: item, value: item })
      );
    const time = ['00.00', '00.30', '01.00','01.30','02.00','02.30','03.00','03.30','04.00','04.30','05.00','05.30','06.00','06.30','07.00','07.30','08.00','08.30','09.00','09.30','10.00','10.30','11.00','11.30','12.00','12.30','13.00','13.30','14.00','14.30','15.00','15.30','16.00','16.30','17.00','17.30','18.00','18.30','19.00','19.30','20.00','20.30','21.00','21.30','22.00','22.30','23.00','23.30','24.00'].map(
        item => ({ label: item, value: item })
    );

    const [data, setData] = useState([]);
    const [edit, setEdit] = useState({
        res_id: '',
        res_name: '',
        address: '',
        phone_number: '',
        description: ''
    
    })
   
   
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

const handleImageChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setSelectedImage2(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage2(reader.result as string);
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

      console.log(edit.res_id)
      console.log(edit.res_name)
      console.log(edit.address)
     
      console.log(selectedImage)
      console.log(selectedImage2)
      console.log(edit.description)

   

    const editRestaurant = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id',edit.res_id)
        formData.append('name',edit.res_name)
        formData.append('address',edit.address)
        formData.append('phone_number',edit.phone_number)
        formData.append('image',selectedImage as Blob)
        formData.append('image_background',selectedImage2 as Blob)
        formData.append('description',edit.description)

        axios.put(`/api/restuarant`,formData).then((res) => {
            console.log(res.data)
        })
       
      


    }

    const deleteRestaurant = (id:any) => {
        const formData = new FormData();
        formData.append('id',id)
        axios.delete(`/api/restuarant`, { data: formData })
    }
   


   

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit((prev:any) => ({
            ...prev,
            [name]: value,
    }))}

    useEffect(() => {
        fetchRestaurant()
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
                            <button className="font-medium text-[#39db4a] hover:underline dark:text-[#39db4a]/50"  onClick={() => setOpenModal(true)}>
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
<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit restaurant</Modal.Header>
        <Modal.Body>
        <form onSubmit={editRestaurant} className='flex flex-col gap-5 max-sm:p-10  w-full mx-auto'>
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
                                      <label htmlFor='uploadImage2'>
                                      <img className='w-[100px] h-[100px] rounded-md '
                                              src={previewImage2}
                                              alt='Preview'
                                      
                                      />
                                      </label>
                              ) : (
                                      <label htmlFor='uploadImage2' className='cursor-pointer my-auto  bg-[#d9d9d9] flex justify-center rounded-md h-[200px] '>
                                      <FaCloudUploadAlt className='my-auto text-[#b3b3b1] text-5xl' />
                                      </label>
                              )}
                              
                              <input
                                      id='uploadImage2'
                                      type='file'
                                      style={{ display: 'none' }}
                                      onChange={handleImageChange2}
                                      
                              />
                              </div>
                              
                              
              
                      </div>
                      <div>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Restaurant id</label>
                              <input 
                              type="text" 
                              id="res_id" 
                             
                              onChange={handleChange}
                              name='res_id'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Restaurant id" required />
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
                            
                              name='description'
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="description" required />
                      </div>
                     
                   

                      


                      <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Update</button>

              
                      </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setOpenModal(false)}>I accept</button>
         
        </Modal.Footer>
      </Modal>
</>
  )
}
export default page