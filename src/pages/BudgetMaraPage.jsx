import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const packageList = [
  '2 Days 1 Night Amboseli National Park Safari (Start in Mombasa)',
  '3-Day Masai Mara Join-In Safari with a Landcruiser',
  '3 Days 2 Nights Amboseli Safari',
  '2 Days 1 Night Amboseli National Park Safari',
  '2-Day Tsavo East Safari from Diani or Mombasa',
  '1-Day Tsavo East National Park Safari from Diani',
  '2-Day Tsavo East National Park Safari from Diani',
  '1-Day Tsavo East Safari from Mombasa',
  '4 Days 3 Nights Safari Samburu & Ol Pejeta Conservancy',
  '3 Days 2 Nights Masai Mara Safari',
];

export default function BudgetMaraPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#1E2928]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-[#E7DDD0] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-[#C96A2B] uppercase">Budget safari</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#1E2928]">Budget Mara</h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
                Experience the magic of the Masai Mara without stretching your budget. These packages focus on value, comfort, and the thrill of authentic game viewing.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-[#0F5B5B]">Affordable adventure, unforgettable value</span>
              </div>
            </div>
            <div className="relative min-h-[260px]">
              <img src="/Photos/Girrafes-looking.jpg" alt="Giraffes in the plains" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F5B5B]/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 mb-12">
          {sections.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#EFE5D9] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1E2928] mb-3">{item.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-12 rounded-[2rem] bg-[#0F5B5B] p-8 md:p-10 text-white shadow-[0_18px_45px_rgba(15,91,91,0.18)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Affordable safari value</h2>
          <p className="max-w-3xl text-gray-200 leading-relaxed">
            Budget safaris still deliver the same wildlife magic and game-drive excitement as premium trips. Shared transport, simple lodges, and smart route planning make the Mara more accessible without losing the experience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1E2928] mb-6">Classic budget safaris</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
