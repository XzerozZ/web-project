import React from 'react'
import Link from 'next/link'

import { IoSearchOutline } from "react-icons/io5";

type Props = {}

const navbar = (props: Props) => {
  return (
   <>
   <nav>
    <div className='flex justify-between'>
        <div>
            logo
        </div>
        <div>
           <form>
              <div className='flex align-center w-full bg-[#EAECEE] p-3 rounded-lg'>
                <input type="search" placeholder="ร้านอาหาร บทความ" className='outline-none border-none bg-transparent'></input>
                <span className=''><IoSearchOutline /></span>
              </div>
           </form>
        </div>
        <div>
            <div>
              favorites
            </div>
            <div>
              profile
            </div>
        </div>
    </div>
   </nav>
   
   </>
  );
}

export default navbar