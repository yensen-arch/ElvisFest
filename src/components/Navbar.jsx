"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar({ currentPage }) {
  const [scrollDirection, setScrollDirection] = useState(null)
  const [lastScrollY, setLastScrollY] = useState(0)
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
              <span className="text-white text-xs font-bold mr-2">ELVIS LIVE</span>
              <span className="text-white text-xs bg-gray-700 px-2 py-0.5 rounded-sm">MEMPHIS TN</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-200 text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/A5sZrCUHQ0c3ChwA0Fz5/media/66f36b68e8902d21ddeaee88.png"
              alt="Elvis Logo"
              width={180}
              height={90}
              className="mr-4"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className={`text-lg font-medium hover:text-yellow-400 transition-colors ${
              currentPage === "home" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/vendors"
            className={`text-lg font-medium hover:text-yellow-400 transition-colors ${
              currentPage === "vendors" ? "text-yellow-400 border-b-2 border-yellow-400" : ""
            }`}
          >
            Vendors
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition-colors">
            BUY TICKETS
          </button>
        </div>
      </nav>
    </header>
  )
}
