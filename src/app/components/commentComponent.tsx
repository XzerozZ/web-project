import React from 'react'
import { Avatar, Rate } from 'rsuite'

type Props = {}

const commentComponent = (props: Props) => {
  return (
    <>
        <div className='flex flex-row'>
            <div>
              <Avatar circle  />
            </div>
            <div className='flex flex-col'>
              <div>
            Natchapon Ponlaem
              </div>
              <div>
                <Rate defaultValue={4} color="blue" size="sm"/><span>4</span>
              </div>
            </div>
            <div>

            </div>

        </div>
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est vel ipsum doloribus sapiente velit deserunt voluptas, exercitationem quod tempore iste! Dicta quis sed quidem adipisci iusto facilis? Velit, facere.
        </div>
    </>
  )
}

export default commentComponent