import React from 'react'
import { Link } from 'react-router-dom'
import {dealsImgs, dealsProducts, dealsDiscount} from '../constants'
import { useNavigate } from 'react-router-dom'

const Discount = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col px-30 items-center justify-center'>
        <div className='text-3xl font-georgia tracking-wide py-5'>
            DEALS
        </div>
        <div className='grid grid-cols-4 gap-3 pt-5 pb-15'>
            <div className='flex flex-col bg-txtColor3 p-3 shadow-2xl'>
                <div className='text-3xl font-semibold text-txtColor2/90 font-roboto'>
                    SCORE 30% OFF SELECTED STYLES
                </div>
                <div className='text-md text-txtColor2/90 font-roboto py-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, ex est. Dicta incidunt quis totam distinctio obcaecati. Ipsa ipsum ad, in quidem optio harum quam culpa est sint commodi consectetur.
                </div>
                <div className='py-5'>
                    <Link
                    to='/deals'
                    state={dealsProducts.discount}
                    className='bg-navColor btnHover tracking-widest px-5 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>
                        Shop All
                    </Link>
                </div>
            </div>
            <Link
            to='/deals'
            className='relative shadow-2xl'>
                <img src={dealsImgs[0]} alt=""
                className='w-full h-full object-cover' />
                <div className='flex gap-3 absolute bottom-0 left-0 p-3 items-center'>
                    <div className='text-red-600 font-md font-semibold bg-navColor/50 px-2 py-1 rounded-md'>%</div>
                    <div className='bg-navColor/50 px-2 py-1 font-semibold tracking-wide rounded-md'>SHOP MEN'S FASHION</div>
                </div>
            </Link>
            <Link
            to='/deals'
            className='relative shadow-2xl'>
                <img src={dealsImgs[1]} alt=""
                className='w-full h-full object-cover' />
                <div className='flex gap-3 absolute bottom-0 left-0 p-3 items-center'>
                    <div className='text-red-600 font-md font-semibold bg-navColor/50 px-2 py-1 rounded-md'>%</div>
                    <div className='bg-navColor/50 px-2 py-1 font-semibold tracking-wide rounded-md'>SHOP WOMEN'S FASHION</div>
                </div>
            </Link>
            <Link
            to='/deals'
            className='relative shadow-2xl'>
                <img src={dealsImgs[2]} alt=""
                className='w-full h-full object-cover' />
                <div className='flex gap-3 absolute bottom-0 left-0 p-3 items-center'>
                    <div className='text-red-600 font-md font-semibold bg-navColor/50 px-2 py-1 rounded-md'>%</div>
                    <div className='bg-navColor/50 px-2 py-1 font-semibold tracking-wide rounded-md'>SHOP ACCESSORIES</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Discount