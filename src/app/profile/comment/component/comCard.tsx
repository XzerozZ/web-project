import { dataPersonalComment } from '@/interface/interface'
import React from 'react'
import { Avatar, Rate } from 'rsuite'



const comCard = ({data} : {data:dataPersonalComment}) => {
  return (
    <>
       <div className='flex gap-1 flex-col'>
       <div className='flex flex-row gap-3' >
            <div>
              <Avatar circle  />
            </div>
            <div className='flex flex-col'>
              <div>
              {data.user.username}
              </div>
              <div>
                <Rate defaultValue={0}  size="sm" readOnly color='orange'/><span>{data.user.rating}</span>
              </div>
            </div>
            <div>

            </div>

        </div>
        <div>
          {data.description}
        </div>
       </div>
    </>
  )
}

export default comCard