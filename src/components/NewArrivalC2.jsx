import React from 'react'
import { Link } from 'react-router-dom'
import { newArrivalCategories } from '../constants'
import arrivalImage from '../assests/image/peakyBlinder.png'
import points from '../assests/image/points.png'
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const NewArrivalC2 = () => {
  return (
    <div className='grid grid-cols-7'>
        <div className='flex relative items-center justify-center col-span-3 bg-txtColor3'>
            <img src={arrivalImage} alt="" className='w-[85%]' />
            <div className='absolute py-10 pt-10'>
                <img src={points} alt="" className='w-[77%]' />
            </div>
        </div>
        <div className="relative flex justify-center items-end-safe bg-navColor overflow-hidden border-none">
            <div className="absolute h-[280%] w-75 bg-[#767676] border-x-3 border-txtColor4 transform rotate-[20deg] origin-center"></div>
        </div>  
        <div className='col-span-3 bg-navColor py-5 pb-5 pr-30'>
            <div className='text-md text-txtColor4/80 font-roboto'>Women Collection</div>
            <div className='text-4xl font-georgia text-txtColor4 py-3'>Peaky Blinders</div>
            <div className='text-md text-txtColor4 font-roboto underline underline-offset-2 py-3'>DESCRIPTION</div>
            <div className='text-md text-txtColor2/70 font-roboto tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae qui harum praesentium totam itaque, magnam officiis expedita alias necessitatibus repellat maiores voluptate? Nobis possimus repudiandae quisquam? Consequatur, non debitis.</div>
            <div className='flex gap-3 py-3 items-center'>
                <div className='text-txtColor2/70 text-md font-semibold tracking-wider'>Size:</div>
                <div className='bg-[#4B4B4B] px-4 rounded-lg text-txtColor2'>M</div>
            </div>
            <div>
                <div className=''>
                    <div className='text-2xl font-roboto font-semibold text-txtColor4 tracking-wide'>$100.00</div>
                </div>
            </div>
            <div className='flex w-full items-center justify-start py-4'>
                <Link to='/new-arrival'className='bg-[#4B4B4B] btnHover tracking-widest px-10 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>Buy Now</Link>
            </div>
        </div>
        <div className='px-30 grid grid-cols-4 py-10 col-span-7 justify-items-center'>
            <div className='flex items-center gap-2.5 justify-center'>
                <div className='text-5xl text-txtColor3'>
                    <FaHandHoldingHeart />
                </div>
                <div>
                    <div className='text-xl font-roboto text-txtColor3 font-semibold tracking-wide'>High Quality</div>
                    <div className='text-txtColor3 tracking-wide'>Crafted From Top Materials</div>
                </div>
            </div>
            <div className='flex items-center gap-3 justify-center'>
                <div className='text-5xl text-txtColor3'>
                    <RiVerifiedBadgeFill />
                </div>
                <div>
                    <div className='text-xl font-roboto text-txtColor3 font-semibold tracking-wide'>Warranty Protection</div>
                    <div className='text-txtColor3 tracking-wide'>Over 2 Years</div>
                </div>
            </div>
            <div className='flex items-center gap-2.5 justify-center'>
                <div className='text-5xl text-txtColor3'>
                    <FaShippingFast />
                </div>
                <div>
                    <div className='text-xl font-roboto text-txtColor3 font-semibold tracking-wide'>Free Shipping</div>
                    <div className='text-txtColor3 tracking-wide'>Order Over 150$</div>
                </div>
            </div>
            <div className='flex items-center gap-2.5 justify-center'>
                <div className='text-5xl text-txtColor3'>
                    <FaSquarePhone />
                </div>
                <div>
                    <div className='text-xl font-roboto text-txtColor3 font-semibold tracking-wide'>24/7 Support</div>
                    <div className='text-txtColor3 tracking-wide'>Dedicated Support</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivalC2