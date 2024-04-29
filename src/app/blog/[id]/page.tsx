"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { Avatar } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

type Props = {}

const BlogDetail = (props: Props) => {


    const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (!session.data) {
      router.push('/auth/signin');
    }
  }, [session,router]);


  
    
  return (
    <>
     <main className='w-full bg-[#FAFAFA]  items-center flex justify-center'>
       <div className='w-[1140px] '>
            <h1  className='text-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit veritatis q.</h1>
            <div className='flex flex-row p-5 gap-4'>
                <div className=''>
                    <Avatar circle size='lg' />
                </div>
                <div className=''>
                    <div className='text-[30px]'>
                        Somchai Jaidee
                    </div>
                    <div>
                    Published date 5 Mar 2024
                    </div>
                </div>
            </div>
            <div>
                <img src='https://via.placeholder.com/1200x600' alt='blog' />
            </div>
            <div className='text-[20px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere ullam dicta maxime dignissimos soluta tenetur accusamus tempore provident deserunt debitis molestiae facilis voluptatibus expedita officiis adipisci, vel illo. Laudantium laborum optio quas porro officiis odio incidunt est voluptatum nemo sit quia provident repudiandae ipsa soluta hic dicta mollitia maxime voluptatibus dolore repellendus, fugiat possimus similique veritatis praesentium. Dolor inventore nihil nam ratione! Neque corrupti error vel eum nam, quibusdam distinctio beatae porro iste deleniti culpa ad enim labore amet mollitia magni, ducimus eaque repudiandae atque rem. At earum neque quia consequuntur, necessitatibus assumenda animi id possimus deserunt a explicabo iure dolor amet reiciendis odit. Dolorum ab deleniti obcaecati voluptas velit, amet, eos temporibus nemo reiciendis necessitatibus autem. Maxime, dolorem? Nam dicta impedit velit natus consectetur iste, et quos veniam necessitatibus minima, dolor iusto nostrum quibusdam, aut quo. Dolore rem voluptate doloremque maxime repudiandae quisquam, perferendis nemo, non placeat vero cupiditate, cumque labore veritatis sint. Illum asperiores nostrum tempora illo, nam blanditiis assumenda dignissimos a nobis delectus numquam hic quo, voluptatum praesentium ratione. Earum quaerat ratione commodi quasi vero quas adipisci officia, ab quod, saepe quis sunt sint dolorem dignissimos exercitationem quos maiores illum assumenda nisi tempora sed ipsum obcaecati.
            </div>
       
       </div>

    </main>
    </>
  )
}
export default BlogDetail