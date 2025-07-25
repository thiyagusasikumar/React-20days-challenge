'use client';
export default function Footer() {
  return (    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">          <div>
            <div className="flex items-center space-x-3 mb-4">              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">                <i className="ri-auction-line text-white text-lg"></i>
              </div>              <span className="text-lg font-bold text-white font-pacifico">AuctionWow</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium car auction platform connecting buyers and sellers worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-facebook-line text-gray-400 hover:text-white transition-colors cursor-pointer"></i>              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-twitter-line text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
              </div>              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-instagram-line text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div>            <h4 className="text-white font-semibold mb-4">Auction</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">How it Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Live Auctions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Ended Auctions</a></li>              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Auction Calendar</a></li>
            </ul>
          </div>          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Bid Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Payment Info</a></li>
            </ul>          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AuctionWow. All rights reserved.
          </p>          <div className="flex space-x-6 mt-4 md:mt-0">            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">Cookie Policy</a>
          </div>
        </div>
      </div>    </footer>
  );}