"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar({ currentPage }) {
  const [scrollDirection, setScrollDirection] = useState(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const animatedStripRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    const animatedStrip = animatedStripRef.current
    if (!animatedStrip) return

    // Set the animation direction based on scroll direction
    if (scrollDirection === "down") {
      animatedStrip.style.animationDirection = "normal"
    } else if (scrollDirection === "up") {
      animatedStrip.style.animationDirection = "reverse"
    }
  }, [scrollDirection])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Animated Strip */}
      <div
        ref={animatedStripRef}
        className="bg-black overflow-hidden whitespace-nowrap"
        style={{
          animation: "scrollText 20s linear infinite",
        }}
      >
        <div className="flex items-center py-1">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center mx-2">
              <Image
                src="https://media.gettyimages.com/id/458882193/photo/elvis-presley-single-covers.jpg?s=612x612&w=0&k=20&c=ALc8lJ6dgOkOHrxL3i91O0SVaoO-0Byf1qG9rnUe72M="
                alt="Elvis icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-white text-[0.6em] font-bold mr-2">ELVIS LIVE</span>
              <span className="text-white text-[0.6em] bg-gray-700 px-2 py-0.5 rounded-sm">APR 24</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gradient-to-r border-b border-yellow-500 border-1 from-slate-300 to-slate-900 text-white py-1 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/A5sZrCUHQ0c3ChwA0Fz5/media/66f36b68e8902d21ddeaee88.png"
              alt="V4V Logo"
              width={180}
              height={90}
              className="w-24 md:w-32 lg:w-40 mr-4"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
              currentPage === "home" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/vendors"
            className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
              currentPage === "vendors" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
            }`}
          >
            Vendors
          </Link>
          <Link
            href="/hotels"
            className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
              currentPage === "hotels" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
            }`}
          >
            Hotels
          </Link>
          <Link
            href="/schedule"
            className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
              currentPage === "schedule" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
            }`}
          >Schedule</Link>
          
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-0 right-0 w-1/2 h-full bg-black transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              href="/"
              className={`text-lg font-medium hover:text-yellow-400 transition-colors ${
                currentPage === "home" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/vendors"
              className={`text-lg font-medium hover:text-yellow-400 transition-colors ${
                currentPage === "vendors" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vendors
            </Link>
            <Link
              href="/hotels"
              className={`text-lg font-medium hover:text-yellow-400 transition-colors ${
                currentPage === "hotels" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hotels 
            </Link>
            <Link
              href="/schedule"
              className={`text-lg font-medium hover:text-yellow-400 transition-colors ${
                currentPage === "schedule" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule 
            </Link>
            
            <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition-colors">
              BUY TICKETS
            </button>
          </div>
        </div>

        {/* Desktop Buy Tickets Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-yellow-400 text-xs text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition-colors">
            BUY TICKETS
          </button>
        </div>
      </nav>
    </header>
  )
}
