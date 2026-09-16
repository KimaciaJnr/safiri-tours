import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { Sun, Clock, Map, Wallet } from 'lucide-react';
import { nairobiDestinations, nairobiSafariPackages } from '../data/safaris';

const getDestinationFromHash = () => {
  const hash = window.location.hash || '';
  const [, query = ''] = hash.split('?');
  const params = new URLSearchParams(query);
  return params.get('destination');
};

export default function NairobiSafariPage() {
  const [activeDest, setActiveDest] = useState(() => getDestinationFromHash());
  const packagesRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveDest(getDestinationFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredPackages = activeDest
    ? nairobiSafariPackages.filter((pkg) =>
        pkg.title.toLowerCase().includes(activeDest.toLowerCase()),
      )
    : nairobiSafariPackages;

  const handleDestClick = (destTitle) => {
    const nextDest = destTitle === activeDest ? null : destTitle;
    setActiveDest(nextDest);

    const nextHash = nextDest ? `#nairobi-safari?destination=${encodeURIComponent(nextDest)}` : '#nairobi-safari';
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
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Nairobi Gateway</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">Kenya Safaris from Nairobi</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Nairobi is where most safari journeys in Kenya begin. As the country's capital, it blends the energy of a modern city with easy access to some of Africa's best-known parks. <span className="font-semibold text-ink">Jomo Kenyatta International Airport</span> handles global arrivals while <span className="font-semibold text-ink">Wilson Airport</span> serves regional flights — the leap from city to wilderness is <span className="font-semibold text-teal">seamless</span>.
              </p>

              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Sun className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Day trips</span> to Nairobi National Park and city highlights like the Giraffe Centre and David Sheldrick Wildlife Trust.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Clock className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">2–4 day escapes</span> to Amboseli or Nakuru — ideal for quick getaways.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Map className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Longer circuits</span> of a week or more, combining several parks for a deeper dive into Kenya's wildlife.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Wallet className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Every budget and style</span> — from group budget tours and mid-range lodges to exclusive fly-in luxury safaris.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[280px]">
              <img src="/Photos/Lions-on-Jeep.jpg" alt="Lions beside a safari vehicle" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-line bg-white p-4 md:p-6 shadow-sm">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">Where You Can Go</span>

          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {nairobiDestinations.map((item) => {
              const isActive = activeDest === item.title;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleDestClick(item.title)}
                  className={`text-left rounded-2xl border p-4 transition-all ${
                    isActive
                      ? 'border-brand-terracotta bg-brand-terracotta/5 shadow-sm'
                      : 'border-line bg-cream-light hover:border-brand-terracotta/40 hover:shadow-sm'
                  }`}
                >
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-brand-terracotta">
                    {isActive ? 'Showing packages ↓' : 'View packages →'}
                  </span>
                </button>
              );
            })}
          </div>

          {activeDest && (
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveDest(null);
                  setTimeout(() => {
                    packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 60);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-teal hover:border-teal/40 transition-colors"
              >
                Show all destinations
              </button>
            </div>
          )}
        </section>

        <section ref={packagesRef} className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">Featured Packages</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                {activeDest ? `${activeDest} safaris` : 'Nairobi safari packages'}
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
            <h3 className="mb-3 text-2xl font-bold">Road or Fly-In?</h3>
            <p className="text-gray-100 leading-relaxed">
              <span className="font-semibold text-brand-gold-light">Road safaris</span> are a popular choice for travelers who want flexibility and the opportunity to enjoy Kenya's changing landscapes along the way. <span className="font-semibold text-brand-gold-light">Fly-in safaris</span> reduce travel time and are ideal for shorter trips or travelers seeking additional comfort.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-cream p-6 text-center">
            <p className="text-xl font-semibold leading-relaxed text-ink">
              <span className="font-serif italic text-brand-terracotta">From Nairobi to the heart of the wild, your Kenyan adventure starts here.</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
