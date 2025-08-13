import React, { useState, useEffect, useRef } from 'react'
import { carouselImages } from '../constants'

const ImgCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselImages.length;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goToSlide = (index) => {
    const newIndex = (index + totalSlides) % totalSlides; // Fixed: was % total
    setCurrentIndex(newIndex)
  }

  //auto play
  useEffect(() => {
    const interval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  //touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  }

  const handleTouchEnd = (e) => {
    const distance = touchStartX.current - touchEndX.current;
    if(distance > 50) goToSlide(currentIndex + 1);
    else if(distance < -50) goToSlide(currentIndex - 1); // Fixed: was < 50
  };

  return (
    <div className='w-full'>
        <div className='relative w-full overflow-hidden'>
            <div 
            className='flex transition-transform duration-500 ease-in-out'
            style={{transform: `translateX(-${currentIndex * 100}%)`}}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
                {
                    carouselImages.map((image, index) => (
                            <img 
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className='w-full flex-shrink-0 object-contain'
                            />
                    ))
                }
            </div>
        </div>

        <div className="flex gap-3 items-baseline justify-center pt-10">
            {carouselImages.map((_, index) => (
            <div
                key={index}
                className={`rounded-full p-2 border-black border-2 cursor-pointer transition ${
                index === currentIndex ? 'bg-black' : ''
                }`}
                onClick={() => goToSlide(index)}
            >
                <div
                className={`rounded-full p-2 ${
                    index === currentIndex ? 'bg-txtColor4' : 'bg-gray-300'
                }`}
                ></div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ImgCarousel