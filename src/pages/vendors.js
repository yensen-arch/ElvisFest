import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function vendors() {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Vendors</h1>
        </div>
        <Footer />
    </div>
  )
}

export default vendors
