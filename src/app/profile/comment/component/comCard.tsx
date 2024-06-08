import { dataPersonalComment } from '@/interface/interface'
import Link from 'next/link'
import React from 'react'
import { Avatar, Rate } from 'rsuite'



const comCard = ({data} : {data:dataPersonalComment}) => {
  
  return (
    <>
      <Link href={`/restaurant/${data?.res_id}`} className='hover:text-black text-black hover:no-underline no-underline active:no-underline hover:border hover:border-[#39db4a] hover:rounded-md'>
      <div className='flex gap-1 flex-col bg-white px-5 py-3 rounded-lg'>
       <div className='flex flex-row gap-3' >
            <div>
              <Avatar circle size='md'  src={data?.user?.image}/>
            </div>
            <div className='flex flex-col'>
              <div>
              {data?.user.username}
              </div>
              <div>
                <Rate defaultValue={data?.rating || 1}  size="sm" readOnly color='orange'/><span>{data?.rating}</span>
              </div>
            </div>
            <div>

            </div>

        </div>
        <div>
          {data?.description}
        </div>
       </div>
      </Link>
    </>
  )
}

export default comCard