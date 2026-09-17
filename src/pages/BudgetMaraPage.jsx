import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { Wallet, Map, Clock, Car } from 'lucide-react';
import { budgetMaraPackages } from '../data/safaris';

const getDestinationFromHash = () => {
  const hash = window.location.hash || '';
  const [, query = ''] = hash.split('?');
  const params = new URLSearchParams(query);
  return params.get('destination');
};

const destinations = [
  {
    title: 'Masai Mara',
    description:
      'Big cats and the Great Migration — join-in Landcruiser safaris from $385 for three days.',
  },
  {
    title: 'Amboseli',
    description:
      'Elephant herds and Kilimanjaro — by road from Nairobi or on the SGR train from Mombasa.',
  },
  {
    title: 'Tsavo East',
    description:
      'Red elephants and the man-eaters of Tsavo — day trips and overnight stays from the coast.',
  },
  {
    title: 'Samburu & Ol Pejeta',
    description:
      'Rare northern species, plus Ol Pejeta\u2019s chimpanzee sanctuary and white rhinos.',
  },
];

export default function BudgetMaraPage() {
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
    ? budgetMaraPackages.filter((pkg) =>
        pkg.title.toLowerCase().includes(activeDest.toLowerCase()),
      )
    : budgetMaraPackages;

  const handleClick = (dest) => {
    const nextDest = dest.title === activeDest?.toLowerCase() ? null : dest.title;
    setActiveDest(nextDest);

    const nextHash = nextDest ? `#budget-mara?destination=${encodeURIComponent(nextDest)}` : '#budget-mara';
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
                Budget safari
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
                Budget Safaris
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Kenya's greatest wildlife without the premium price tag — here is what matters when
                you travel on a budget.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Wallet className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Prices you can trust</span> — from $350
                    for a day in Tsavo to $975 for three days in the Masai Mara.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Map className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Four classic destinations</span> —
                    Masai Mara, Amboseli, Tsavo East, and Samburu with Ol Pejeta.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Clock className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Quick 1–4 day escapes</span> — short
                    itineraries with full game drives squeezed into every day.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Car className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    <span className="font-semibold text-ink">Join-in & Landcruiser tours</span> —
                    shared Masai Mara safaris, SGR train access to Amboseli, and 4×4 game viewing.
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-[360px] md:self-start">
              <img
                src="/Photos/Girrafes-looking.jpg"
                alt="Giraffes in the plains"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-line bg-white p-4 md:p-6 shadow-sm">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
            Where You Can Go
          </span>

          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((dest) => {
              const isActive = activeDest?.title === dest.title;
              return (
                <button
                  key={dest.title}
                  type="button"
                  onClick={() => handleClick(dest)}
                  className={`text-left rounded-2xl border p-4 transition-all ${
                    isActive
                      ? 'border-brand-terracotta bg-brand-terracotta/5 shadow-sm'
                      : 'border-line bg-cream-light hover:border-brand-terracotta/40 hover:shadow-sm'
                  }`}
                >
                  <h3 className="text-lg font-bold text-ink">{dest.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{dest.description}</p>
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
                    packagesRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
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
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">
                Featured Packages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                {activeDest ? `${activeDest.title} safaris` : 'Budget safari packages'}
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
            <h3 className="mb-3 text-2xl font-bold">Great safaris don't have to cost the earth</h3>
            <p className="text-gray-100 leading-relaxed">
              <span className="font-semibold text-brand-gold-light">Shared transport</span>, smart
              routes, and simple lodges keep prices low without losing a single game drive — the
              wildlife is the same whether your budget is big or small.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-cream p-6 text-center">
            <p className="text-xl font-semibold leading-relaxed text-ink">
              <span className="font-serif italic text-brand-terracotta">
                Your first safari should be easy — and affordable.
              </span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}