import React from 'react';
import { Users, MapPin, HeartHandshake, BadgeCheck, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';
import { whatsappLink } from '../data/site';

const stats = [
  { value: '12+', label: 'Destinations across Africa' },
  { value: '50+', label: 'Trips organized & counting' },
  { value: '100%', label: 'Logistics handled for you' },
];

const values = [
  {
    icon: <Users className="w-5 h-5 text-brand-terracotta" />,
    bg: 'bg-brand-terracotta/10',
    title: 'Small-group travel',
    body: 'We keep groups intimate so trips stay social, flexible, and easy to coordinate.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-teal" />,
    bg: 'bg-teal/10',
    title: 'Local expertise',
    body: 'Born and based in Kenya, we know the routes, the seasons, and the places worth stopping for.',
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-brand-terracotta" />,
    bg: 'bg-brand-terracotta/10',
    title: 'Community first',
    body: 'Every trip brings travelers together around shared experiences — new friends, shared stories.',
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-teal" />,
    bg: 'bg-teal/10',
    title: 'Honest pricing',
    body: 'Clear, affordable packages with real value — adventure that is not reserved for a few.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="w-full px-6 py-16 lg:px-10">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">About Safiri</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
                About Safiri Expedition Tours
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Safiri means “travel” in Swahili — and that is exactly what we do. We plan affordable group tours,
                road trips, and safaris across Africa so that anyone can experience the continent’s wild beauty,
                culture, and community without the stress of logistics.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-extrabold text-teal">{stat.value}</div>
                    <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
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

        <section className="mb-12 rounded-[2rem] border border-line bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">What we believe in</h2>
          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            Travel is better shared. We balance comfort, value, and adventure so that every trip feels effortless —
            you focus on the moments, and we take care of the rest.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-cream-sand bg-cream-light p-6">
                <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Philosophy />

        <section className="rounded-[2rem] bg-teal p-8 md:p-12 text-white text-center shadow-[0_18px_45px_rgba(15,91,91,0.18)]">
          <h2 className="text-2xl md:text-4xl font-bold">Ready to travel with us?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Tell us where you daydream about and we'll handle the rest — from transport to itinerary to booking.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark px-7 py-3 text-sm font-semibold text-white transition-all"
            >
              Plan My Trip <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={whatsappLink('Hi Safiri Expedition Tours! I\'d like to learn more about your tours.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-7 py-3 text-sm font-semibold text-white transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}