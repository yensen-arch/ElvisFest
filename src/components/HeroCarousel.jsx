"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const carouselData = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dqh2tacov/image/upload/v1744369718/Elvis_Festival_dnkq0z.jpg',
    title: 'Get Your 2025 Elvis Festival Tickets',
    description: 'Limited Presale Extended Through April 15',
    buttonText: 'Buy Now',
    buttonLink: '#',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dqh2tacov/image/upload/v1744369718/Elvis_Festival_dnkq0z.jpg',
    title: 'Experience the King of Rock and Roll',
    description: 'Celebrating the Legacy of Elvis Presley',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dqh2tacov/image/upload/v1744369718/Elvis_Festival_dnkq0z.jpg',
    title: 'Graceland Special Exhibition',
    description: 'Exclusive Memorabilia on Display',
    buttonText: 'Get Tickets',
    buttonLink: '#',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Full-width background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <img 
            src={carouselData[currentIndex].image}
            alt={carouselData[currentIndex].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content positioned over the image */}
      <div className="container mx-auto h-full relative z-20">
        <div className="flex flex-col h-full justify-center items-start px-8 md:px-16 lg:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {carouselData[currentIndex].title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {carouselData[currentIndex].description}
              </p>
              <a 
                href={carouselData[currentIndex].buttonLink} 
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded hover:bg-gold transition-colors duration-300"
              >
                {carouselData[currentIndex].buttonText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}