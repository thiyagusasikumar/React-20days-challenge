'use client';

export default function SimilarAuctions() {
  const auctions = [
    {
      id: 1,
      title: "2023 Maruti Ciaz",
      subtitle: "LXI CVT 1.5L PETROL",
      currentBid: 450000,
      timeLeft: "2h 30m",
      status: "live",
      image: "https://readdy.ai/api/search-image?query=Blue Maruti Ciaz sedan car in professional showroom setting, clean background, modern automotive photography, premium vehicle display&width=300&height=200&seq=auction-car-1&orientation=landscape",
    },
    {
      id: 2,
      title: "2017 i20",
      subtitle: "1.2L PETROL",
      currentBid: 380000,
      timeLeft: "5h 45m",
      status: "live",
      image: "https://readdy.ai/api/search-image?query=Silver gray Hyundai i20 hatchback car in showroom lighting, professional automotive photography, clean background, modern vehicle showcase&width=300&height=200&seq=auction-car-2&orientation=landscape",
    },
    {
      id: 3,
      title: "2005 Ducati Panigale V2",
      subtitle: "955cc PETROL",
      currentBid: 1340000,
      timeLeft: "1h 20m",
      status: "live",
      image: "https://readdy.ai/api/search-image?query=Red Ducati Panigale V2 motorcycle in professional studio lighting, clean background, premium motorcycle photography, sporty bike showcase&width=300&height=200&seq=auction-bike-1&orientation=landscape",
    },
  ];

  return (
    <section className="py-16 bg-gray-850">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Similar Auctions</h2>
          <button className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
            View All →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    LIVE BID
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                    <i className="ri-heart-line text-white text-sm"></i>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">{auction.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{auction.subtitle}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-400 text-xs">Current Bid</span>
                    <div className="text-white font-semibold">
                      ₹{auction.currentBid.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">Time Left</span>
                    <div className="text-blue-400 font-semibold text-sm">
                      {auction.timeLeft}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    Start Bidding
                  </button>
                  <button className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-information-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}