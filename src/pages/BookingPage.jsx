import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingCard from '../components/BookingCard';

export default function BookingPage({ packageTitle }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <header className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-terracotta">Booking Request</span>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-5xl">Reserve your safari</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Share your travel details and our team will confirm availability and help you plan the right experience.
          </p>
          {packageTitle && (
            <p className="mt-5 inline-flex max-w-full rounded-full bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">
              {packageTitle}
            </p>
          )}
        </header>

        <BookingCard packageTitle={packageTitle || 'your safari'} />
      </main>

      <Footer />
    </div>
  );
}
