import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Vendors() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 opacity-50 z-10"></div>
        <img 
          src="https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc" 
          alt="Elvis Festival Vendors" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Info Section */}
      <div className="bg-gradient-to-b from-black to-yellow-900">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left: Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gold">Join Our Vendor Community</h2>
              <p className="text-lg text-white/90">
                Showcase your Elvis-inspired merchandise, art, or collectibles at the premier Elvis Festival. 
                Our vendor spots offer high visibility and access to thousands of passionate Elvis fans.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Prime Location</h3>
                    <p className="text-white/80">Strategically positioned vendor booths in high-traffic areas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Dedicated Support</h3>
                    <p className="text-white/80">On-site staff to assist with setup and throughout the event</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Marketing Inclusion</h3>
                    <p className="text-white/80">Featured in our event program and digital promotions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc" 
                  alt="Vendor Booth" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 to-transparent opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="bg-gradient-to-b from-yellow-900 to-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Vendor Booth Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Booth */}
            <div className="bg-gray-900 rounded-lg p-8 border border-yellow-500 hover:border-gold transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-4">Standard Booth</h3>
              <p className="text-gold text-3xl font-bold mb-6">$499</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">10' x 10' Space</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">1 Table & 2 Chairs</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Basic Power Access</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Event Program Listing</span>
                </li>
              </ul>
              <button className="w-full bg-yellow-600 hover:bg-gold text-white hover:text-black py-3 rounded-lg font-semibold transition-colors duration-300">
                Select Standard
              </button>
            </div>
            
            {/* Premium Booth */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-gold shadow-lg shadow-gold/20 transform scale-105">
              <div className="bg-gold text-black text-xs font-bold uppercase py-1 px-4 rounded-full inline-block mb-4">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Booth</h3>
              <p className="text-gold text-3xl font-bold mb-6">$899</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">10' x 15' Prime Space</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">2 Tables & 4 Chairs</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Enhanced Power Access</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Featured Program Listing</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Social Media Promotion</span>
                </li>
              </ul>
              <button className="w-full bg-gold hover:bg-white text-black py-3 rounded-lg font-semibold transition-colors duration-300">
                Select Premium
              </button>
            </div>
            
            {/* VIP Booth */}
            <div className="bg-gray-900 rounded-lg p-8 border border-yellow-500 hover:border-gold transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-4">VIP Booth</h3>
              <p className="text-gold text-3xl font-bold mb-6">$1,499</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">20' x 20' VIP Space</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">4 Tables & 8 Chairs</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Premium Power Access</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Full-Page Program Ad</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">Featured Social & Email</span>
                </li>
              </ul>
              <button className="w-full bg-yellow-600 hover:bg-gold text-white hover:text-black py-3 rounded-lg font-semibold transition-colors duration-300">
                Select VIP
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Application Form */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 border border-yellow-500">
            <h2 className="text-3xl font-bold text-gold mb-8 text-center">Reserve Your Spot</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="businessName" className="block text-white mb-2">Business Name</label>
                <input 
                  type="text" 
                  id="businessName" 
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                  placeholder="Your Business Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="boothType" className="block text-white mb-2">Booth Type</label>
                <select 
                  id="boothType" 
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                >
                  <option value="">Select Booth Type</option>
                  <option value="standard">Standard Booth - $499</option>
                  <option value="premium">Premium Booth - $899</option>
                  <option value="vip">VIP Booth - $1,499</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-white mb-2">Product Description</label>
                <textarea 
                  id="description" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 rounded-lg text-white focus:outline-none focus:border-gold"
                  placeholder="Tell us about your products or services..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mr-3 h-5 w-5 accent-gold"
                />
                <label htmlFor="terms" className="text-white/80">I agree to the vendor terms and conditions</label>
              </div>
              
              <button type="submit" className="w-full bg-gold hover:bg-white text-black py-4 rounded-lg font-bold text-lg transition-colors duration-300">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-black to-yellow-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900/60 rounded-lg p-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-white mb-2">When is the application deadline?</h3>
              <p className="text-white/80">Applications must be submitted at least 60 days prior to the event. We recommend applying early as spaces are limited and fill quickly.</p>
            </div>
            
            <div className="bg-gray-900/60 rounded-lg p-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-white mb-2">What items can I sell?</h3>
              <p className="text-white/80">All Elvis-related merchandise, memorabilia, artwork, clothing, accessories, and collectibles are welcome. All items must be legally licensed where applicable.</p>
            </div>
            
            <div className="bg-gray-900/60 rounded-lg p-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-white mb-2">Is there a setup/breakdown time?</h3>
              <p className="text-white/80">Vendors will have access to their spaces the day before the event for setup. Breakdown must be completed within 4 hours after the event concludes.</p>
            </div>
            
            <div className="bg-gray-900/60 rounded-lg p-6 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-white mb-2">Are there any additional fees?</h3>
              <p className="text-white/80">The booth fee is all-inclusive. There are optional add-ons available, such as additional furniture, custom signage, and enhanced electrical needs.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Vendors;