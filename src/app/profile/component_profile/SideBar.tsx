import Link from 'next/link'
import React from 'react'



export const SideBar = () => {
  return (
    <ul className='flex flex-col  p-3  bg-white rounded-[10px] gap-3'>
         <Link
            href='/profile/comment'
            className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline active:no-underline'
    >
            <li>
                    <h5>Profile</h5>
            </li>
    </Link>
                                                       
    <Link
            href='/profile/comment'
            className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline  active:no-underline'
    >
            <li>
                    <h5>Comment</h5>
            </li>
    </Link>
    <Link
            href='/profile/blog'
            className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline  active:no-underline'
    >
            <li>
                    <h5>My blog</h5>
            </li>
    </Link>
    <Link
            href='/profile/save'
            className='hover:bg-[#39DB4A]/5 text-black p-3 hover:text-[#39DB4A] rounded-[10px]  bg-gray-50 hover:no-underline  active:no-underline'
    >
            <li>
                    <h5>Favorite</h5>
            </li>
    </Link>
  
</ul>
  )
}
