import React, { useState } from 'react'
import NavBar from './NavBar'
import BannerOne from './BannerOne'
import LogoBrands from './LogoBrands'
import DealsOfMonth from './DealsOfMonth'

const Home = () => {

  const greeting = "Prop test"

  return (
    <div className='bgColor'>
      <NavBar brandName={greeting}/>
      <BannerOne />
      <LogoBrands />
      <DealsOfMonth />
      <div>
        {/* <New_Arrival /> */}
      </div>
      <div>
        Products
      </div>
      {/* <Footer/> */}
    </div>
  )
}
export default Home