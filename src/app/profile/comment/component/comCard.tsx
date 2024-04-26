import React from 'react'
import { Avatar, Rate } from 'rsuite'

type Props = {}

const comCard = (props: Props) => {
  return (
    <>
       <div className='flex gap-1 flex-col'>
       <div className='flex flex-row gap-3' >
            <div>
              <Avatar circle  />
            </div>
            <div className='flex flex-col'>
              <div>
            Natchapon Ponlaem
              </div>
              <div>
                <Rate defaultValue={4}  size="sm" readOnly color='orange'/><span>4</span>
              </div>
            </div>
            <div>

            </div>

        </div>
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est vel ipsum doloribus sapiente velit deserunt voluptas, exercitationem quod tempore iste! Dicta quis sed quidem adipisci iusto facilis? Velit, facere.
        </div>
       </div>
    </>
  )
}

export default comCard