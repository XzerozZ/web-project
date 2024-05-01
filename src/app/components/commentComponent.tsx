import { Comment } from '@/interface/interface'
import React from 'react'
import { Avatar, Rate } from 'rsuite'


const commentComponent = ({data} : {data: Comment} ) => {
  console.log(data)
  return (
    <>
       <div className='flex gap-1 flex-col'>
       <div className='flex flex-row gap-3'>
            <div>
              <Avatar circle  />
            </div>
            <div className='flex flex-col '>
              <div>
                {data.user.username}
              </div>
              <div>
                <Rate defaultValue={data.rating}  size="sm" readOnly color='orange'/><span>{data.rating}</span>
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

export default commentComponent