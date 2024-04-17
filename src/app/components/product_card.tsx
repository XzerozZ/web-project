import React from 'react'
import { CiStar } from "react-icons/ci";

type Props = {}

const product_card = (props: Props) => {
  return (
    <>
    <div className='rounded-[10px]'>
        <img src="" alt="" />
        <h1>test</h1>
        <div>
            <span><CiStar /></span>
            <span>4.43</span>
        </div>

    </div>
    </>
  )
}

export default product_card