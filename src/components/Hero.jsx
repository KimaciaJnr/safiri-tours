import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = ['/Hero1.jpg', '/Hero2.jpg', '/OP.jpg', '/ED1.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col justify-between px-6 py-20 text-white">
        <div className="mt-8 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-gray-200 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#E8732A]" />
            <span>Group Tours · Road Trips · Adventures Across Africa</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-6xl">
            The journey is <span className="font-serif italic text-[#E8732A]">just as exciting</span> as the destination.
          </h1>

          <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-200 md:text-lg">
            Join affordable, social group tours and road trips across Africa. We handle the planning and logistics — you meet new people, relax, and make memories that last long after you're home.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="flex items-center gap-2 rounded-full bg-[#E8732A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#d4621c]">
              Find Your Adventure
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20">
              See How It Works
            </button>
          </div>

          <div className="flex items-center gap-2 pt-2 text-xs text-gray-300">
            <Clock className="h-3.5 w-3.5 text-[#E8732A]" />
            <span>Affordable value · Small group size · Logistics handled for you</span>
          </div>
        </div>

        <div className="space-y-8 pt-16">
          <div className="grid max-w-xl grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <div className="text-2xl font-extrabold text-white md:text-3xl">12+</div>
              <div className="mt-1 text-xs text-gray-300">Destinations across Africa</div>
            </div>
            <div className="border-l border-white/20 pl-8">
              <div className="text-2xl font-extrabold text-white md:text-3xl">50+</div>
              <div className="mt-1 text-xs text-gray-300">Trips organized & counting</div>
            </div>
            <div className="border-l border-white/20 pl-8">
              <div className="text-2xl font-extrabold text-white md:text-3xl">100%</div>
              <div className="mt-1 text-xs text-gray-300">Logistics handled for you</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-[#E8732A]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}