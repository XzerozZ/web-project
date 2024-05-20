"use client"
import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { UserData } from '@/interface/interface'
import { FaCloudUploadAlt } from 'react-icons/fa'
type Props = {}

const page = () => {
        const [userData, setUserData] = React.useState<UserData>({
                email: '',
                username: '',
                phone_number: '',
                birthday: '',
                password: '',
                role: 'user',
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
                console.log(selectedImage,'image');
                const formData = new FormData();
                formData.append('email', userData.email);
                formData.append('username', userData.username);
                formData.append('phone_number', userData.phone_number);
                formData.append('birthday', userData.birthday);
                formData.append('password', userData.password);
                formData.append('role', userData.role);
                if (selectedImage) {
                        formData.append('image', selectedImage);
                    }
                console.log(formData);
                axios.post('/api/auth/register', formData)
                        .then((res) => {
                                console.log(res);
                        });
                console.log(formData)
                
             
        }
   
                

  return (
    <>
     <div className='flex justify-center bg-[#FAFAFA] py-[100px] max-sm:p-[50px]'>
    <div >
    <h1 className='text-center text-[40px]'>Sign up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-[450px] gap-5 max-sm:p-10'>
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
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="username" required />
            </div>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    onChange={handleChange}
                    name='email'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="example@gmail.com" required />
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
                <div  className='w-full'>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                    <input 
                    type="text" 
                    id="birthday" 
                    onChange={handleChange}
                    name='birthday'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="YY-MM-DD" required />
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


            <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Sign up</button>

 
        </form>
    </div>
   </div>
    </>
  )
}

export default page