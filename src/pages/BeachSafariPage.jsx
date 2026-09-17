import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { Sun, Waves, Car, Wallet } from 'lucide-react';
import { beachPackages } from '../data/safaris';

const getDestinationFromHash = () => {
  const hash = window.location.hash || '';
  const [, query = ''] = hash.split('?');
  const params = new URLSearchParams(query);
  return params.get('destination');
};

const beachStyles = [
  {
    title: 'Diani (South Coast)',
    description:
      'White sands and coral reefs, with Shimba Hills and the Mwalunganje Elephant Sanctuary nearby.',
    match: (p) => p.slug === '7-days-bush-and-diani-beach',
  },
  {
    title: 'North Coast',
    description:
      'Bamburi, Shanzu, and Watamu — with Fort Jesus, Haller Park, and the Marine National Park.',
    match: (p) => p.slug === '7-days-bush-and-north-coast',
  },
];

export default function BeachSafariPage() {
  const [activeStyle, setActiveStyle] = useState(null);
  const [activeDest, setActiveDest] = useState(() => getDestinationFromHash());
  const packagesRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveDest(getDestinationFromHash());
      if (!getDestinationFromHash()) {
        setActiveStyle(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const destinationFilteredPackages = activeDest
    ? beachPackages.filter((pkg) => pkg.title.toLowerCase().includes(activeDest.toLowerCase()))
    : beachPackages;

  const filteredPackages = activeStyle
    ? destinationFilteredPackages.filter(activeStyle.match)
    : destinationFilteredPackages;

  const handleClick = (style) => {
    const nextStyle = style.title === activeStyle?.title ? null : style;
    setActiveStyle(nextStyle);
    setActiveDest(null);

    const nextHash = '#beach-safari';
    window.history.pushState(null, '', nextHash);
    window.dispatchEvent(new Event('hashchange'));

    setTimeout(() => {
      packagesRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 60);
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="w-full px-6 py-16 lg:px-10">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">
                Beach & safari
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
                Bush & Beach Safaris
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Wildlife at sunrise, ocean views at sunset, and one road journey linking them — here
                is what matters when a Kenyan safari ends on the sand.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Sun className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Two nights in Tsavo</span> — Tsavo
                    West's Mzima Springs and lava flows, then Tsavo East's red elephants.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Waves className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Four nights on the beach</span> — Diani
                    on the south coast, or Bamburi, Shanzu, and Watamu to the north.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Car className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">All overland — no flights</span> — a
                    single road journey takes you from the parks straight to your beach hotel.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Wallet className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">From $1,385 / person</span> — seven
                    days and six nights of safari plus beach in a single price.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[280px]">
              <img
                src="/Photos/palmtrees1.jpg"
                alt="Palm trees and beach along Kenya's coast"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-line bg-white p-4 md:p-6 shadow-sm">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
            Where You'll Unwind
          </span>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {beachStyles.map((style) => {
              const isActive = activeStyle?.title === style.title;
              return (
                <button
                  key={style.title}
                  type="button"
                  onClick={() => handleClick(style)}
                  className={`text-left rounded-2xl border p-4 transition-all ${
                    isActive
                      ? 'border-brand-terracotta bg-brand-terracotta/5 shadow-sm'
                      : 'border-line bg-cream-light hover:border-brand-terracotta/40 hover:shadow-sm'
                  }`}
                >
                  <h3 className="text-lg font-bold text-ink">{style.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{style.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-brand-terracotta">
                    {isActive ? 'Showing packages ↓' : 'View packages →'}
                  </span>
                </button>
              );
            })}
          </div>

          {activeStyle && (
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveStyle(null);
                  setTimeout(() => {
                    packagesRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
                  }, 60);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-teal hover:border-teal/40 transition-colors"
              >
                Show both beaches
              </button>
            </div>
          )}
        </section>

        <section ref={packagesRef} className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
                Featured Packages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                {activeStyle ? activeStyle.title : 'Bush & beach packages'}
              </h2>
            </div>
            <div className="hidden rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-teal md:block">
              {filteredPackages.length} curated safari{filteredPackages.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredPackages.map((item) => (
              <SafariCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <div className="rounded-[1.75rem] bg-teal p-6 text-white shadow-[0_18px_45px_rgba(15,91,91,0.12)]">
            <h3 className="mb-3 text-2xl font-bold">Bush at sunrise, ocean at sunset</h3>
            <p className="text-gray-100 leading-relaxed">
              Every package pairs <span className="font-semibold text-brand-gold-light">two nights of
              safari in Tsavo</span> with four by the Indian Ocean — a full week built around
              Kenya's two greatest draws.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-cream p-6 text-center">
            <p className="text-xl font-semibold leading-relaxed text-ink">
              <span className="font-serif italic text-brand-terracotta">
                Wild mornings and coastal calm — the best of Kenya in one week.
              </span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}