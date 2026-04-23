import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './footer'
import BannerOne from './BannerOne'
import LogoBrands from './LogoBrands'
import DealsOfMonth from './DealsOfMonth'
import NewArrivalProducts from './components/NewArrivalProducts'
import { Link } from 'react-router-dom'
import NewArrivalC2 from './components/NewArrivalC2'
import FollowUs from './components/FollowUs'
import Discount from './components/Discount'
import { allCategories } from './constants'

const Home = () => {

  return (
    <div className='bgColor'>
      <NavBar />
      <div className='pt-15'>
        <BannerOne />
      </div>
      <LogoBrands />
      <DealsOfMonth />
      <div className='flex flex-col px-30 py-15 items-center justify-center'>
        <div className='text-3xl font-semibold font-georgia text-txtColor4'>
          NEW ARRIVALS
        </div>
        <div className='font-roboto tracking-wide text-txtColor4/60 text-left py-7 px-30'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi id voluptatem eius exercitationem atque veniam eum quas corporis earum magnam blanditiis, consectetur itaque ullam explicabo rerum. Maxime, rerum doloribus.
        </div>
        <div className=''>
          <NewArrivalProducts />
        </div>
        <div className='flex w-full items-center justify-center'>
            <Link to='/new-arrival'className='bg-third btnHover tracking-widest px-10 py-3 rounded-lg text-xl text-txtColor2 shadow-xl'>VIEW MORE</Link>
        </div>
      </div>
      <div className=''>
        <NewArrivalC2 />
      </div>
      <div>
        <Discount />
        <FollowUs />
      </div>
      <Footer/>
    </div>
  )
}
export default Home