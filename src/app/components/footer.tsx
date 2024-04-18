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
   <footer className='bg-[#fff] flex justify-center h-[120px] items-center w-full mt-[70px]'>
        <div>
        <div className='sm:flex justify-between w-[1120px] max-sm:w-full max-sm:grid max-sm:grid-cols-2  gap-5'>
            <div>
                <Logo width={150} height={75}/>
                <span>Food blog food for you</span>
            </div>
            <div>
            <h1>Useful links</h1>
                <ul>
                    <li>About</li>
                    <li>Restaurant</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
            <h1>Main menu</h1>
                <ul>
                    <li>Restaurant</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
            <h1>Contact us</h1>
                <ul>
                    <li>wongnok@company.ac.th</li>
                    <li>087-1234567</li>
                    <li>Wongnok Community</li>       
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