import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import WhatWeOffer from '../components/WhatWeOffer';
import Destinations from '../components/Destinations';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900 font-sans selection:bg-[#E8732A] selection:text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <WhatWeOffer />
      <Destinations />
      <InquiryForm />
      <Footer />
    </div>
  );
}