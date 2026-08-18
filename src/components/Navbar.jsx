import React from 'react';
import { ChevronDown, Compass, House } from 'lucide-react';

const safariLinks = [
  { label: 'Kenya Safaris from Nairobi', href: '#nairobi-safari' },
  { label: 'Kenya Safaris from Coast (Mombasa, Diani, Watamu)', href: '#coastal-safari' },
  { label: 'Kenya Fly-In Safaris', href: '#fly-in-safari' },
  { label: 'Kenya Beach Safaris', href: '#beach-safari' },
  { label: 'Budget Maasai Mara Deals', href: '#budget-mara' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F1E5]/95 backdrop-blur-sm border-b border-[#E7DDD0]">
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
        <nav className="hidden md:flex items-center gap-6 xl:gap-8 font-medium text-[#1E2928] text-sm">
          <a href="#home" className="flex items-center gap-2 hover:text-[#C96A2B] transition-colors">
            <House size={16} />
            <span>Home</span>
          </a>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 hover:text-[#C96A2B] transition-colors focus:outline-none"
            >
              <Compass size={16} />
              <span>Safaris</span>
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-80 rounded-xl border border-[#E7DDD0] bg-white shadow-xl py-2">
                {safariLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-[#1E2928] hover:bg-[#F7F1E5] hover:text-[#0F5B5B] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#mountain-climbing" className="hover:text-[#C96A2B] transition-colors">Mountain Climbing</a>
          <a href="#safari-guide" className="hover:text-[#C96A2B] transition-colors">Safari Guide</a>
          <a href="#about" className="hover:text-[#C96A2B] transition-colors">About Us</a>
        </nav>

        {/* Primary CTA */}
        <button className="bg-[#C96A2B] hover:bg-[#b15f25] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg">
          Find Your Adventure
        </button>
      </div>
    </header>
  );
}