import React from 'react'
import { followUsImages } from '../constants'
const FollowUs = () => {
  return (
    <div className='flex flex-col p-3 items-center justify-center'>
        <div className='text-3xl font-georgia'>
            Follow Us On Instagram
        </div>
        <div className='grid grid-cols-5'>
            <div></div>
            <div className='col-span-3 text-sm text-txtColor3 font-roboto tracking-wide py-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, laboriosam nulla! Blanditiis, doloribus autem ex ad voluptatum, placeat quidem, perferendis laudantium recusandae architecto voluptas perspiciatis veritatis. Quae asperiores corrupti repudiandae.
            </div>
            <div></div>
        </div>
        <div className='flex pt-5 pb-15'>
            {
                followUsImages.map((image) =>(
                    <div>
                        <img src={image.name} alt={image.alt} className='shadow-xl w-full' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FollowUs