'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedAuction from '@/components/FeaturedAuction';
import SimilarAuctions from '@/components/SimilarAuctions';
import Footer from '@/components/Footer';
export default function Home() {
  return (    <div className="min-h-screen bg-gray-900 text-white">
      <Header/>
      <Hero />
      <FeaturedAuction />      
      <SimilarAuctions />
      <Footer />    </div>
  );
}
