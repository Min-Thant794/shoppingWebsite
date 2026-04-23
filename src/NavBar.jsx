import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {navItems} from './constants'
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen)

  return (
    window.innerWidth >= 768
    ?
    <div className='flex lg:flex-row flex-col justify-between items-center p-3 bg-navColor px-30'>
      <div className='text-3xl font-bold font-serif cursor-pointer tracking-wider'>
        THREADED 
      </div>
      <div className='flex tracking-wider gap-5'>
        {
          navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `text-lg group ${isActive ? 'text-txtColor2 font-bold' : 'navHover'}`}
            >
              {item.name}
              <span className='transition-discrete duration-500 block w-0 h-[3px] bg-txtColor3 group-hover:w-full'></span>
            </NavLink>
          ))
        }
      </div>
    </div>
    :
    <div className={`${isSideBarOpen ? 'sticky top-0 z-50' : ''}`}>
      <div className='relative flex justify-between px-3 py-2 z-50 bg-navColor'>
        <div className='flex text-3xl font-bold font-serif selectNone cursor-pointer'>
          THREADED
        </div>
        <IoMenu className={`transition-all duration-700 cursor-pointer text-4xl ${isSideBarOpen ? 'rotate-90' : 'rotate-0'}`}
          onClick={toggleSideBar}
        />
      </div>
      <div className={`absolute transition-all duration-700 bg-navColor w-full flex flex-col z-30 items-center py-2 gap-3 ${isSideBarOpen ? 'top-12' : '-top-[100%]'}`}>
        {navItems.map((link, index) => (
          <div 
          key={link.name} 
          className='w-full text-2xl tracking-wider text-secondary text-center'>
            <NavLink 
              to={link.path}
              onClick={() => setIsSideBarOpen(false)}
              className={`text-nowrap transition-all ${isSideBarOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transitionDuration: `${700 * index}ms`
              }}
            >
              {link.name}
              <span className='block my-1 w-full h-[2px] bg-txtColor3 group-hover:w-full'></span>
            </NavLink>
          </div>
        ))}
      </div>
      {isSideBarOpen && (
        <div className='fixed w-full h-screen inset-0 bg-black/20'
          onClick={(e) =>{
            e.stopPropagation()
            setIsSideBarOpen(false)
          }}
        >

        </div>
      )}
    </div>
    
  )
}

export default NavBar