import React from 'react'
import BlogCard from './component/blogCard'

type Props = {}

const page = (props: Props) => {
  return (
   <div className='flex flex-col gap-4'>
        <BlogCard/>
        <BlogCard/>
   </div>
  )
}

export default page