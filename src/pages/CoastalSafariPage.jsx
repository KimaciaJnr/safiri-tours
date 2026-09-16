import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { coastalSafariPackages } from '../data/safaris';

const options = [
  {
    title: 'Short safari packages',
    body: '2–3 day trips give you a quick wildlife fix with excellent game viewing and easy coastal access.',
  },
  {
    title: 'Mid-range adventures',
    body: 'A 4–5 day itinerary balances comfort, wildlife sightings, and effortless transfers between coast and bush.',
  },
  {
    title: 'Luxury experiences',
    body: 'Private transfers, premium accommodation, and bespoke game drives elevate the coast-to-safari journey.',
  },
  {
    title: 'Budget options',
    body: 'Shared transport and camp-based travel keep the experience accessible without losing the excitement.',
  },
];

export default function CoastalSafariPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Coastal safari</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-ink">Coastal Safari</h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
                Enjoy the best of both worlds with safari adventures that begin from Mombasa, Diani, or Watamu. Spend your days on game drives and your evenings on the sand, sea, and coastal breeze.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Photos/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-teal">Beach, bush, and brilliant memories</span>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src="/Photos/Zebra-feeding.jpg" alt="Zebra feeding on the savanna" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-12">
          {options.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-cream-sand bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-ink mb-3">{item.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="rounded-[2rem] border border-cream-sand bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Transport options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Road travel is scenic and flexible, while the rail network and domestic flights make it easy to move from the coast into Kenya’s wildlife regions with less time lost in transit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With the right route, travelers can pair a beach stay with a game drive to Tsavo, Amboseli, or the Masai Mara without disrupting the pace of the holiday.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cream-sand bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Unique experiences</h2>
            <p className="text-gray-600 leading-relaxed">
              Safaris from the coast combine broad landscapes, iconic wildlife, and beachside relaxation into one seamless trip. You can watch elephants in Tsavo, enjoy open plains and big cats, then wind down under the sun on Diani or Watamu’s white-sand shores.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-ink mb-6">Popular coastal safari packages</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coastalSafariPackages.map((item) => (
              <SafariCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
