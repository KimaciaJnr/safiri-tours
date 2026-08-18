import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const packageList = [
  '2-Day Tsavo East Safari from Diani or Mombasa',
  '1-Day Tsavo East National Park Safari from Diani',
  '2-Day Tsavo East National Park Safari from Diani',
  '1-Day Tsavo East Safari from Mombasa',
  '5 Days Mombasa, Amboseli and Tsavo',
  '5 Days Tour Mombasa and Tsavo',
];

export default function CoastalSafariPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#1E2928]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-[#E7DDD0] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-[#C96A2B] uppercase">Coastal safari</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#1E2928]">Coastal Safari</h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
                Enjoy the best of both worlds with safari adventures that begin from Mombasa, Diani, or Watamu. Spend your days on game drives and your evenings on the sand, sea, and coastal breeze.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-[#0F5B5B]">Beach, bush, and brilliant memories</span>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src="/Photos/Zebra-feeding.jpg" alt="Zebra feeding on the savanna" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F5B5B]/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-12">
          {options.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#EFE5D9] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1E2928] mb-3">{item.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="rounded-[2rem] border border-[#EFE5D9] bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2928] mb-4">Transport options</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Road travel is scenic and flexible, while the rail network and domestic flights make it easy to move from the coast into Kenya’s wildlife regions with less time lost in transit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With the right route, travelers can pair a beach stay with a game drive to Tsavo, Amboseli, or the Masai Mara without disrupting the pace of the holiday.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EFE5D9] bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2928] mb-4">Unique experiences</h2>
            <p className="text-gray-600 leading-relaxed">
              Safaris from the coast combine broad landscapes, iconic wildlife, and beachside relaxation into one seamless trip. You can watch elephants in Tsavo, enjoy open plains and big cats, then wind down under the sun on Diani or Watamu’s white-sand shores.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1E2928] mb-6">Popular coastal safari packages</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {packageList.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#EFE5D9] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold leading-relaxed text-[#1E2928]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
