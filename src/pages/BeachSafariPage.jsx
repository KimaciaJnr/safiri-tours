import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  'Explore parks such as the Masai Mara, Tsavo, Samburu, and Amboseli in a single itinerary.',
  'Unwind on white-sand beaches in Diani, Watamu, Malindi, or Mombasa.',
  'Blend wildlife, culture, boat rides, and relaxation into one memorable holiday.',
  'Perfect for families, couples, and travelers looking for a richer African trip.',
];

const packageList = [
  '7 Days Bush and North Coast',
  '7 Days Bush and Diani Beach',
];

export default function BeachSafariPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#1E2928]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-[#E7DDD0] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-[#C96A2B] uppercase">Beach & safari</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#1E2928]">Beach & Safari</h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
                Kenya offers one of the world’s most rewarding combinations: wildlife at sunrise, ocean views at sunset, and a seamless itinerary that blends both into a single extraordinary escape.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-[#0F5B5B]">Wild moments, coastal calm, unforgettable balance</span>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src="/Photos/Flamengos.jpg" alt="Pink flamingos on water" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F5B5B]/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="rounded-[2rem] border border-[#EFE5D9] bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2928] mb-4">Iconic safari parks and reserves</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kenya’s reserve network includes the Masai Mara, Tsavo, Samburu, and Amboseli, each offering a distinct safari mood, landscape, and set of wildlife encounters.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#EFE5D9] bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2928] mb-4">Relaxation on Kenya’s beaches</h2>
            <p className="text-gray-600 leading-relaxed">
              After the bush, the coast offers a complete reset. Diani, Watamu, Malindi, and Mombasa provide turquoise waters, coral reefs, and peaceful beach stays that perfectly complement the adventure.
            </p>
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] bg-[#0F5B5B] p-8 md:p-10 text-white shadow-[0_18px_45px_rgba(15,91,91,0.18)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why travelers love this combination</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-gray-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1E2928] mb-6">Featured beach & safari packages</h2>
          <div className="grid gap-4 md:grid-cols-2">
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
