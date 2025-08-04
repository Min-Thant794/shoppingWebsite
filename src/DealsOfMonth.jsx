import React from 'react'
import { carouselImages } from './constants'
import { Link } from 'react-router-dom'

const DealsOfMonth = () => {
  return (
    <div className='grid grid-cols-3 max-h-[550px] mx-30'>
        <div className='grid grid-rows-2 h-full'>
            <div className=''>
            <h1 className='font-georgia text-4xl text-txtColor'>
                Deals Of The Month
            </h1>
            <p className='text-justify mt-7 mb-10 text-txtColor3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae, vel ducimus est, nihil, eveniet repudiandae praesentium quasi laudantium incidunt minima cupiditate impedit soluta.
            </p>
            <Link to='/deals'className='bg-third btnHover tracking-widest px-16 py-3 rounded-lg text-xl text-txtColor2'>Buy NOW</Link>
            </div>
            <div>
            <h2 className='font-roboto text-3xl py-10 text-txtColor'>
                Hurry, Before It's Too Late!
            </h2>
            </div>
        </div>
        <div className='col-span-2'>
            <div className='flex'>
            <div className='grid grid-rows-1 grid-cols-2 w-1/8 justify-center items-end h-[550px]'>
                <button className='flex items-center justify-center cursor-pointer bg-third w-[50px] h-[50px] rounded-full text-3xl text-txtColor2 pb-2'>
                &lt;
                </button>
                <button className='flex items-center justify-center cursor-pointer bg-third w-[50px] h-[50px] rounded-full text-3xl text-txtColor2 pb-2'>
                &gt;
                </button>
            </div>
            <div className='flex w-7/8 gap-5'>
                <div className='flex w-1/2 h-[550px]'>
                <img src={carouselImages[0]} alt="Carousel Image 1" className='' />
                </div>
                <div className='relative w-1/2 h-[550px]'>
                    <div className='flex gap-5 overflow-hidden'>
                        <img src={carouselImages[1]} alt="Carousel Image 2" className='w-[300px]' />
                        <img src={carouselImages[2]} alt="Carousel Image 3" className='w-[300px]' />
                    </div>
                    <div className='absolute bottom-0 left-0'>
                        pagination
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DealsOfMonth