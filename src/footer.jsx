import React from 'react'
import {Link, NavLink } from 'react-router-dom';
import { footerLinks } from './constants';
import { SocialMediaIcons } from './constants';

const footer = () => {

    const footerLinks = [
        {name: "Support Center", path: "/support-center"},
        {name: "Invoicing", path: "/invoicing"},
        {name: "Contract", path: "/contract"},
        {name: "Careers", path: "/careers"},
        {name: "Blog", path: "/blog"},
        {name: "FAQs", path: "/faqs"}
  ]

    return (
        window.innerWidth >= 768 
        ?
        <div className='bg-third py-2'>
            <div className='grid grid-cols-5 justify-between px-30 gap-5'>
                <div className='text-left selectNone'>
                    <div className='text-3xl font-bold font-serif'>
                        THREADED
                    </div>
                    <div className='text-justify'>
                        THREAD is a local clothing brand where it is located in Mandalay, Myanmar. Threaded is popular among teenagers due to its mordern fashion designs.
                    </div>
                </div>
                <div>
                    <div className='font-semibold'>What's On</div>
                    <div>
                        <Link>
                            Promotions
                        </Link>
                    </div>
                    <div>
                        <Link>
                            Store Offers
                        </Link>
                    </div>
                    <div>
                        <Link>
                            Events
                        </Link>
                    </div>
                    <div>
                        <Link>
                            Blog
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify items-start'>
                    {
                        footerLinks.map(l => {
                            return <NavLink
                            key={l.name}
                            to={l.path}
                            className='font-semibold tracking-wide active:opacity-55'
                            >
                                {l.name}
                            </NavLink>
                        })
                    }
                </div>
                <div>
                    <div className='font-semibold'>Location</div>
                    <div className='py-1'>Between 77 & 78 St. Mandalay, Myanmar</div>
                    <div className='font-semibold'>Hotline Number</div>
                    <div>+959987654321</div>
                    <div className='font-semibold'>Opening Hour</div>
                    <div> 10am to 10pm</div>
                </div>
                <div>
                    <div className='gap-3 items-center'>
                        <div className='flex items-center justify-end font-semibold'>Follow Us On</div>
                        <div className='flex items-center justify-end gap-1.5'>
                            {
                                SocialMediaIcons.map(({name, icon: Icon, link}) => 
                                <div className='text-3xl py-2 active:opacity-45'>
                                    <a 
                                    key={name}
                                    href={link}
                                    >
                                        <Icon />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='text-xs text-center text-black/70 pt-3'>
                Copyright &#169; 2025 THREADED | All Right Reserved.
            </div>
        </div>
        :
        <div className='flex flex-col gap-1 bg-third px-2 py-3 text-center font-semibold'>
            <div className='text-3xl font-bold font-serif selectNone'>THREADED</div>
            <div className='py-1'>Between 77 & 78 St. Mandalay, Myanmar</div>
            <div>+959987654321</div>
            <div> Opening Hours: 10am to 10pm</div>
            <div>Follow Us On:</div>
            <div className='flex items-center justify-center gap-1.5'>
                {
                    SocialMediaIcons.map(({name, icon: Icon, link}) => 
                    <div className='text-2xl py-2 active:opacity-45'>
                        <a 
                        key={name}
                        href={link}
                        >
                            <Icon />
                        </a>
                    </div>
                    )
                }
            </div>
            <div className='text-xs text-center text-black/70'>
                Copyright &#169; 2025 THREADED | All Right Reserved.
            </div>
        </div>
  )
}

export default footer