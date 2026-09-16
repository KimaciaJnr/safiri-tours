import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafariCard from '../components/SafariCard';
import { budgetMaraPackages } from '../data/safaris';

const sections = [
  {
    title: 'What makes budget Mara packages appealing?',
    body: 'These trips focus on the essentials of a great safari and make the Masai Mara easier to access for more travelers.',
  },
  {
    title: 'Accommodation options',
    body: 'Budget travelers can choose tented camps, simple lodges, or camp-based travel depending on comfort and style.',
  },
  {
    title: 'Activities included',
    body: 'Most packages include daily game drives, cultural visits, and optional add-ons like hot air balloon rides.',
  },
  {
    title: 'Typical duration',
    body: 'Most budget Mara packages run from 2 to 5 days, enough time for extraordinary wildlife viewing without overspending.',
  },
];

export default function BudgetMaraPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Budget safari</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-ink">Budget Mara</h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
                Experience the magic of the Masai Mara without stretching your budget. These packages focus on value, comfort, and the thrill of authentic game viewing.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Photos/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-teal">Affordable adventure, unforgettable value</span>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src="/Photos/Girrafes-looking.jpg" alt="Giraffes in the plains" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 mb-12">
          {sections.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-cream-sand bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-ink mb-3">{item.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-12 rounded-[2rem] bg-teal p-8 md:p-10 text-white shadow-[0_18px_45px_rgba(15,91,91,0.18)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Affordable safari value</h2>
          <p className="max-w-3xl text-gray-200 leading-relaxed">
            Budget safaris still deliver the same wildlife magic and game-drive excitement as premium trips. Shared transport, simple lodges, and smart route planning make the Mara more accessible without losing the experience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-ink mb-6">Classic budget safaris</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {budgetMaraPackages.map((item) => (
              <SafariCard key={item.slug} pkg={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
