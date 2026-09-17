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
    <section id="safari-guide" className="bg-cream px-6 py-12 md:py-14">
      <div className="mx-auto w-full max-w-6xl space-y-3 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
          SAFARI GUIDE
        </span>

        <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">
          Adventures built around <span className="text-brand-terracotta italic font-serif">the people</span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          From weekend getaways to full expeditions, every Safiri trip blends discovery, culture, nature and community.
        </p>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 gap-4 pt-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-line-soft bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}