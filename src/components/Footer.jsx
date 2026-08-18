import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C2026] text-white">
      {/* Banner Callout Area */}
      <div className="relative py-20 px-6 border-b border-gray-800 bg-cover bg-center" style={{ backgroundImage: `url('/Hero1.jpg')` }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your seat on the next Safiri adventure is waiting
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Browse upcoming group tours, check availability, and claim your spot on a trip that will change how you see Africa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="bg-[#C96A2B] hover:bg-[#b15f25] text-white px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all">
              View Upcoming Tours <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3 rounded-full font-semibold text-sm transition-all">
              Ask a Question
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="bg-white p-2 rounded-2xl inline-block">
            <img src="/Logo_page-0001.jpg" alt="Safiri Logo" className="h-10 w-auto" />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Affordable, well-planned group tours, road trips and adventures across Africa. We handle the logistics — you enjoy the journey and make memories that last.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-bold text-sm mb-4">Explore</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Tours & Trips</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Upcoming Tours</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Private & Custom Tours</a></li>
            <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-bold text-sm mb-4">Get in touch</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Book Now</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li className="flex items-center gap-2 pt-2 text-gray-300">
              <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>info@safiriexpeditions.co.ke</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>+254 712 345 678</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="border-t border-gray-800/60 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2026 Safiri Expedition Tours. All rights reserved.</p>
          <a href="#" className="text-[#C96A2B] flex items-center gap-1 font-semibold hover:underline">
            Find Your Adventure <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}