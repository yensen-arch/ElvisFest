"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const carouselData = [
  {
    id: 1,
    image: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    title: 'The King of Rock and Roll',
    date: 'January 8, 1935 - August 16, 1977',
    description: 'Experience the magic of Elvis Presley, the cultural icon who forever changed the face of music.',
  },
  {
    id: 2,
    image: 'https://imgs.search.brave.com/0YwojIYcUwnQ-5ydQHPGUh1KNqtyrjpdhAJHGe-yBEE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NzM0MDU2L3Bob3Rv/L3dhbGstb2YtZmFt/ZS1ob2xseXdvb2Qt/c3Rhci1lbHZpcy1w/cmVzbGV5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yLVlS/eHJ1dnBDQjg3V0Ji/QXlERzJncTJOVWRF/RTlQRllPZWpDeS1a/YXZrPQ',
    title: 'Graceland Tours',
    date: 'Open Daily',
    description: 'Visit the legendary mansion and walk through the life of Elvis Presley.',
  },
  {
    id: 3,
    image: 'https://imgs.search.brave.com/CvxT_Arl5q2Q5ptPKTPtFSvZ0jg9cg6x14W3hPlaamE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDgv/MjMtZWx2aXMtcHJl/c2xleS1nZXR0eWlt/YWdlcy0xNTEzNzM1/MTkuanBlZz9xdWFs/aXR5PTc1Jnc9MjQw/MA',
    title: 'Musical Legacy',
    date: '1954 - 1977',
    description: 'Over 150 albums and singles on Billboards Hot 100 Pop Chart in America.',
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
    <div className="relative h-[600px] bg-black">
      <div className="container mx-auto h-full">
        <div className="flex h-full">
          {/* Left side - Image */}
          <div className="w-1/2 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={carouselData[currentIndex].image}
                alt={carouselData[currentIndex].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Right side - Content */}
          <div className="w-1/2 flex items-center">
            <div className="p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold text-gold font-elvis">
                    {carouselData[currentIndex].title}
                  </h2>
                  <p className="text-xl text-gold/80">
                    {carouselData[currentIndex].date}
                  </p>
                  <p className="text-lg text-gold/60">
                    {carouselData[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-gold/40'
              }`}
            />
          ))}
        </div>

        {/* Arrow Controls */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-300"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-300"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
} 