import React from 'react'
import { newArrivalCategories } from '../constants'
import { FaStar } from 'react-icons/fa'

const NewArrivalProducts = () => {

  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-3 w-full justify-items-center'>
        {
            newArrivalCategories.map((cat) => (
                <div className='bg-secondary rounded-2xl p-5 mb-10 shadow-2xl hover:translate-1.5 duration-700'>
                    <div>
                        <img src={cat.img} alt="" />
                    </div>
                    <div className='grid grid-cols-5 py-3'>
                        <div className='col-span-3 font-roboto'>
                            <div className='text-xl text-txtColor4 font-semibold'>
                                {cat.title}
                            </div>
                            <div className='text-txtColor4/80 text-sm tracking-wide'>
                                {cat.tag}
                            </div>
                            <div className='text-txtColor4 text-sm tracking-wide py-3'>
                                {cat.review}
                            </div>
                            <div className='text-xl text-txtColor4 font-semibold'>
                                {cat.price}
                            </div>
                        </div>
                        <div className='flex flex-col relative col-span-2'>
                            <div className='flex items-center justify-end'>
                                {Array.from({length: cat.rating}, (_, i) => <FaStar />)}
                            </div>
                            <div className='absolute bottom-0 right-0 text-red-600 text-sm text-right'>
                                {cat.itemLeft}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NewArrivalProducts