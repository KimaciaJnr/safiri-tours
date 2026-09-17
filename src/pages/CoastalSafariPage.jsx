import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { Sun, Train, Map, Wallet } from 'lucide-react';
import { coastalSafariPackages } from '../data/safaris';

const getDestinationFromHash = () => {
  const hash = window.location.hash || '';
  const [, query = ''] = hash.split('?');
  const params = new URLSearchParams(query);
  return params.get('destination');
};

const getDurationDays = (duration) => Number.parseInt(duration, 10);

const tripStyles = [
  {
    title: 'Day trips',
    description:
      'Full-day Tsavo East excursions — Aruba Dam, Bachuma gate, and the man-eaters of Tsavo — back to your resort by late afternoon.',
    match: (p) => getDurationDays(p.duration) === 1,
  },
  {
    title: 'Overnight breaks',
    description:
      'Two-day Tsavo East escapes staying at Voi Safari Lodge, with early-morning predator drives before the drive back to the coast.',
    match: (p) => {
      const days = getDurationDays(p.duration);
      return days >= 2 && days <= 4;
    },
  },
  {
    title: '5-Day tours',
    description:
      'Amboseli plus both Tsavo parks — the full coast-to-wilderness circuit, with the SGR train option to Amboseli.',
    match: (p) => getDurationDays(p.duration) >= 5,
  },
];

export default function CoastalSafariPage() {
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
    ? coastalSafariPackages.filter((pkg) =>
        pkg.title.toLowerCase().includes(activeDest.toLowerCase()),
      )
    : coastalSafariPackages;

  const filteredPackages = activeStyle
    ? destinationFilteredPackages.filter(activeStyle.match)
    : destinationFilteredPackages;

  const handleClick = (style) => {
    const nextStyle = style.title === activeStyle?.title ? null : style;
    setActiveStyle(nextStyle);
    setActiveDest(null);

    window.history.pushState(null, '', '#coastal-safari');

    setTimeout(() => {
      packagesRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 60);
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="w-full px-6 py-12 lg:px-10">
        <header className="mb-8 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 md:p-8">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">
                Coastal safari
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
                Safaris from the Coast
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Beach pickups, Kenya's oldest wilderness, and the Indian Ocean a short drive away —
                here is what matters when your safari begins from Mombasa, Diani, or Watamu.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Sun className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">5:30 am departures</span> from your beach
                    hotel — the early start catches the parks at their most active.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Train className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">SGR train option</span> — the 8:00 train
                    from Mombasa reaches Emali by 1 pm, a scenic shortcut to Amboseli.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Map className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Tsavo & Amboseli</span> — red elephants,
                    Mzima Springs, the Ngulia rhino sanctuary, and Kilimanjaro views on the coast's
                    doorstep.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Wallet className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">From $350 / person</span> — day trips
                    from the coast, rising to $1,000 for the full five-day circuit.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[220px] md:min-h-0">
              <img
                src="/Photos/palmtrees1.jpg"
                alt="Palm trees and beach along Kenya's coast"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/50 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-line bg-white p-4 md:p-6 shadow-sm">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
            Find Your Coastal Safari
          </span>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {tripStyles.map((style) => {
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
                Show all trips
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
                {activeStyle ? activeStyle.title : 'Safari packages from the Coast'}
              </h2>
            </div>
            <div className="hidden rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-teal md:block">
              {filteredPackages.length} curated safari{filteredPackages.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPackages.map((item) => (
              <SafariCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <div className="rounded-[1.75rem] bg-teal p-6 text-white shadow-[0_18px_45px_rgba(15,91,91,0.12)]">
            <h3 className="mb-3 text-2xl font-bold">Bush and beach, one holiday</h3>
            <p className="text-gray-100 leading-relaxed">
              <span className="font-semibold text-brand-gold-light">Road safaris</span> from the
              coast are scenic and flexible, while the <span className="font-semibold text-brand-gold-light">SGR train</span> and
              domestic flights make it easy to reach Tsavo and Amboseli with time left over for the
              beach.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-cream p-6 text-center">
            <p className="text-xl font-semibold leading-relaxed text-ink">
              <span className="font-serif italic text-brand-terracotta">
                From Mombasa, Diani, or Watamu — the bush is closer than you think.
              </span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}