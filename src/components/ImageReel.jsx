import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Young Elvis performing at the Louisiana Hayride, 1954 - where it all began.'
  },
  {
    id: 2,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Elvis in his Army uniform, 1958 - serving his country while remaining the King.'
  },
  {
    id: 3,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Aloha from Hawaii, 1973 - the first concert broadcast globally via satellite.'
  },
  {
    id: 4,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Las Vegas residency, 1969 - redefining entertainment in the Entertainment Capital.'
  },
  {
    id: 5,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Elvis at Graceland - the iconic mansion that became his sanctuary.'
  },
  {
    id: 6,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'The legendary white jumpsuit - a symbol of 70s Elvis showmanship.'
  },
  // Duplicate first 3 images to create seamless loop
  {
    id: 7,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Young Elvis performing at the Louisiana Hayride, 1954 - where it all began.'
  },
  {
    id: 8,
    src: 'https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M=',
    caption: 'Elvis in his Army uniform, 1958 - serving his country while remaining the King.'
  },
  {
    id: 9,
    src: 'https://imgs.search.brave.com/dlxi3p8anrUTYTI95x0Awopyfbs3ceDseBmXYo8pQeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/cC5zbWVob3N0Lm5l/dC9zaXRlcy9iYzhl/ZTEzMDU2N2Y0MjAz/YTE3YzY2ZmVhODlk/YzcyYi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMy8yMzAz/MjQtZWx2aXMtbGl2/ZTE5NzIuanBn',
    caption: 'Aloha from Hawaii, 1973 - the first concert broadcast globally via satellite.'
  }
];

export default function ImageReel() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black py-16 overflow-hidden">
      <motion.div 
        className="flex gap-4 py-8"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="relative flex-none w-[300px] h-[400px] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt="Elvis"
              className="w-full h-full object-cover rounded-lg border-2 border-gold/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-gold/90 text-sm font-elvis">Click to enlarge</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-black rounded-xl border-2 border-gold/30 overflow-hidden"
            >
              <img
                src={selectedImage.src}
                alt="Elvis"
                className="w-full h-[70vh] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-gold text-lg font-elvis text-center">
                  {selectedImage.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-gold hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 