import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { flyInPackages } from '../data/safaris';

const destinations = [
  'Masai Mara – classic predator action and spectacular migration viewing.',
  'Amboseli – iconic elephant herds beneath Kenya’s highest mountain.',
  'Samburu – rare northern wildlife and a more remote, exclusive feel.',
  'Tsavo East and Tsavo West – rugged landscapes and dramatic red-earth scenery.',
];

export default function FlyInSafariPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Fly-in safari</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-ink">Fly-In Safari</h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
                Cut travel time and maximize your time in the wild. A fly-in safari gets you quickly into iconic reserves and into the heart of the bush with more time for game drives and unforgettable sightings.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Photos/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-teal">Fast travel, deep wilderness, effortless comfort</span>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src="/Photos/Elephants-hugging.jpg" alt="Elephants in the wild" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="rounded-[2rem] border border-cream-sand bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Why choose a fly-in safari?</h2>
            <p className="text-gray-600 leading-relaxed">
              Road travel can take several hours to reach the Masai Mara or northern parks, but flights cut that time dramatically. That means more time in the reserve, less time lost in transit, and a smoother overall safari rhythm.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cream-sand bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Popular destinations</h2>
            <ul className="space-y-3 text-gray-600">
              {destinations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-terracotta shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] bg-teal p-8 md:p-10 text-white shadow-[0_18px_45px_rgba(15,91,91,0.18)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What’s included</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold mb-2">Flights</h3>
              <p className="text-sm text-gray-200 leading-relaxed">Fast transfers from Nairobi, Mombasa, or Diani into the main safari regions.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold mb-2">Accommodation</h3>
              <p className="text-sm text-gray-200 leading-relaxed">Stay in carefully selected lodges and tented camps that suit your preferred style.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold mb-2">Game drives</h3>
              <p className="text-sm text-gray-200 leading-relaxed">Expert guides, scheduled drives, and excellent wildlife viewing built into the journey.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-ink mb-6">Featured fly-in safari packages</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {flyInPackages.map((item) => (
              <SafariCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
