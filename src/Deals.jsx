import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './footer'
import { dealsDiscount, dealsProducts, ProductCategories } from './constants'
import { FaStar } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { MdClose } from "react-icons/md";
import { TbMathGreater } from "react-icons/tb";
import { TbMathLower } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const Deals = () => {

  const [allDealProducts, setAllDealProducts] = useState(dealsProducts)
  const [isSelectedDeals, setIsSelectedDeals] = useState("All")

  useEffect(() =>{
    if (isSelectedDeals === "All")
      return  setAllDealProducts(dealsProducts)
    const filteredProducts = dealsProducts.filter(product => product.discount === isSelectedDeals)
    setAllDealProducts(filteredProducts)
  }, [isSelectedDeals])

  const [itemsPerPage, setItemsPerPage] = useState(12)
  const totalPages = Math.ceil(allDealProducts.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const firstIndex = ((currentPage - 1) * itemsPerPage)
  const lastIndex = firstIndex + 11

  const paginateItems = allDealProducts.slice(firstIndex, lastIndex + 1)

  const [searchDealProducts, setSearchDealProducts] = useState('')

  useEffect(() => {
    const searchItems = dealsProducts.filter(item => item.name.toLowerCase().includes(searchDealProducts.toLowerCase()))

    setAllDealProducts(searchItems)
    setCurrentPage(1)
  }, [searchDealProducts])

  return (

    <div className='bgColor'>
      <NavBar />
      <div className='px-30 py-10'>
        <div className='flex justify-between'>
          <div className='text-4xl font-bold font-roboto tracking-wide'>
            NATIONAL DAY SALE: EXTRA 30% OFF IN CART
          </div>
          <label htmlFor='search' className='flex justify-between items-center bg-secondary text-center font-semibold tracking-wide text-md p-3 rounded-lg shadow-xl'>
            <input id='search' type="text" placeholder='Search Deal Products' onChange={(e) => setSearchDealProducts(e.target.value)} className='outline-none active:opacity-60' />
            <FaSearch className='active:opacity-60 text-lg' />
          </label>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center gap-3'>
            <div 
            onClick={() => setIsSelectedDeals(("All"))}
            className={`py-3 px-3 bg-txtColor  text-center font-roboto transition-all duration-300 hover:bg-txtColor/70 active:opacity-60 font-semibold tracking-wider rounded-md shadow-xl cursor-pointer`}>
              Shop All Deals
            </div>
            <div className='grid grid-cols-4 gap-3 py-10'>
              {
                dealsDiscount.map((dis) => (
                  <Link
                  onClick={()=>setIsSelectedDeals(dis.discount)}
                  className={`flex items-center justify-center gap-2 px-2 py-3 bg-txtColor ${(dis.discount === isSelectedDeals ? 'bg-txtColor4 text-txtColor2' : '')} transition-all duration-300 hover:bg-txtColor/70 active:opacity-60 text-center font-roboto font-semibold tracking-wider rounded-md shadow-xl`}
                  > 
                    {dis.discount}
                    <div>Discount Deals</div>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button className='bg-txtColor disabled:cursor-not-allowed disabled:opacity-40 hover:bg-txtColor/70 duration-500 active:opacity-80 rounded-lg p-3 font-semibold tracking-wide cursor-pointer shadow-xl'
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage-1)}
            >
              Prev
            </button>
            {
              Array.from({length: totalPages}, (_, i = totalPages) => 
              <button 
              className={`rounded-md p-2 ${currentPage === i + 1 ? 'bg-txtColor' : 'bg-secondary'}
              hover:opacity-60 duration-500 active:opacity-60 cursor-pointer shadow-x disabled:cursor-not-allowed`}
              disabled = {currentPage === i + 1}
              onClick={() => setCurrentPage(i+1)}
              >
                {i + 1}
              </button>
              )
            }
            <button className={`flex gap-1 items-center disabled:cursor-not-allowed disabled:opacity-40 bg-txtColor hover:bg-txtColor/70 duration-500 active:opacity-80 font-semibold tracking-wide p-3 rounded-lg cursor-pointer shadow-xl`}
            disabled = {currentPage == totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            >
            Next</button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 px-30 gap-15'>
              {
                  paginateItems.map((cat) => (
                      <div 
                      id={cat.id}
                      className='bg-secondary rounded-2xl mb-10 shadow-2xl hover:translate-1.5 duration-700'>
                          <div className='shadow-lg'>
                              <img src={cat.img} alt="" className='rounded-t-2xl w-full' />
                          </div>
                          <div className='grid grid-cols-5 py-5 px-5'>
                              <div className='col-span-3 font-roboto'>
                                  <div className='text-xl text-txtColor4 font-semibold'>
                                      {cat.name}
                                  </div>
                                  <div className='text-txtColor4/80 text-sm tracking-wide'>
                                      {cat.tag}
                                  </div>
                                  <div className='text-txtColor4 text-sm tracking-wide py-3'>
                                      {cat.review}
                                  </div>
                                  <div className='flex gap-1 items-center text-xl text-txtColor4 font-semibold'>
                                      <div>Price:</div>
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
          <div className='flex justify-center items-center gap-2 pt-5 pb-10 '>
            <button className='flex items-center gap-1 bg-txtColor active:opacity-80 disabled:cursor-not-allowed disabled:opacity-40 rounded-lg p-3 hover:bg-txtColor/70 duration-500 font-semibold tracking-wide cursor-pointer shadow-xl'
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage-1)}
            >
              <TbMathLower className='font-bold mt-0.5 font-xl ' /> 
              Prev
            </button>
            {
              Array.from({length: totalPages}, (_, i = totalPages) => 
              <button 
              className={`rounded-md p-2 ${currentPage === i + 1 ? 'bg-navColor' : 'bg-secondary'} disabled:cursor-not-allowed hover:opacity-60 duration-500 active:opacity-60 cursor-pointer shadow-xl font-semibold`}
              disabled= {currentPage === i + 1}
              onClick={() => setCurrentPage(i+1)}
              >
                {i + 1}
              </button>
              )
            }
            <button 
            className='flex  items-center gap-1 bg-txtColor active:opacity-80 font-semibold disabled:cursor-not-allowed disabled:opacity-40 tracking-wide p-3 hover:bg-txtColor/70 duration-500 rounded-lg cursor-pointer shadow-xl'
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage+1)}
            >
              Next 
              <TbMathGreater className='font-bold mt-0.5 font-xl' />
            </button>
          </div>
      <Footer />
    </div>
  )
}

export default Deals