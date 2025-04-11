import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Hotels() {
  const hotelData = [
    {
      id: 1,
      name: "The Heartbreak Hotel",
      type: "Premium Hotel",
      image: "https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc",
      description: "Experience luxury at our premier hotel just minutes from the festival grounds. Each room features Elvis-inspired decor and modern amenities.",
      price: "$199 - $399 per night",
      rating: 4.8,
      distance: "0.5 miles from venue",
      features: [
        "King-sized beds with premium linens",
        "24-hour room service",
        "Rooftop pool with city views",
        "Complimentary shuttle to festival",
        "Live music in the lobby each evening"
      ],
      contact: {
        phone: "(555) 123-4567",
        email: "reservations@heartbreakhotel.com",
        address: "123 Graceland Ave, Memphis, TN"
      },
      restaurant: {
        name: "Blue Suede Restaurant",
        cuisine: "Southern American",
        specialty: "Memphis BBQ Ribs & Banana Cream Pie"
      }
    },
    {
      id: 2,
      name: "Graceland Suites",
      type: "Boutique Hotel",
      image: "https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc",
      description: "A boutique experience featuring memorabilia from the King's career in every suite. Intimate atmosphere with personalized service.",
      price: "$149 - $249 per night",
      rating: 4.6,
      distance: "1.2 miles from venue",
      features: [
        "Themed suites based on Elvis eras",
        "Vinyl record players in each room",
        "Complimentary breakfast buffet",
        "Elvis movie library and lounge",
        "Festival ticket package available"
      ],
      contact: {
        phone: "(555) 987-6543",
        email: "stay@gracelandsuites.com",
        address: "456 Presley Blvd, Memphis, TN"
      },
      restaurant: {
        name: "Jailhouse Rock Cafe",
        cuisine: "Classic American Diner",
        specialty: "The King Burger & Peanut Butter Banana Shake"
      }
    },
    {
      id: 3,
      name: "Blue Hawaii Resort",
      type: "Family-Friendly Hotel",
      image: "https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc",
      description: "Perfect for families attending the festival, with a tropical theme inspired by Elvis's Hawaiian films. Kids stay free with parents!",
      price: "$129 - $229 per night",
      rating: 4.5,
      distance: "1.8 miles from venue",
      features: [
        "Family suites with kid-friendly amenities",
        "Outdoor pool with water slide",
        "Children's activities program",
        "Free parking and WiFi",
        "Family discount festival packages"
      ],
      contact: {
        phone: "(555) 234-5678",
        email: "aloha@bluehawaiiresorrt.com",
        address: "789 Aloha Lane, Memphis, TN"
      },
      restaurant: {
        name: "Hula Rock Grill",
        cuisine: "Hawaiian-Southern Fusion",
        specialty: "Polynesian BBQ & Coconut Cream Pie"
      }
    },
    {
      id: 4,
      name: "Viva Las Vegas Inn",
      type: "Budget-Friendly Hotel",
      image: "https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc",
      description: "Affordable accommodations with plenty of Elvis charm. Great option for festival-goers on a budget who don't want to sacrifice style.",
      price: "$89 - $149 per night",
      rating: 4.2,
      distance: "2.5 miles from venue",
      features: [
        "Comfortable rooms with Elvis-themed decor",
        "Continental breakfast included",
        "Free shuttle to and from festival",
        "Outdoor pool and sundeck",
        "Elvis karaoke nights"
      ],
      contact: {
        phone: "(555) 876-5432",
        email: "booking@vivalasvegasinn.com",
        address: "321 Vegas Drive, Memphis, TN"
      },
      restaurant: {
        name: "All Shook Up Diner",
        cuisine: "American Comfort Food",
        specialty: "All-Day Breakfast & Famous Milkshakes"
      }
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-yellow-900 opacity-70 z-10"></div>
        <img 
          src="https://imgs.search.brave.com/A2eH-nH6v2sIrYrPMMb2HtZ1lQR-XP95J_UNRCfS9fg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA1LzczLzI4/LzM2MF9GXzUwNTcz/Mjg3OF9Ub0NSTEll/WkgxSGxERWN6S3JC/NjkwcFJqcmM1dUp6/cC5qcGc" 
          alt="Elvis Festival Accommodations" 
          className="w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Accommodations</h1>
          <p className="text-xl text-yellow-500">Recommended Hotels & Dining for Festival Attendees</p>
        </div>
      </div>
      
      {/* Intro Section */}
      <div className="bg-gradient-to-b from-black to-yellow-900/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Stay Close to the Action</h2>
            <p className="text-lg text-white/90">
              We've partnered with Memphis's finest accommodations to ensure your Festival experience is unforgettable. 
              From luxury suites to budget-friendly options, each of our recommended hotels offers special amenities for festival-goers 
              and is conveniently located near the venue.
            </p>
          </div>
        </div>
      </div>
      
      {/* Hotels Filter Bar */}
      <div className="sticky top-0 bg-black shadow-lg z-30 py-4 border-t border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold">All Hotels</button>
            <button className="px-4 py-2 rounded-full bg-black border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Luxury</button>
            <button className="px-4 py-2 rounded-full bg-black border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Family-Friendly</button>
            <button className="px-4 py-2 rounded-full bg-black border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Budget</button>
            <button className="px-4 py-2 rounded-full bg-black border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">Distance</button>
          </div>
        </div>
      </div>
      
      {/* Hotel Cards */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotelData.map((hotel) => (
              <div key={hotel.id} className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20">
                <div className="flex flex-col md:flex-row">
                  {/* Hotel Image */}
                  <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold px-4 py-1 rounded-br-lg">
                      {hotel.type}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:hidden">
                      <h3 className="text-xl font-bold text-white">{hotel.name}</h3>
                      <div className="flex items-center text-yellow-500">
                        <span className="text-lg font-bold mr-2">{hotel.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(hotel.rating) ? 'text-yellow-500' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hotel Info */}
                  <div className="w-full md:w-3/5 p-6">
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-white mb-1">{hotel.name}</h3>
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(hotel.rating) ? 'text-yellow-500' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-white/80 text-sm">{hotel.rating} / 5.0</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4 md:hidden">{hotel.distance}</p>
                    
                    <p className="text-white/80 mb-4 hidden md:block">{hotel.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-3 py-1 rounded-full text-xs font-semibold">
                        {hotel.distance}
                      </span>
                      <span className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-3 py-1 rounded-full text-xs font-semibold">
                        {hotel.price}
                      </span>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <h4 className="font-semibold text-yellow-500 mb-2">
                        <span className="inline-block mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        {hotel.restaurant.name}
                      </h4>
                      <p className="text-white/80 text-sm">Cuisine: {hotel.restaurant.cuisine}</p>
                      <p className="text-white/80 text-sm">Specialty: {hotel.restaurant.specialty}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <a href={`tel:${hotel.contact.phone}`} className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call Hotel
                      </a>
                      <button className="inline-flex items-center justify-center bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Expandable Features Section */}
                <div className="bg-black/30 border-t border-yellow-500/20 p-4">
                  <div className="flex flex-wrap gap-4">
                    {hotel.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-white/80">
                        <svg className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                    <button className="text-yellow-500 hover:text-yellow-400 text-sm font-medium flex items-center">
                      +{hotel.features.length - 3} more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="bg-gradient-to-b from-black to-yellow-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Hotel Locations</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              All our partner hotels are conveniently located near the Elvis Festival venue. 
              View the map below to find the perfect accommodation for your stay.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/20 border-2 border-yellow-500/20 aspect-video max-w-5xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                <p className="text-white/70">Map showing all partner hotels near the Elvis Festival venue</p>
                <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                  Load Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Help Section */}
      <div className="bg-yellow-500 text-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto md:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Need Help with Booking?</h2>
              <p className="text-lg mb-6">
                Our dedicated concierge team is available to assist with special requests, group bookings, or any questions about accommodations during the Festival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:+15551234567" className="inline-flex items-center justify-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (555) 123-4567
                </a>
                <a href="mailto:hotels@elvisfestival.com" className="inline-flex items-center justify-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Concierge
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-2">Is there a special rate for festival attendees?</h3>
              <p className="text-white/80">Yes, all featured hotels offer exclusive discounted rates for  Festival ticket holders. Simply mention your ticket confirmation number when booking.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-2">Are there shuttle services available?</h3>
              <p className="text-white/80">Most partner hotels offer complimentary shuttle services to and from the festival grounds. Check with your specific hotel for their shuttle schedule.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-2">Is breakfast included with my stay?</h3>
              <p className="text-white/80">Breakfast options vary by hotel. The Graceland Suites and Viva Las Vegas Inn include breakfast with your stay, while The Heartbreak Hotel and Blue Hawaii Resort offer it as an add-on.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-2">When should I book my hotel?</h3>
              <p className="text-white/80">We recommend booking your accommodations at least 3 months in advance of the festival, as rooms fill up quickly. Early booking also ensures you get the best rates.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Hotels;
            