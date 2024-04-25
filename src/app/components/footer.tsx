import React from 'react'
import Logo from './image-component/logo'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


type Props = {}

const footer = (props: Props) => {
  return (
   <>   
   <footer className='bg-[#fff] flex justify-center  items-center w-full mt-[70px] max-sm:m-5'>
        <div>
        <div className='sm:flex justify-between w-[1120px] max-sm:w-full max-sm:grid max-sm:grid-cols-2  gap-5'>
            <div>
                <Logo width={150} height={75}/>
                <span className='text-[25px] '>Food blog food for you</span>
            </div>
            <div>
            <h1 className='text-[25px] font-bold'>Useful links</h1>
                <ul>
                    <li className='text-[15px]'>About</li>
                    <li className='text-[15px]'>Restaurant</li>
                    <li className='text-[15px]'>Blog</li>
                    <li className='text-[15px]'>FAQ</li>
                </ul>
            </div>
            <div>
            <h1 className='text-[25px] font-bold'>Main menu</h1>
                <ul>
                    <li className='text-[15px]'>Restaurant</li>
                    <li className='text-[15px]'>Blog</li>
                </ul>
            </div>
            <div>
            <h1 className='text-[25px] font-bold'>Contact us</h1>
                <ul>
                    <li className='text-[15px]'>wongnok@company.ac.th</li>
                    <li className='text-[15px]'>087-1234567</li>
                    <li className='text-[15px]'>Wongnok Community</li>       
                </ul>
            </div>



        </div>
        <div className='flex gap-5 justify-center mt-5'>
            <div>
                <FaFacebook size={30}/>
            </div>
            <div>
                <FaInstagram size={30}/>
            </div>
            <div>
                <FaYoutube size={30}/>
            </div>
          
        </div>
        </div>
   </footer>
   </>
  )
}
export default footer