'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  return (
    <header className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-auction-line text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-white font-pacifico">auctionWow</span>
          </Link>          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              How Auction Works
            </Link>            <Link href="/auctions" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Sell in Auction
            </Link>
            <Link href="/selling" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Auction Finance
            </Link>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <i className="ri-notification-4-line hover:text-white transition-colors text-xl"></i>
            </div>
          </nav>          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <img
                src="https://readdy.ai/api/search-image?query=Professional business person avatar headshot with clean background, corporate style, friendly appearance, modern professional look&width=40&height=40&seq=user-avatar-1&orientation=squarish"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover object-top"
              />
              <span className="text-sm text-gray-300">Michael Johnson</span>
            </div>
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-white text-xl"></i>
            </button>
          </div>
        </div>        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">              <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                How Auction Works
              </Link>
              <Link href="/auctions" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Bid On Auctions
              </Link>              <Link href="/selling" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Auction Checklist
              </Link>            </div>
          </div>        )}
      </div>    </header>
  );}
