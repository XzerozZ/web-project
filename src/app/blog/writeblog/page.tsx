"use client"
import axios from 'axios';
import React, { ChangeEvent, use, useEffect, useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';



const page = () => {

const session = useSession();
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

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const [dataRes, setDataRes] = useState([]);
const fetchRestaurant = async () => {
  axios.get('/api/restuarant')
  .then((res) => {
      console.log(res.data)
      setDataRes(res.data)
      
  })
}
useEffect(() => {
    fetchRestaurant();
    // if (session.data === null) {
    //   router.push('/auth/signin');
    // }
}, []);


const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (selectedImage) {
        formData.append('image', selectedImage);
    }
    console.log(formData);
    axios.post('/api/blog', formData);
}
const restaurantNames = (dataRes as { name: string }[]).map(dataRes => dataRes.name);

const SelectData = restaurantNames.map((item, index) => ({ label: item, value: item, key: index }));
console.log(SelectData);

const [items, setItems] = React.useState<{ label: string; value: string }[]>([]);
const updateData = () => {
    if (items.length === 0) {
        setItems(SelectData);
    }
};
const renderMenu = (menu:any) => {
    if (items.length === 0) {
      return (
        <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
          <SpinnerIcon spin /> Loading...
        </p>
      );
    }
    return menu;
  };



return (
    <>
        <div className='flex justify-center bg-[#fafafa]'>
            <form className='flex flex-col w-[1140px] gap-5 p-5 max-sm:w-full' onSubmit={handleSubmit}>
               <div className='flex flex-row justify-between'>
               <textarea
                    
                    placeholder='Title'
                    className='grow outline-none bg-[#fafafa] focus:ring-0 border-0 text-[40px] placeholder-[#B3B3B1] leading-9 resize-none'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className=''>
                    <button type='submit' className='rounded-xl p-2 bg-[#39db4a] text-white hover:text-black hover:bg-white hover:rounded-xl hover:border-solid hover:p-2 hover:border-2 hover:border-[#39db4a]  border-solid border-2 border-[#39db4a]' >Publish</button>
                </div>
               </div>

                    <SelectPicker
                    data={items}
                    style={{ width:1140 }}
                    onOpen={updateData}
                    onSearch={updateData}
                    renderMenu={renderMenu}
                    onChange={(index) => console.log(index)}
                    />
                <div className=''>
                    {previewImage ? (
                        <label htmlFor='uploadImage'>
                            <img
                                src={previewImage}
                                alt='Preview'
                                className='max-w-full h-auto'
                            />
                        </label>
                    ) : (
                        <label htmlFor='uploadImage' className='cursor-pointer my-auto w-full h-[500px] bg-[#d9d9d9] flex justify-center rounded-md'>
                            <FaCloudUploadAlt className='my-auto text-[#b3b3b1] text-9xl' />
                        </label>
                    )}
                   
                    <input
                        id='uploadImage'
                        type='file'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>
                
                <textarea
                    placeholder='Write your blog'
                    onChange={(e) => setDescription(e.target.value)}
                    className='outline-none bg-[#fafafa] focus:ring-0 border-0 text-[30px] h-[600px] resize-noneleading-9 placeholder-[#B3B3B1]'
                />
                
                
            </form>
        </div>
    </>
);
}

export default page