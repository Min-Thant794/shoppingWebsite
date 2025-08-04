import React, {useState, useEffect} from 'react'
import { logoImages } from './constants'
import { Link } from 'react-router-dom'

const LogoBrands = () => {

  const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  }

  useEffect(() => {
    const interval = setInterval((prevIndex) => {
        prevIndex === logoImages.length - 1 ? 0 : prevIndex + 1
    }, 3000);
    return () => clearInterval(interval);
  });

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
    <div className='w-full overflow-hidden relative'>
        <div
            className='flex transition-transform duration-500 ease-in-out'
        >
            {
                logoImages.map((logo, index) => {
                    return <div
                    key={logo.name}
                    className='w-full flex-shrink-0 p-3'
                    style={{width: `${100 / logoImages.length}%`}}
                    >
                        <Link
                        to={logo.link}
                        >
                        <img src={logo.name}
                         alt={logo.alt} 
                         className='w-auto h-auto object-contain'
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