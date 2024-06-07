import React from 'react'
import Logo from './image-component/logo'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';


type Props = {}

const footer = (props: Props) => {
  return (
   <>   
   <footer className='bg-[#fff] flex justify-center  items-center w-full  max-sm:p-5 p-5 '>
        <div>
        <div className='sm:flex justify-between w-[1120px] max-sm:w-full max-sm:grid max-sm:grid-cols-2  gap-5'>
            <div>
                <Logo width={150} height={75}/>
                <h5 className='text-[25px] text-black'><span className='text-[#39db4a]'>FOOD</span> BLOG </h5>
                <h5 className='text-[25px] text-black'><span className='text-[#39db4a]'>FOOD</span> FOR YOU</h5>
            </div>
            <div>
            <h1 className='text-[25px] font-bold text-[#39db4a]'>Useful links</h1>
                <ul>
                   <Link href="/" className='hover:text-[#39db4a] no-underline text-black hover:no-underline'> <li className='text-[15px]'>About</li></Link>
                   <Link href='/restaurant' className='hover:text-[#39db4a] no-underline text-black hover:no-underline'> <li className='text-[15px]'>Restaurant</li></Link>
                    <Link href='/blog' className='hover:text-[#39db4a] no-underline text-black hover:no-underline'><li className='text-[15px]'>Blog</li></Link>

                </ul>
            </div>
            <div>
            <h1 className='text-[25px] font-bold text-[#39db4a]'>Main menu</h1>
                <ul>
                     <Link href='/restaurant' className='hover:text-[#39db4a] no-underline text-black hover:no-underline'> <li className='text-[15px]'>Restaurant</li></Link>
                     <Link href='/blog' className='hover:text-[#39db4a] no-underline text-black hover:no-underline'><li className='text-[15px]'>Blog</li></Link>
                </ul>
            </div>
            <div>
            <h1 className='text-[25px] font-bold text-[#39db4a]'>Contact us</h1>
                <ul>
                    <li className='text-[15px] text-black'>wongnok@company.ac.th</li>
                    <li className='text-[15px] text-black'>087-1234567</li>
                    <li className='text-[15px] text-black'>Wongnok Community</li>       
                </ul>
            </div>



        </div>
        <div className='flex gap-10 justify-center mt-5'>
            <div>
                <FaFacebook size={30} className='text-[#000]'/>
            </div>
            <div>
                <FaInstagram size={30}  className='text-[#000]'/>
            </div>
            <div>
                <FaYoutube size={30}  className='text-[#000]'/>
            </div>
          
        </div>
        </div>
   </footer>
   </>
  )
}
export default footer