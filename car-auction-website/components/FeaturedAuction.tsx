'use client';
import { useState } from 'react';

export default function FeaturedAuction() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [currentBid, setCurrentBid] = useState(7000000);

  const handleBidSubmit = () => {
    setCurrentBid(currentBid + 50000);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Brand New
                </span>
                <span className="text-gray-400 text-sm">Bidding Ends in 2h 15m</span>
              </div>

              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury blue Maruti Ciaz sedan car in showroom lighting, professional automotive photography, clean white background, premium vehicle showcase, modern car design&width=600&height=400&seq=featured-car-1&orientation=landscape"
                  alt="2024 Maruti Ciaz"
                  className="w-full h-80 object-cover object-top rounded-lg"
                />
                <div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 flex items-center justify-center">
                    <i className="ri-time-line text-blue-400 text-lg"></i>
                  </div>
                  <span className="text-xs text-gray-400">Time left</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 flex items-center justify-center">
                    <i className="ri-user-line text-blue-400 text-lg"></i>
                  </div>
                  <span className="text-xs text-gray-400">Bidders</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 flex items-center justify-center">
                    <i className="ri-eye-line text-blue-400 text-lg"></i>
                  </div>
                  <span className="text-xs text-gray-400">Views</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="w-6 h-6 mx-auto mb-2 flex items-center justify-center">
                    <i className="ri-heart-line text-blue-400 text-lg"></i>
                  </div>
                  <span className="text-xs text-gray-400">Favorites</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Bid</span>
                  <span className="text-2xl font-bold text-white">
                    ₹{currentBid.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  {/* Add more content here if needed */}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-850">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">2024 Maruti Ciaz</h2>
                <p className="text-gray-400">DELTA 1.5 HEV PETROL</p>
              </div>

              <div className="mb-8">
                <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-green-400 font-semibold">🎉 Congratulations! 🎉</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white">₹7,500,000 INR</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-gray-400 text-sm">Current Winning Bid</p>
                  <p className="text-xl font-bold text-white">₹7,550,000 INR</p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Place Bid (₹7,550,000)
                </button>
              </div>

              <div className="mb-6">
                <div className="flex space-x-1 mb-4">
                  <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer bg-blue-600 text-white">
                    Car Overview
                  </button>
                  <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer bg-gray-700 text-gray-300 hover:bg-gray-600">
                    Features Overview
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Engine</span>
                        <span className="text-white">1.5L</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Model</span>
                        <span className="text-white">Ciaz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Transmission</span>
                        <span className="text-white">CVT</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Boot Space (L)</span>
                        <span className="text-white">510</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fuel</span>
                        <span className="text-white">Petrol</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Emission Type</span>
                        <span className="text-white">BS-VI</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Displacement(cc)</span>
                        <span className="text-white">1462</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Seating Capacity</span>
                        <span className="text-white">5 Seater</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}