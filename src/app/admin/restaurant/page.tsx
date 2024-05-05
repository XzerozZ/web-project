"use client"
import axios from 'axios';
import { Table } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { RiAdminFill } from 'react-icons/ri';


import { Sidenav, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const page = () => {
    const [data, setData] = useState([]);
    const fetchRestaurant = async () => {
        axios.get('/api/restaurant')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            
        })

    }
    useEffect(() => {
        fetchRestaurant()
    },[])



  return (
   <>
 


<div className='flex justify-center'>
	<div>
	
	</div>
	<div className='w-full flex flex-row gap-03'>
		<div className='w-1/5'>
		{/* <Sidenav defaultOpenKeys={['1']}>
     			 <Sidenav.Body>
        			<Nav activeKey="1">
       
     
    
          		<Nav.Menu eventKey='1' title="Settings" icon={<RiAdminFill />}>
            			<Nav.Item eventKey='1-1'><Link href='/admin/restaurant'>Restaurant</Link></Nav.Item>
            			<Nav.Item eventKey='1-2'><Link href='/admin/blog'>Blog</Link></Nav.Item>
            			<Nav.Item eventKey='1-3'><Link href='/admin/comment'>Comment</Link></Nav.Item>
				<Nav.Item eventKey='1-3'><Link href='/admin/user'>User</Link></Nav.Item>
            			
         		 </Nav.Menu>

        			</Nav>
     			 </Sidenav.Body>
    		</Sidenav> */}
		</div>
	<div className='w-4/5'>
		<div className='Card'>
        <div className="overflow-x-auto">
      {/* <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
         
          
         
        </Table.Body>
      </Table> */}
    </div>
			
		</div>
			
			
		</div>
	</div>
</div></>
  )
}
export default page