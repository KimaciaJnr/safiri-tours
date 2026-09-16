import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Pause, Play } from 'lucide-react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion] = useState(
    () => typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const slides = [
    { src: '/Videos/Elephant-vid.mp4', fallback: '/Photos/Elephants-hugging.jpg' },
    { src: '/Videos/Rhino-vid.mp4', fallback: '/Photos/Rhino-plus-calf.jpg' },
    { src: '/Videos/Leopard-vid.mp4', fallback: '/Photos/Cheetars-looking.jpg' },
    { src: '/Videos/Lioness-walking.mp4', fallback: '/Photos/Lions-on-Jeep.jpg' },
  ];

  useEffect(() => {
    if (paused || reducedMotion) return undefined;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              key={`${slide.src}-${index}`}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              tabIndex={-1}
              poster={slide.fallback}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-end px-5 py-12 text-white sm:px-6 sm:py-16 md:min-h-[calc(100vh-80px)] md:py-20">
        <div className="max-w-3xl space-y-5 md:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-gray-200 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Group Tours · Road Trips · Adventures Across Africa</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-6xl">
            The journey is <span className="font-serif italic text-brand-terracotta">just as exciting</span> as the destination.
          </h1>

          <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-200 md:text-lg">
            Join affordable, social group tours and road trips across Africa. We handle the planning and logistics — you meet new people, relax, and make memories that last long after you're home.
          </p>

          <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#inquiry"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-terracotta px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-terracotta-dark"
            >
              Find Your Adventure
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#safari-guide"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setPaused((prev) => !prev)}
            aria-pressed={paused}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            {paused ? 'Play' : 'Pause'}
          </button>

          <div className="flex items-center gap-2" role="group" aria-label="Video slideshow controls">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to video ${idx + 1}`}
                aria-current={idx === activeSlide}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-brand-terracotta' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}