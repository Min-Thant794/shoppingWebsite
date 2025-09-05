import React, { useEffect, useState } from 'react'
import { newArrivalProducts, ProductCategories } from '../constants'
import { FaStar } from 'react-icons/fa'
import { FaSearch } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { TbMathGreater } from "react-icons/tb";
import { TbMathLower } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";

const NewArrivalProducts = () => {

  const [isFilteredButton, setIsFilteredButton] = useState(false)
  const toggleFilterButton = () => setIsFilteredButton(!isFilteredButton)

  const [allNaProducts, setAllNaProducts] = useState(newArrivalProducts)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    if(selectedCategory === "All")
        return setAllNaProducts(newArrivalProducts)

    const filteredProduct = newArrivalProducts.filter(product => product.categories === selectedCategory)
    setAllNaProducts(filteredProduct)
  }, [selectedCategory])

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const totalPages = Math.ceil(allNaProducts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1)

  const firstIndex = ((currentPage - 1) * itemsPerPage);
  const lastIndex = firstIndex + 11;

  const paginateItems = allNaProducts.slice(firstIndex, lastIndex + 1);

  return (
    <div>
        <div className='flex justify-between py-5'>
            <div className=''>
                <div className='font-georgia text-3xl text-left text-txtColor4 font-semibold tracking-wide'>
                    New Arrival Products
                </div>
                <div className='text-txtColor3 tracking-wide font-roboto text-sm pt-5 pr-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex illo consequuntur, quisquam enim, dolor ad sint at totam suscipit dignissimos corrupti perferendis facilis veniam sunt quo voluptatum molestias reprehenderit.
                </div>
            </div>
            <div>
                <div className='flex gap-3'>
                    <label htmlFor='search' className='flex justify-between items-center bg-secondary text-center font-semibold tracking-wide text-md p-3 rounded-lg shadow-xl'>
                        <input id='search' type="text" placeholder='Search Products' className='outline-none active:opacity-60' />
                        <FaSearch className='active:opacity-60 text-lg' />
                    </label>
                </div>
            </div>
        </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-5'>
                    <div 
                    className='flex bg-third font-semibold rounded-lg gap-3 p-3 text-txtColor4 cursor-pointer active:bg-third/70 select-none shadow-xl'
                    onClick={toggleFilterButton}
                    >
                        <div 
                        className='font-roboto tracking-wide'
                        >
                            Filter
                        </div>
                        <div className='flex items-center text-lg'>
                            <TbAdjustmentsHorizontal />
                        </div>
                    </div>
                    {
                        selectedCategory !== "All" &&
                        <div 
                        onClick={() => setSelectedCategory("All")}
                        className='flex items-center bg-third rounded-lg gap-1 p-3 text-txtColor4 cursor-pointer active:bg-third/70 select-none shadow-xl'>
                            <div className='font-bold'>Clear Filter</div>
                            <div className='text-lg mt-1'>
                                <IoCloseSharp />
                            </div>
                        </div>
                    }
                </div>
                <div className='flex gap-1'>
                    <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage-1)}
                    className='flex gap-1 p-3 bg-third rounded-lg font-roboto disabled:opacity-50 disabled:cursor-not-allowed text-txtColor4 tracking-wide font-semibold active:opacity-70 shadow-xl'>
                        <TbMathLower className='font-bold mt-1 font-xl ' />
                        Prev
                    </button>
                    {
                        Array.from({length: totalPages}, (_, i = totalPages) => 
                        <button 
                        onClick={() => setCurrentPage(i + 1)}
                        className='text-txtColor4 font-roboto px-3 rounded-lg font-semibold bg-secondary active:opacity-70 shadow-xl'>
                            {i + 1}
                        </button>
                        ) 
                    }
                    {/* edit paginat icons and change totalPages with appropriate usestate */}
                    <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className='flex gap-1 p-3 bg-third rounded-lg font-roboto disabled:opacity-50 disabled:cursor-not-allowed text-txtColor4 tracking-wide font-semibold active:opacity-70 shadow-xl'>
                        Next
                        <TbMathGreater className='font-bold mt-1 font-xl' />
                    </button>
                </div>
            </div>
            {
                isFilteredButton ?
                <div className='flex gap-3 py-5 transition-all duration-700'>
                    {
                        ProductCategories.map((cat) => {
                            return <div 
                            onClick={() => setSelectedCategory(cat.categories)}
                            className={`p-2 bg-third rounded-lg active:opacity-70 ${(cat.categories === selectedCategory ? 'bg-txtColor4 text-white' : '')} cursor-pointer font-semibold tracking-wide font-roboto text-txtColor4 shadow-lg`}>
                                {cat.categories}
                            </div>
                        })
                    }
                </div>
                :
                <div className='my-5'>
                </div>
            }
        
        <div className='grid grid-cols-3 grid-rows-3 gap-3 w-full justify-items-center'>
            {
                paginateItems.map((cat) => (
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
        <div className='flex gap-1 justify-center py-3'>
            <button
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)}
            className='flex gap-1 p-3 bg-third rounded-lg font-roboto disabled:opacity-50 disabled:cursor-not-allowed text-txtColor4 tracking-wide font-semibold active:opacity-70 shadow-xl'>
                <TbMathLower className='font-bold mt-1 font-xl ' />
                Prev
            </button>
            {
                Array.from({length: totalPages}, (_, i = totalPages) => 
                <button 
                onClick={() => setCurrentPage(i + 1)}
                className='text-txtColor4 font-roboto px-3 rounded-lg font-semibold bg-secondary active:opacity-70 shadow-xl'>
                    {i + 1}
                </button>
                ) 
            }
            {/* edit paginat icons and change totalPages with appropriate usestate */}
            <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className='flex gap-1 p-3 bg-third rounded-lg font-roboto disabled:opacity-50 disabled:cursor-not-allowed text-txtColor4 tracking-wide font-semibold active:opacity-70 shadow-xl'>
                Next
                <TbMathGreater className='font-bold mt-1 font-xl' />
            </button>
        </div>
    </div>
  )
}

export default NewArrivalProducts