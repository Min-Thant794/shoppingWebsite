import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import { logoImages, navItems } from '../constants';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    const myScreenWidth = window.innerWidth;
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const navigate = useNavigate();

    //get cart from context
    const { cart } = useCart();

    //total cart item count
    const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

  return (
    <nav className='p-4 flex w-full bg-black text-white justify-between items-center'>
        {/* Logo */}
        <div
        className='flex gap-2 items-center cursor-pointer'
        onClick={() => navigate("/")}
        >
            <img src={logoImages[0].name} className='w-28 h-16 rounded-2xl'/>
        </div>

        {/* Desktop Menu */}
        <div className='md:flex hidden gap-8 items-center'>
            {navItems.map((item) => (
                <NavLink
                to={item.path}
                key={item.path}
                className={({ isActive }) => `${isActive ? 'text-white' : 'text-white/30'} relative`}
                >
                    {item.title}
                    {/* cart badge */}
                    {item.path === "/cart" && cartCount > 0 && (
                        <span className='absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full'>
                            {cartCount}
                        </span>
                    )}
                </NavLink>
            ))}

            {/* desktop logout */}
            <button 
            onClick={handleLogout}
            className='text-whtie/60 hover:text-white transition'
            >
                Logout
            </button>
        </div>

        {/* Mobile menu icon  */}
        {myScreenWidth <= 768 && (
            <div
            className='bg-black/20 z-50 rounded-xl group active:bg-black/50'
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            style={{boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.4"}}
            >
                <HiOutlineMenuAlt3 className='text-2xl cursor-pointer group-active:opacity-25'/>
            </div>
        )}

        {/* mobile sidebar */}
        {myScreenWidth <= 768 && (
            <nav
            className={`transition-all duration-500 ease-in-out fixed top-0 z-40 right-0 ${isSideBarOpen ? 'sm:w-[60%] w-[70%]' : 'w-0'} h-screen bg-white`}
            style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.4)"}}
            >
                <div className='p-4 mt-14 flex flex-col gap-4'>
                    {navItems.map((nav) => (
                        <NavLink
                        to={nav.path}
                        key={nav.path}
                        onClick={() => setIsSideBarOpen(false)}
                        className={({ isActive }) => 
                        `${isActive ? 'text-black' : 'text-black/40'} rounded-lg p-2 hover:bg-black/20 group glex items-center relative`}
                        >
                            {nav.name}

                            {/* mobile cart badge */}
                            {nav.path === "/cart" && cartCount > 0 && (
                                <span className='absolute right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full'>
                                    {cartCount}
                                </span>
                            )}
                        </NavLink>
                    ))}

                    {/* Mobile logout */}
                    {myScreenWidth <= 768 && isSideBarOpen && (
                        <div
                            className='bg-black/20 fixed z-20 inset-0 w-screen h-screen'
                            onClick={() => setIsSideBarOpen(false)}
                        />
                    )}
                </div>

            </nav>
        )}
    </nav>
  )
}

export default Navbar