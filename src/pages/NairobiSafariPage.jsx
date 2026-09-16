import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { nairobiDestinations, nairobiSafariPackages } from '../data/safaris';

export default function NairobiSafariPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Nairobi Gateway</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">Kenya Safaris from Nairobi</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Nairobi is an ideal starting point for discovering Kenya’s wildlife, landscapes, and culture. With Jomo Kenyatta International Airport and Wilson Airport providing convenient connections, travelers can easily begin their safari from the capital and venture into Kenya’s renowned national parks and reserves.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Photos/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-teal">Luxury safari planning, made easy</span>
              </div>
            </div>
            <div className="relative min-h-[280px]">
              <img src="/Photos/Lions-on-Jeep.jpg" alt="Lions beside a safari vehicle" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-12 rounded-[2rem] border border-line bg-white p-6 md:p-8 shadow-sm">
          <div className="space-y-6 text-ink">
            <div className="max-w-4xl space-y-4">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong className="font-semibold text-teal">Where You Can Go:</strong> From Nairobi, you can explore a variety of destinations, each offering a different safari experience:
              </p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {nairobiDestinations.map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-cream-sand bg-cream-light p-4">
                    <h2 className="mb-2 text-lg font-bold text-ink">{item.title}</h2>
                    <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] bg-cream-soft p-6">
                <h3 className="mb-3 text-2xl font-bold text-ink">Safari Options</h3>
                <p className="text-gray-700 leading-relaxed">
                  There is a safari for almost every schedule. <span className="font-semibold text-teal">Day trips</span> provide a quick escape into nature, with Nairobi National Park being especially convenient. <span className="font-semibold text-teal">2–4 day safaris</span> are ideal for destinations such as Amboseli and Lake Nakuru, while longer itineraries can combine several parks for a richer and more diverse experience.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-cream-soft p-6">
                <h3 className="mb-3 text-2xl font-bold text-ink">Safaris for Every Budget</h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose an experience that matches your travel style and budget. <span className="font-semibold text-brand-terracotta">Budget group safaris</span> offer affordable shared transport and accommodation, while <span className="font-semibold text-brand-terracotta">mid-range packages</span> provide added comfort and smaller groups. For a more exclusive experience, <span className="font-semibold text-brand-terracotta">private and luxury safaris</span> offer personalized guides, premium accommodation, private vehicles, and greater flexibility.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-teal p-6 text-white shadow-[0_18px_45px_rgba(15,91,91,0.12)]">
              <h3 className="mb-3 text-2xl font-bold">Road or Fly-In?</h3>
              <p className="text-gray-100 leading-relaxed">
                <span className="font-semibold text-brand-gold-light">Road safaris</span> are a popular choice for travelers who want flexibility and the opportunity to enjoy Kenya’s changing landscapes along the way. <span className="font-semibold text-brand-gold-light">Fly-in safaris</span> reduce travel time and are ideal for shorter trips or travelers seeking additional comfort.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-line bg-cream p-6 text-center">
              <p className="text-xl font-semibold leading-relaxed text-ink">
                <span className="font-serif italic text-brand-terracotta">From Nairobi to the heart of the wild, your Kenyan adventure starts here.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">Featured Packages</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Nairobi safari packages</h2>
            </div>
            <div className="hidden rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-teal md:block">
              13 curated safari options
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {nairobiSafariPackages.map((item) => (
              <SafariCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
