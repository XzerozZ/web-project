'use client'
import axios from 'axios';
import { log } from 'console';
import { Select, Sidebar } from 'flowbite-react';
import React, { ChangeEvent, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiChartPie, HiInbox } from 'react-icons/hi';
import { SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const page = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedImage2, setSelectedImage2] = useState<File | null>(null);
    const [previewImage2, setPreviewImage2] = useState<string | null>(null);
    const [dataRes, setDataRes] = useState({
       
        res_name: '',
        address: '',
        image: '',
        image_background: '',
        phone_number: '',
        description: '',
        category1: '',
        category2: '',
    });
    const [day1, setDay1] = useState('');
    const [open1, setOpen1] = useState('');
    const [close1, setClose1] = useState('');

    const [day2, setDay2] = useState('');
    const [open2, setOpen2] = useState('');
    const [close2, setClose2] = useState('');

    const [day3, setDay3] = useState('');
    const [open3, setOpen3] = useState('');
    const [close3, setClose3] = useState('');

    const [day4, setDay4] = useState('');
    const [open4, setOpen4] = useState('');
    const [close4, setClose4] = useState('');

    const [day5, setDay5] = useState('');
    const [open5, setOpen5] = useState('');
    const [close5, setClose5] = useState('');

    const [day6, setDay6] = useState('');
    const [open6, setOpen6] = useState('');
    const [close6, setClose6] = useState('');

    const [day7, setDay7] = useState('');
    const [open7, setOpen7] = useState('');
    const [close7, setClose7] = useState('');

 
   console.log(day1,open1,close1)
   
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
        item => ({ label: item, value: item })
      );
    const time = ['Close','00.00', '00.30', '01.00','01.30','02.00','02.30','03.00','03.30','04.00','04.30','05.00','05.30','06.00','06.30','07.00','07.30','08.00','08.30','09.00','09.30','10.00','10.30','11.00','11.30','12.00','12.30','13.00','13.30','14.00','14.30','15.00','15.30','16.00','16.30','17.00','17.30','18.00','18.30','19.00','19.30','20.00','20.30','21.00','21.30','22.00','22.30','23.00','23.30','24.00'].map(
        item => ({ label: item, value: item })
    );

    
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

    

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataRes((prev:any) => ({
            ...prev,
            [name]: value,
    }));
};

console.log(dataRes)
const AddRestaurant = (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', dataRes.res_name);
    formData.append('address', dataRes.address);
    formData.append('description', dataRes.description);
    formData.append('image', selectedImage as Blob);
    formData.append('image_background', selectedImage2 as Blob);
    formData.append('phone_number', dataRes.phone_number);
    formData.append('category', dataRes.category1);
    formData.append('category', dataRes.category2);
    //////////////
    formData.append('day_of_week', day1);
    formData.append('opening_time', open1);
    formData.append('closing_time',close1);
    //////////////
    formData.append('day_of_week', day2);
    formData.append('opening_time', open2);
    formData.append('closing_time',close2);
    //////////////
    formData.append('day_of_week', day3);
    formData.append('opening_time', open3);
    formData.append('closing_time',close3);
    //////////////
    formData.append('day_of_week', day4);
    formData.append('opening_time', open4);
    formData.append('closing_time',close4);
    //////////////
    formData.append('day_of_week', day5);
    formData.append('opening_time', open5);
    formData.append('closing_time',close5);
    //////////////
    formData.append('day_of_week', day6);
    formData.append('opening_time', open6);
    formData.append('closing_time',close6);
    //////////////
    formData.append('day_of_week', day7);
    formData.append('opening_time', open7);
    formData.append('closing_time',close7);

    console.log(formData)
   
    axios.post('/api/restuarant',formData).then((res) => {
        console.log(res.data)
    
    })
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
	<div className='w-4/5  flex flex-col gap-3 mr-8 justify-center'>

    <div className='flex flex-col justify-center w-full'>
                      
                      <form onSubmit={AddRestaurant} className='flex flex-col gap-5 max-sm:p-10  w-[800px] mx-auto'>
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
                     <div className='flex flex-row gap-3 '>
                     <div className='w-full'>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                              <input 
                              type="text" 
                              id="category1" 
                             
                              name='category1'
                              onChange={handleChange}
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[</div>#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Category" required />
                      </div>
                      <div className='w-full'>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                              <input 
                              type="text" 
                              id="category2" 
                             
                              name='category2'
                              onChange={handleChange}
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Category" required />
                      </div>
                     </div>
                      <div className='flex flex-col gap-3'>
                            <div className=' grid grid-cols-3'>
                              <div >
                                    Day
                              </div>
                              <div>
                                    Opening
                              </div>
                              <div>
                                    Closed
                              </div>
                            </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day1} onChange={(e) => setDay1(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open1} onChange={(e) => setOpen1(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close1} onChange={(e) => setClose1(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                                                                        
                          </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day2} onChange={(e) => setDay2(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open2} onChange={(e) => setOpen2(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close2} onChange={(e) => setClose2(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                                                                        
                          </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day3} onChange={(e) => setDay3(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open3} onChange={(e) => setOpen3(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close3} onChange={(e) => setClose3(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>                                                                        
                          </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day4} onChange={(e) => setDay4(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open4} onChange={(e) => setOpen4(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close4} onChange={(e) => setClose4(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                                                                      
                          </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day5} onChange={(e) => setDay5(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open5} onChange={(e) => setOpen5(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close5} onChange={(e) => setClose5(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                                                                       
                          </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day6} onChange={(e) => setDay6(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open6} onChange={(e) => setOpen6(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close6} onChange={(e) => setClose6(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                                                                        
                          </div>
                          <div className='flex flex-row justify-between gap-3'>     
                          <Select id="day" required value={day7} onChange={(e) => setDay7(e.target.value)} className='w-full'>
                                {day.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="open" required value={open7} onChange={(e) => setOpen7(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value} >
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                            <Select id="close" required value={close7} onChange={(e) => setClose7(e.target.value)} className='w-full'>
                                {time.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </Select>
                                                                       
                          </div>
                   

                      </div>


                      <button type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">Update</button>

              
                      </form>
    </div>
    
    
    </div>
			
		</div>
	</div>


                    
   </>
  )
}
export default page