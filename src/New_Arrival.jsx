import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import NewArrivalProducts from './components/NewArrivalProducts'
//import { FaStar } from "react-icons/fa"

// import NavBar from './NavBar'
// import Footer from './footer'
const New_Arrival = () => {

  return (
    <div className='bgColor'>
      <NavBar />
      <div className='px-30 py-20'>
        <div className='flex rounded-2xl py-5'>
            <NewArrivalProducts />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default New_Arrival