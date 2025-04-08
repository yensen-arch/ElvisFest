import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 bg-white">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/A5sZrCUHQ0c3ChwA0Fz5/media/66f36b68e8902d21ddeaee88.png" 
              alt="Elvis Fest Logo" 
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-400">
              The ultimate celebration of the King of Rock and Roll
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400 transition duration-300">Home</a></li>
              <li><a href="/vendors" className="hover:text-yellow-400 transition duration-300">Vendors</a></li>
              <li><a href="/hotels" className="hover:text-yellow-400 transition duration-300">Hotels</a></li>
              <li><a href="/restaurants" className="hover:text-yellow-400 transition duration-300">Restaurants</a></li>
              <li><a href="/schedule" className="hover:text-yellow-400 transition duration-300">Schedule</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@elvisfest.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Memphis, TN</li>
            </ul>
          </div>

          {/* Sponsors */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Sponsors</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-2 rounded-md">
                <img src="/api/placeholder/100/50" alt="Sponsor 1" className="w-full" />
              </div>
              <div className="bg-gray-800 p-2 rounded-md">
                <img src="/api/placeholder/100/50" alt="Sponsor 2" className="w-full" />
              </div>
              <div className="bg-gray-800 p-2 rounded-md">
                <img src="/api/placeholder/100/50" alt="Sponsor 3" className="w-full" />
              </div>
              <div className="bg-gray-800 p-2 rounded-md">
                <img src="/api/placeholder/100/50" alt="Sponsor 4" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 Elvis Fest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}