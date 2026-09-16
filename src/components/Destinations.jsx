import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Destinations() {
  const cards = [
    {
      image: "/Photos/Flamengos.jpg",
      tag: "City Tours",
      title: "Town & City Escapes"
    },
    {
      image: "/Photos/Hippo-plus-calf.jpg",
      tag: "Adventure",
      title: "Forest & Mountain Trails"
    },
    {
      image: "/Photos/Rhino-plus-calf.jpg",
      tag: "Safiri Classic",
      title: "Signature Road Trips"
    }
  ];

  return (
    <section id="mountain-climbing" className="bg-cream-light py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-brand-orange uppercase">
              MOUNTAIN CLIMBING
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Discover what makes <br />
              <span className="text-teal-light italic font-serif">Africa special</span>
            </h2>
          </div>

          <a href="#destinations" className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all">
            View all destinations <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {cards.map((card, idx) => (
            <div key={idx} className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  {card.tag}
                </span>
                <h3 className="text-white font-bold text-xl leading-snug">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}