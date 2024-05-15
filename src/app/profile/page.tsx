"use client";
import React, { ChangeEvent, use } from 'react'
import { Avatar, Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

import { useState,useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import {UserSession, dataInformation } from '@/interface/interface';
import PropInformation from './PropInformation';
import { set } from 'mongoose';
import { SideBar } from './component_profile/SideBar';
import { Button, Modal } from 'flowbite-react';
import { FaCloudUploadAlt } from 'react-icons/fa';


const ProfilePage = () => {

  
  const router = useRouter();
  const {data:session ,status} = useSession();
  const [sessionData, setSessionData] = useState<UserSession>();
  const [data, setDataUser] = useState<dataInformation>({} as dataInformation);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);


 
 
  const fetchInformation = async (email:any) => {
        const formData = new FormData();
        formData.append('email', email)
        console.log(email)
        await axios.post(`/api/user/`,formData)
        .then((res) => {
            console.log(res.data)
            setDataUser(res.data)
            
            
        })
  }
  const [userData, setUserData] = React.useState({
       
        username: '',
        phone_number: '',
        
        password: '',
      
        image: '',
});
const [selectedImage, setSelectedImage] = useState<File | null>(null);
const [previewImage, setPreviewImage] = useState<string | null>(null);

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



const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prev:any) => ({
                ...prev,
                [name]: value,
        }));
};
console.log(selectedImage)
console.log(userData)
const handleSubmit = (e:any) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('id', String(data.user_id));
        formData.append('username', userData.username);
        formData.append('phone_number', userData.phone_number);
   
        formData.append('password', userData.password);
        if (selectedImage) {
                        formData.append('image', selectedImage);
                }
       
        axios.put('/api/user', formData)
                .then((res) => {
                        console.log(res);
                });
        console.log(formData)}


  
useEffect(() => {
                        

                if (session) {  
                                console.log(data.role)
                                 fetchInformation(session?.user?.email);
                                 setIsLoading(false);
                                if (data){
                                        if (data.role === 'admin') {
                                                setIsAdmin(true)
                                                console.log('admin')
                                        }else if (data.role === 'user'){
                                                setIsAdmin(false)
                                                console.log('not admin')
                                        }
                                }
                        }
                else if (status === 'unauthenticated') {
                        router.push('/auth/signin');
                }
        
        }, [session,data]);


  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
return (
        <>
                <div className='flex flex-col justify-center bg-[#fafafa]'>
                        <div className='bg-[#e3e3e3] flex w-full justify-center p-5'>
                                <div className='flex flex-row w-[1140px] justify-between gap-5 '>
                                        <div className=''>
                                                <div className='max-sm:hidden'>
                                                        <Avatar circle size='xxl' src={data.image}/>
                                                </div>
                                                <div className='sm:hidden'>
                                                        <Avatar circle size='xl' src={data.image}/>
                                                </div>
                                        </div>
                                        <div className='flex flex-row grow justify-between max-sm:flex-col'>
                                                <h1 className='my-auto max-sm:text-[20px]'>{data.username}</h1>
                                                <div className='my-auto'></div>
                                        </div>
                                        <div>
                                                {
                                                        isAdmin ? <Link href='/admin/restaurant'><h1 className='text-white bg-[#39db4a] rounded-[8px] px-3 py-2 m-3 text-lg'>Admin</h1></Link> : <div>test</div>
                                                }
                                        </div>
                                </div>
                        </div>
                        <div className='flex justify-center p-3'>
                                <div className='flex gap-5 w-[1140px]'>
                                        <div className='w-1/5 max-sm:hidden '>
                                               <SideBar />
                                        </div>
                                        <div className='w-4/5 max-sm:w-full p-3'>
                                        <PropInformation data={data} />
                                        <div className='flex justify-end'>
                                                <button onClick={() => setOpenModal(true)} className='text-white bg-[#39db4a] rounded-[8px] px-3 py-2 m-3'>Edit profile</button>
                                        </div>
                                        </div>
                                        
                                </div>
                        </div>
                      
                </div>


                <Modal show={openModal} onClose={() => setOpenModal(false)} size='md'>
                        <Modal.Header>Update profile</Modal.Header>
                        <Modal.Body>
                        <div className='flex flex-col justify-center '>
                      
                                <form onSubmit={handleSubmit} className='flex flex-col w-full] gap-5 max-sm:p-10'>
                                <div className='flex justify-center'>
                                <div className=''>
                                        {previewImage ? (
                                                <label htmlFor='uploadImage'>
                                                <img className='w-[100px] h-[100px] rounded-full'
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
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input 
                                        type="text" 
                                        id="username" 
                                        onChange={handleChange}
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
                                                onChange={handleChange}
                                                
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="087-123457" required />
                                        </div>
                                
                                </div>

                                <div>
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input 
                                        type="password" 
                                        id="password" 
                                        onChange={handleChange}
                                        name='password'
                                        
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="password" required />
                                </div>


                                <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Update</button>

                        
                                </form>
                        </div>
                        
                        </Modal.Body>
                      
                </Modal>
 







        </>
);
}

export default ProfilePage