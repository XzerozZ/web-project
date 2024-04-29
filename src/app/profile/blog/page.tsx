import React, { useEffect, useState } from 'react'
import BlogCard from './component/blogCard'
import axios from 'axios';

type Props = {}

const page = (props: Props) => {

  const [data, setData] = useState([]);
  const fetchPersonalBlog = async () => {
    axios.get('/api/blog/user/3')
    .then((res) => {
        console.log(res.data)
        setData(res.data)
        
    })
  
  }
  useEffect(() => {
        fetchPersonalBlog()
  },[])


  return (
   <div className='flex flex-col gap-4'>
        <BlogCard/>
        <BlogCard/>
   </div>
  )
}

export default page