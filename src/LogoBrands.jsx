import React, {useState, useEffect} from 'react'
import { logoImages } from './constants'
import { Link } from 'react-router-dom'

const LogoBrands = () => {

  return (
    window.innerWidth >= 1024 ?
    <div className='grid grid-cols-5 mx-30 my-20 gap-5'>
        {
            logoImages.map(logo => {
                return <Link
                key={logo.name}
                to={logo.link}
                >
                <img src={logo.name} alt={logo.alt} />
                </Link>
            })
        }
    </div>
    :
    <div className='w-full'>
        <div
            className='flex'
        >
            {
                logoImages.map((logo) => {
                    return <div
                    key={logo.name}
                    className='w-full py-3 mx-3'
                    >
                        <Link
                        to={logo.link}
                        >
                        <img src={logo.name}
                         alt={logo.alt} 
                         className=''
                         />
                        </Link>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default LogoBrands