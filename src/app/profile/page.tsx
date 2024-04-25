"use client";
import React from 'react'
import { Avatar } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Comment from '@/app/components/commentComponent';

import { Button,Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import Link from 'next/link';



type Props = {}


const ProfilePage = (props: Props) => {
    
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
       <div className='flex justify-center p-3'>
        <div className='flex gap-5 w-[1140px]'>
                <div className='w-1/5  '>
                    <ul className='flex flex-col  p-3  bg-white rounded-[10px] gap-3'>
                        <Link href='/profile' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'><li ><h5 >ภาพรวม</h5></li></Link>
                        <Link href='/profile/restaurant' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'> <li ><h5>ร้านอาหาร</h5></li></Link>
                        <Link href='/profile/blog' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'> <li ><h5>บทความ</h5></li></Link>
                        <Link href='/profile/save' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'> <li ><h5>บันทึก</h5></li>  </Link>
                        <Link href='/profile/information' className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline'> <li ><h5>ข้อมูลส่วนตัว</h5></li></Link>
                    </ul>

                </div>
                <div className='w-4/5 bg-white rounded-[10px] p-5 gap-5 flex flex-col'>
                    <Comment />
                    <Comment />
                    <Comment />
                    
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
                <Label>อีเมล</Label>
                <TextInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div className='flex flex-row justify-between '>
               <div>
               <Label>ชื่อ</Label>
                <TextInput
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Enter your password"
                />
               </div>
               <div > 
                <Label>นามสกุล</Label>
                <TextInput
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter your password"
                />

               </div>
               

            </div>
           <div className='flex flex-row justify-between '>
           <div>
                <Label>วัน/เดือน/ปี</Label>
                <TextInput
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            <div>
                <Label>Telephone</Label>
                <TextInput
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
           </div>
            <div>
                <Label>รหัสผ่าน</Label>
                <TextInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ProfilePage