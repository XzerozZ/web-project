"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import React from 'react'
import { Avatar, Placeholder, Tabs } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Comment from '@/app/components/commentComponent';

import { Button,Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
   
  }

  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [telephone, setTelephone] = useState('')

  return (
    <>
      
      <main>
    <>
    <div className='flex flex-col justify-center bg-[#fafafa]'>
       <div className='bg-[#e3e3e3] flex w-full justify-center p-5'>
            <div className='flex flex-row w-[1140px] justify-between gap-5 '>
                <div className=''>
                    <div className='max-sm:hidden'>
                        <Avatar circle size='xxl'/>
                    </div>
                    <div className='sm:hidden'>
                        <Avatar circle size='xl'/>
                    </div>
                </div>
                <div className='flex flex-row grow justify-between max-sm:flex-col'>
                    <h1 className='my-auto max-sm:text-[20px]'>Natchapon Ponlaem</h1>
                    <div className='my-auto'>
                        <button onClick={() => setOpenModal(true)}>แก้ไขข้อมูล</button>
                    </div>

                </div>
            </div>
       </div>
       <div className='flex justify-center p-3 '>
        <div className='flex gap-5 w-[1140px] max-sm:flex-col max-sm:gap-0'>
                <div className='w-1/5 max-sm:hidden '>
                    <ul className='flex flex-col  p-3  bg-white rounded-[10px] gap-3'>
                        <Link href='/profile' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a] focus:bg-[#39DB4A]/5'><li ><h5 >ภาพรวม</h5></li></Link>
                        <Link href='/profile/comment' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline  focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5'> <li ><h5>ความคิดเห็น</h5></li></Link>
                        <Link href='/profile/blog' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5'> <li ><h5>บทความ</h5></li></Link>
                        <Link href='/profile/save' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5'> <li ><h5>บันทึก</h5></li>  </Link>
                        <Link href='/profile/information' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5 '> <li ><h5>ข้อมูลส่วนตัว</h5></li></Link>
                    </ul>

                </div>
                <div className="sm:hidden">
                   <ul className='flex flex-row gap-3 rounded-[10px] pt-3'>
                        <Link href='/profile' className='hover:bg-[#39DB4A]/5 text-black  hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a] focus:bg-[#39DB4A]/5 '><li ><h5 >ภาพรวม</h5></li></Link>
                        <Link href='/profile/comment' className='hover:bg-[#39DB4A]/5 text-black  hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline  focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5'> <li ><h5>ความคิดเห็น</h5></li></Link>
                        <Link href='/profile/blog' className='hover:bg-[#39DB4A]/5 text-black  hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5'> <li ><h5>บทความ</h5></li></Link>
                        <Link href='/profile/save' className='hover:bg-[#39DB4A]/5 text-black  hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5'> <li ><h5>บันทึก</h5></li>  </Link>
                        <Link href='/profile/information' className='hover:bg-[#39DB4A]/5 text-black  hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline focus:no-underline focus:text-[#39db4a]  focus:bg-[#39DB4A]/5 '> <li ><h5>ข้อมูลส่วนตัว</h5></li></Link>
                    </ul>
                    <hr />
                 
                </div>
                <div className='w-4/5 rounded-[10px] p-5 gap-5 flex flex-col max-sm:w-full'>
                    {children}
                </div>
        </div>
       </div>

    </div>



    <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
        <Modal.Header>แก้ไขข้อมูล</Modal.Header>
        <Modal.Body>
          <form className='w-full'>
            <div className='flex justify-center'>
                        <Uploader
                listType="picture-text"
                
                action="//jsonplaceholder.typicode.com/posts/"
                renderFileInfo={(file, fileElement) => {
                return (
                    <>
                    <span>File Name: {file.name}</span>
                    <p>File URL: {file.url}</p>
                    </>
                );
                }}
            >
                <Button>อัพโหลดโปรไฟล์</Button>
            </Uploader>
            
                
            </div>
            <div>
               
                 <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
       
            </div>
            <div className='flex flex-row justify-between '>
               <div>
               <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                    <input 
                    type="text" 
                    id="firstname" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
       
               </div>
               <div > 
               <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                    <input 
                    type="text" 
                    id="lastname" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="email@email.com" required />
       

               </div>
               

            </div>
           <div className='flex flex-row justify-between '>
           <div>
           <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                    <input 
                    type="text" 
                    id="birthday" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="dd/mm/yy" required />
       
            </div>
            <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                    <input 
                    type="text" 
                    id="telephone" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="" required />
       
            </div>
           </div>
            <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    // onChange={(e) => setEmail(e.target.value)}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#39DB4A] focus:border-[#39DB4A] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#39DB4A] dark:focus:border-[#39DB4A]" placeholder="Enter your pssword" required />
       
            </div>


          </form>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={() => setOpenModal(false)} type="submit" className="w-full text-white bg-[#39DB4A] hover:bg-[#39DB4A]/90 focus:ring-3 focus:ring-[#39DB4A]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#39DB4A]/60 dark:hover:bg-[#39DB4A]/70 focus:outline-none dark:focus:ring-[#39DB4A]/80">I accept</button>

          
          <Button color="#39DB4A" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
         
        </Modal.Footer>
      </Modal>

    </>
  </main>
      
      
      
      
    </>
  );
}
