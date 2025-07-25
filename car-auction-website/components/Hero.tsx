'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury car auction showroom with premium vehicles, modern lighting, elegant atmosphere, professional automotive environment, high-end car dealership interior&width=1200&height=500&seq=hero-bg-1&orientation=landscape')`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Car <span className="text-blue-400">Auctions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover exceptional vehicles through our exclusive auction platform. Bid on premium cars with confidence and transparency.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Start Bidding
            </button>
            <button className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Browse Auctions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}