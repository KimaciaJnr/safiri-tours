import React from 'react';
import { ChevronDown, Compass, House } from 'lucide-react';

const safariLinks = [
  'Kenya Safaris from Nairobi',
  'Kenya Safaris from Coast(Mombasa, Diani, Watamu)',
  'Kenya Fly-In Safaris',
  'Kenya Beach Safaris',
  'Budget Maasai Mara Deals',
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img 
            src="/Logo_page-0001.jpg" 
            alt="Safiri Expedition Tours" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8 font-medium text-gray-700 text-sm">
          <a href="#home" className="flex items-center gap-2 hover:text-[#E8732A] transition-colors">
            <House size={16} />
            <span>Home</span>
          </a>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 hover:text-[#E8732A] transition-colors focus:outline-none"
            >
              <Compass size={16} />
              <span>Safaris</span>
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-80 rounded-xl border border-gray-100 bg-white shadow-xl py-2">
                {safariLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#E8732A] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#mountain-climbing" className="hover:text-[#E8732A] transition-colors">Mountain Climbing</a>
          <a href="#safari-guide" className="hover:text-[#E8732A] transition-colors">Safari Guide</a>
          <a href="#about" className="hover:text-[#E8732A] transition-colors">About Us</a>
        </nav>

        {/* Primary CTA */}
        <button className="bg-[#E8732A] hover:bg-[#d4621c] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg">
          Find Your Adventure
        </button>
      </div>
    </header>
  );
}