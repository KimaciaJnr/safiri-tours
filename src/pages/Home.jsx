import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatWeOffer from '../components/WhatWeOffer';
import Destinations from '../components/Destinations';
import Philosophy from '../components/Philosophy';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';

const safariCategories = [
  {
    title: 'Kenya Safaris from Nairobi',
    description: 'Start your wildlife journey from the capital with access to the Mara, Amboseli, Nakuru and more.',
    route: '#nairobi-safari',
    accent: 'bg-brand-terracotta/10 text-brand-terracotta',
    cards: [
      'Masai Mara',
      'Amboseli',
      'Tsavo',
    ],
  },
  {
    title: 'Kenya Safaris from Coast',
    description: 'Blend beach relaxation with thrilling game drives from Mombasa, Diani and Watamu.',
    route: '#coastal-safari',
    accent: 'bg-teal/10 text-teal',
    cards: [
      'Tsavo East',
      'Amboseli',
      'Mombasa Coastal Safari',
    ],
  },
  {
    title: 'Kenya Fly-In Safaris',
    description: 'Save time with scenic flights into Kenya’s most iconic wildlife destinations.',
    route: '#fly-in-safari',
    accent: 'bg-brand-terracotta/10 text-brand-terracotta',
    cards: [
      'Masai Mara',
      'Samburu',
      'Amboseli',
    ],
  },
  {
    title: 'Kenya Beach Safaris',
    description: 'Combine the thrill of the bush with the calm of Kenya’s Indian Ocean coastline.',
    route: '#beach-safari',
    accent: 'bg-teal/10 text-teal',
    cards: [
      'Diani Beach',
      'Watamu',
      'North Coast',
    ],
  },
  {
    title: 'Budget Maasai Mara Deals',
    description: 'Affordable safaris that still deliver the unforgettable Mara experience.',
    route: '#budget-mara',
    accent: 'bg-brand-terracotta/10 text-brand-terracotta',
    cards: [
      'Shared Safaris',
      'Budget Lodges',
      'Camping Safaris',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-brand-terracotta selection:text-white">
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />

      <section className="bg-[linear-gradient(180deg,#F4F0EA_0%,#F8F6F2_100%)] px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-line-soft bg-white/80 p-8 shadow-[0_18px_50px_rgba(17,24,39,0.06)] backdrop-blur-sm md:p-12">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Traveler Review</p>
            <blockquote className="mt-5 text-2xl md:text-4xl font-medium leading-relaxed text-ink">
              “The planning was seamless, the wildlife was unforgettable, and the whole experience felt effortlessly premium from start to finish.”
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
              <span className="font-semibold text-ink">Ava Thompson</span>
              <span className="inline-block h-1 w-1 rounded-full bg-line-mid" />
              <span>Luxury Safari Guest</span>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">Our Safaris</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-ink">Curated safari experiences</h2>
          </div>

          <div className="space-y-8">
            {safariCategories.map((category) => (
              <article key={category.title} className="group rounded-[2rem] border border-line bg-white p-6 shadow-[0_18px_45px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,24,39,0.08)] md:p-8">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${category.accent}`}>
                      Safari Category
                    </span>
                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-ink">{category.title}</h3>
                    <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">{category.description}</p>
                  </div>

                  <a
                    href={category.route}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-terracotta-dark"
                  >
                    See more {category.title}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {category.cards.map((card) => (
                    <div key={card} className="rounded-2xl border border-line-alt bg-[linear-gradient(180deg,#FAF8F5_0%,#F5F0EB_100%)] p-5 transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <div className="mb-4 h-2 w-12 rounded-full bg-brand-gold" />
                      <h4 className="text-lg font-bold text-ink">{card}</h4>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        Thoughtfully planned for memorable wildlife moments, comfort, and seamless travel.
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhatWeOffer />
        <Destinations />
        <Philosophy />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}