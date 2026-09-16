import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import BookingCard from '../components/BookingCard';
import { getPackageBySlug, getRelatedPackages } from '../data/safaris';
import { MapPin, Clock, Users, Home, Calendar, CheckCircle2, XCircle, ChevronRight, Compass } from 'lucide-react';

const categoryLabels = {
  nairobi: 'Kenya Safaris from Nairobi',
  coastal: 'Coastal Safaris',
  'fly-in': 'Fly-In Safaris',
  beach: 'Beach & Safari',
  budget: 'Budget Safaris',
};

export default function SafariDetailPage({ slug }) {
  const pkg = getPackageBySlug(slug);
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-cream text-ink">
        <Navbar />
        <main id="main" tabIndex={-1} className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-ink">Safari Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            The safari package you are looking for does not exist or may have been removed.
          </p>
          <a
            href="#nairobi-safari"
            className="mt-8 inline-block rounded-2xl bg-brand-terracotta px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-terracotta-dark"
          >
            Browse All Safaris
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const related = getRelatedPackages(pkg, 3);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="w-full px-6 py-12 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
          <a href="#home" className="flex items-center gap-1 hover:text-teal transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </a>
          <ChevronRight className="w-3 h-3" />
          <a href={`#${pkg.category === 'nairobi' ? 'nairobi-safari' : pkg.category === 'coastal' ? 'coastal-safari' : pkg.category === 'fly-in' ? 'fly-in-safari' : pkg.category === 'beach' ? 'beach-safari' : 'budget-mara'}`} className="hover:text-teal transition-colors">
            {categoryLabels[pkg.category]}
          </a>
          <ChevronRight className="w-3 h-3" />
          <span className="truncate text-ink font-medium">{pkg.title}</span>
        </nav>

        {/* Hero */}
        <header className="mb-10 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/70 via-teal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {categoryLabels[pkg.category]}
              </span>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">{pkg.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/90">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  From {pkg.pickup}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  Min. {pkg.minPeople} people
                </span>
              </div>
            </div>
          </div>

          {/* Quick Facts + Price Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream-sand bg-cream-light px-6 py-4 md:px-10">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-terracotta" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-terracotta" />
                {pkg.pickup}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-terracotta" />
                Min. {pkg.minPeople} people
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-teal">{pkg.price}</span>
              <button
                type="button"
                onClick={scrollToBooking}
                className="rounded-2xl bg-brand-terracotta px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-terracotta-dark shadow-md"
              >
                Book This Safari
              </button>
            </div>
          </div>
        </header>

        {/* Two-Column Layout: Main + Booking Sidebar */}
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">

          {/* Left Column — Safari Content */}
          <div className="min-w-0 space-y-12">

            {/* Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-ink">Overview</h2>
              <p className="text-base leading-relaxed text-gray-700">{pkg.overview}</p>
              {pkg.accommodation && (
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-semibold text-ink">Accommodation:</span> {pkg.accommodation}
                </p>
              )}
            </section>

            {/* Itinerary — Timeline */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-2xl font-bold text-ink">Safari Itinerary</h2>
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                    {pkg.itinerary.length} day{pkg.itinerary.length > 1 ? 's' : ''}
                  </span>
                </div>
                <ol>
                  {pkg.itinerary.map((day, i) => (
                    <li key={day.day} className="relative pl-14 pb-8 last:pb-0">
                      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-terracotta text-sm font-bold text-white shadow-md">
                        {day.day}
                      </span>
                      {i < pkg.itinerary.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-0.5 rounded bg-brand-terracotta/20"
                        />
                      )}
                      <div className="rounded-[1.5rem] border border-cream-sand bg-white p-5 shadow-sm md:p-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-terracotta">
                          Day {day.day}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-ink">{day.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">{day.description}</p>
                        {day.mainActivity && (
                          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal">
                            <Compass className="h-3.5 w-3.5" />
                            {day.mainActivity}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <section className="rounded-[1.75rem] bg-teal p-6 md:p-8 text-white shadow-[0_18px_45px_rgba(15,91,91,0.12)]">
                <h2 className="mb-4 text-2xl font-bold">Trip Highlights</h2>
                <ul className="space-y-2">
                  {pkg.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                      <span className="text-sm text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Includes / Excludes */}
            <section className="grid gap-6 md:grid-cols-2">
              {pkg.includes && pkg.includes.length > 0 && (
                <div className="rounded-[1.5rem] border border-cream-sand bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-ink">Package Includes</h2>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.excludes && pkg.excludes.length > 0 && (
                <div className="rounded-[1.5rem] border border-cream-sand bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-ink">Package Excludes</h2>
                  <ul className="space-y-2">
                    {pkg.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

          </div>

          {/* Right Column — Sticky Booking Card */}
          <div ref={bookingRef} className="lg:sticky lg:top-24">
            <BookingCard packageTitle={pkg.title} />
          </div>

        </div>

        {/* CTA Section */}
        <section className="mb-10 mt-10 rounded-[2rem] bg-cream-soft border border-cream-sand p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Ready to Book This Safari?</h2>
          <p className="mb-6 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Tell us your travel dates and group size, and we will put together a tailored proposal with availability, pricing, and all the details you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToBooking}
              className="rounded-2xl bg-brand-terracotta px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-terracotta-dark shadow-md"
            >
              Inquire About This Safari
            </button>
            <a
              href={`#${pkg.category === 'nairobi' ? 'nairobi-safari' : pkg.category === 'coastal' ? 'coastal-safari' : pkg.category === 'fly-in' ? 'fly-in-safari' : pkg.category === 'beach' ? 'beach-safari' : 'budget-mara'}`}
              className="rounded-2xl border border-line bg-white px-8 py-3.5 text-sm font-semibold text-teal transition-colors hover:bg-cream"
            >
              View All {categoryLabels[pkg.category]}
            </a>
          </div>
        </section>

        {/* Related Safaris */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-ink">Related Safaris</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((p) => (
                <SafariCard key={p.slug} pkg={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
