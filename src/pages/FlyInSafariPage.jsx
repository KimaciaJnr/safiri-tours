import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { Plane, Clock, Camera, Wallet } from 'lucide-react';
import { flyInPackages } from '../data/safaris';

const getDestinationFromHash = () => {
  const hash = window.location.hash || '';
  const [, query = ''] = hash.split('?');
  const params = new URLSearchParams(query);
  return params.get('destination');
};

const tripStyles = [
  {
    title: 'Short fly-in breaks',
    description:
      'Two-to-three-night escapes — Lions Bluff in the Taita Hills and Mara Bush Camp during migration.',
    match: (p) =>
      ['2-nights-lions-bluff-low-season', '2-nights-lions-bluff-high-season', '3-days-mara-bush-camp-migration'].includes(
        p.slug,
      ),
  },
  {
    title: 'Fly-in circuits',
    description:
      'Amboseli, Ol Pejeta, and the Mara\u2019s conservancies on the Masai Safari and African Splendours.',
    match: (p) => ['masai-safari-4-nights-driving-flying', 'african-splendours-12-nights-flying'].includes(p.slug),
  },
  {
    title: 'Photography safari',
    description:
      'Thirteen nights in the Masai Mara with sunrise-to-sunset shooting from open-sided 4\u00d74s.',
    match: (p) => p.slug === '14-days-photography-safari',
  },
];

export default function FlyInSafariPage() {
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
    ? flyInPackages.filter((pkg) => pkg.title.toLowerCase().includes(activeDest.toLowerCase()))
    : flyInPackages;

  const filteredPackages = activeStyle
    ? destinationFilteredPackages.filter(activeStyle.match)
    : destinationFilteredPackages;

  const handleClick = (style) => {
    const nextStyle = style.title === activeStyle?.title ? null : style;
    setActiveStyle(nextStyle);
    setActiveDest(null);

    const nextHash = '#fly-in-safari';
    window.history.pushState(null, '', nextHash);
    window.dispatchEvent(new Event('hashchange'));

    setTimeout(() => {
      packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                Fly-in safari
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
                Fly-In Safaris
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                The fastest way into Kenya's great reserves — here is what matters when your safari
                starts on the runway instead of the road.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Plane className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Bush flights included</span> — scheduled
                    services from Wilson to the Mara, Taita Hills, Selenkay, Ol Seki, and Nanyuki
                    airstrips.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Clock className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Skip the long drives</span> — reach the
                    Masai Mara in under an hour instead of a full day on the road.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Camera className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Photography-focused</span> — the 13-night
                    Mara photography safari runs in open-sided 4×4s with an off-road permit.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Wallet className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">From $1,295 / person</span> — including
                    the Mara Bush Camp migration offer with return flights.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[280px]">
              <img
                src="/Photos/Elephants-hugging.jpg"
                alt="Elephants in the wild"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-line bg-white p-4 md:p-6 shadow-sm">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
            Find Your Fly-In Safari
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
                    packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                {activeStyle ? activeStyle.title : 'Fly-in safari packages'}
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
            <h3 className="mb-3 text-2xl font-bold">More time in the bush, less on the road</h3>
            <p className="text-gray-100 leading-relaxed">
              <span className="font-semibold text-brand-gold-light">Fly-in safaris</span> reduce
              travel time and are ideal for shorter trips, while the conservancy camps they reach —
              Porini and others — offer game drives without the crowds of the reserve.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-cream p-6 text-center">
            <p className="text-xl font-semibold leading-relaxed text-ink">
              <span className="font-serif italic text-brand-terracotta">
                Fly in, drive less, see more — Kenya from above first.
              </span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}