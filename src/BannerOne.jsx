import React from 'react'
import { homeImages } from './constants'
import { Link } from 'react-router-dom'

const BannerOne = () => {
  return (
    window.innerWidth >= 1024 ?
    <div className='grid grid-cols-7 grid-rows-1 rounded-3x mx-30 max-h-[750px] mt-10 gap-2'>
        <div className='bg-[#91a095] rounded-3xl grid col-span-2 items-end justify-center'>
        <img src={homeImages[0]} alt="image1" />
        </div>
        <div className='flex gap-4 col-span-3 w-full h-full flex-col justify-between items-center'>
            <div className='bg-[#91a095] rounded-3xl flex justify-center items-end align-center overflow-hidden'>
                <img src={homeImages[2]} alt="image3" className='w-full h-full rounded-lg' />
            </div>
            <div className='flex flex-col items-center gap-3 justify-center'>
                <div className='text-7xl text-center text-txtColor font-semibold tracking-widest stretchTxt selectNone'>ULTIMATE</div>
                <div className='text-9xl text-center tracking-widest font-bold txtSale selectNone text-gray-500'>SALE</div>
                <div className='text-4xl text-center text-txtColor tracking-wider selectNone'>NEW ARRIVAL</div>
                <div className='flex items-center justify-center'>
                <Link to='/products'className='bg-third btnHover tracking-widest px-16 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>SHOP NOW</Link>
                </div>
            </div>
            <div className='bg-secondary rounded-3xl flex justify-center items-end align-center overflow-hidden'>
                <img src={homeImages[3]} alt="image4" className='w-full h-full rounded-lg' />
            </div>
        </div>
        <div className='bg-[#91a095] rounded-3xl grid col-span-2 items-end justify-center'>
        <img src={homeImages[1]} alt="image2" />
        </div>
    </div>
    :
    <div className='flex gap-4 col-span-3 w-full h-full flex-col justify-between items-center my-5 p-5'>
        <div className='bg-[#91a095] rounded-3xl flex justify-center items-end align-center px-4'>
            <img src={homeImages[2]} alt="image3" className='w-full h-full rounded-lg' />
        </div>
        <div className='flex flex-col items-center gap-3 justify-center'>
            <div className='text-7xl text-center text-txtColor font-semibold tracking-widest stretchTxt selectNone'>ULTIMATE</div>
            <div className='text-9xl text-center tracking-widest font-bold text-transparent txtSale selectNone'>SALE</div>
            <div className='text-4xl text-center text-txtColor tracking-wider selectNone'>NEW ARRIVAL</div>
            <div className='flex items-center justify-center'>
            <Link to='/products'className='bg-third btnHover tracking-widest px-16 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>SHOP NOW</Link>
            </div>
        </div>
        <div className='bg-secondary rounded-3xl flex align-center items-center px-3'>
            <img src={homeImages[3]} alt="image4" className='w-full h-full rounded-lg' />
        </div>
    </div>
  )
}

export default BannerOne