import React from 'react'
import { carouselImages } from './constants'
import { Link } from 'react-router-dom'
import ImgCarousel from './components/ImgCarousel'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DealsOfMonth = () => {
  return (
    window.innerWidth >= 1024 
    ?
    <div className='grid grid-cols-5 px-30 gap-5'>
        <div className='col-span-2'>
            <div className='font-georgia font-semibold text-3xl text-txtColor4'>Deals Of The Month</div>
            <div className='font-roboto tracking-wide text-txtColor4/60 text-left py-7 pr-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero quaerat quia earum animi dolorum repellendus doloremque incidunt dicta dolor fugit ipsum voluptate, optio distinctio. Voluptates at vel impedit ducimus.</div>
            <div className='flex w-full'>
                <Link to='/deals'className='bg-third btnHover tracking-widest px-10 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>BUY NOW</Link>
            </div>
            <div className='flex flex-col py-7'>
                <div className='font-roboto font-semibold text-2xl text-txtColor4/70'>Hurry, Before It's Too Late!</div>
                <div className='flex gap-3 pt-3 items-center justify-start text-txtColor2/70'>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>02</div>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>06</div>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>60</div>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>30</div>
                </div>
                <div className='flex gap-4 pt-2 items-center text-txtColor font-semibold text-left text-xl'>
                    <div className='px-2'>Days</div>
                    <div className='px-2'>Hr</div>
                    <div className='px-3'>Mins</div>
                    <div className='px-1'>Sec</div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-3'>
                <button className='bg-third btnHover rounded-full p-3 text-3xl shadow-xl active:opacity-75'><MdOutlineKeyboardArrowLeft /></button>
                <button className='bg-third btnHover rounded-full p-3 text-3xl shadow-xl active:opacity-75'><MdOutlineKeyboardArrowRight /></button>
            </div>
        </div>
        <div className='flex col-span-3 gap-3'>
            <img src={carouselImages[0]} alt="carousel image 1" className='object-none' />
            <div className=''>
                <div className=''>
                    {/* <ImgCarousel /> */}
                </div>
            </div>
        </div>
    </div>
    :
    <div className='py-5'>
        <div className='px-3'>
            <div className='flex items-center justify-center font-georgia font-semibold text-3xl text-txtColor4 p-3'>Deals Of The Month</div>
            <div className='pt-3 px-3 flex items-center justify-center'>
                <img src={carouselImages[0]}
                alt=""
                className='rounded-2xl'
                />
            </div>
            <div className='flex justify-center items-center font-roboto text-justify tracking-wide text-txtColor4/60 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero quaerat quia earum animi dolorum repellendus doloremque incidunt dicta dolor fugit ipsum voluptate, optio distinctio. Voluptates at vel impedit ducimus.</div>
            <div className='flex flex-col p-3 '>
                <div className='font-roboto font-semibold text-2xl text-txtColor4/70 flex justify-center'>Hurry, Before It's Too Late!</div>
                <div className='flex gap-3 pt-3 items-center justify-center text-txtColor2/70'>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>02</div>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>06</div>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>60</div>
                    <div className='bg-navColor rounded-xl text-3xl p-3 text-center shadow-xl'>30</div>
                </div>
                <div className='flex gap-4 pt-2 items-center justify-center text-txtColor font-semibold text-left text-xl'>
                    <div className='px-2'>Days</div>
                    <div className='px-2'>Hr</div>
                    <div className='px-3'>Mins</div>
                    <div className='px-1'>Sec</div>
                </div>
            </div>
            <div className='flex w-full p-3 items-center justify-center'>
                <Link to='/products'className='bg-third btnHover tracking-widest px-10 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>BUY NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default DealsOfMonth