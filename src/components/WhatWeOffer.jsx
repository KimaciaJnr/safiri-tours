import React from 'react';
import { Compass, MapPin, Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function WhatWeOffer() {
  const offers = [
    {
      icon: <Compass className="w-5 h-5 text-brand-terracotta" />,
      bg: "bg-brand-terracotta/10",
      title: "Group Tours & Road Trips",
      desc: "Scenic journeys and weekend getaways that bring travelers together — we handle the planning and coordination."
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal" />,
      bg: "bg-teal/10",
      title: "Destination Experiences",
      desc: "Curated trips around Africa's most interesting places, blending sightseeing, adventure, culture, nature and leisure."
    },
    {
      icon: <Users className="w-5 h-5 text-brand-terracotta" />,
      bg: "bg-brand-terracotta/10",
      title: "Social & Community Travel",
      desc: "Meet new people, make friends, and share experiences — travel with a community that enjoys the journey together."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-teal" />,
      bg: "bg-teal/10",
      title: "Trip Logistics, Handled",
      desc: "Transport, schedules, accommodation and activities coordinated for you, so you can simply enjoy the trip."
    },
    {
      icon: <ArrowRight className="w-5 h-5 text-brand-terracotta" />,
      bg: "bg-brand-terracotta/10",
      title: "Affordable & Accessible",
      desc: "Memorable experiences that offer real value, so adventure isn't reserved for a lucky few."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal" />,
      bg: "bg-teal/10",
      title: "Unforgettable Moments",
      desc: "The small details that turn an ordinary trip into a story you'll tell long after returning home."
    }
  ];

  return (
    <section id="safari-guide" className="bg-cream py-20 px-6">
      <div className="w-full text-center space-y-4">
        <span className="text-xs font-semibold tracking-wider text-teal uppercase">
          SAFARI GUIDE
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight">
          Adventures built around <span className="text-brand-terracotta italic font-serif">the people</span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          From weekend getaways to full expeditions, every Safiri trip blends discovery, culture, nature and community.
        </p>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 text-left">
          {offers.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-ink">Does this look like fun? Book tickets today!</p>
                <a
                  href={`#inquiry?package=${encodeURIComponent(item.title)}`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-terracotta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-terracotta-dark"
                >
                  Book Tour
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}