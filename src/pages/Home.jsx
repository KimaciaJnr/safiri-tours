import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatWeOffer from '../components/WhatWeOffer';
import Destinations from '../components/Destinations';
import Philosophy from '../components/Philosophy';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';

const safariCategories = [
  {
    title: 'Kenya Safaris from Nairobi',
    description: 'Start your wildlife journey from the capital with access to the Mara, Amboseli, Nakuru and more.',
    route: '#nairobi-safari',
    cards: [
      { title: 'Masai Mara', image: '/Photos/Lions-on-Jeep.jpg', slug: '3-days-2-nights-masai-mara' },
      { title: 'Amboseli', image: '/Photos/Elephants-hugging.jpg', slug: '3-days-2-nights-amboseli-safari' },
      { title: 'Tsavo', image: '/Photos/Elelphant-img.jpg', slug: '2-day-tsavo-east-from-diani-mombasa' },
    ],
  },
  {
    title: 'Kenya Safaris from the Coast',
    description: 'Blend beach relaxation with thrilling game drives from Mombasa, Diani and Watamu.',
    route: '#coastal-safari',
    cards: [
      { title: 'Tsavo East', image: '/Photos/Elelphant-img.jpg', slug: '2-day-tsavo-east-from-diani-mombasa' },
      { title: 'Amboseli from Mombasa', image: '/Photos/Elephants-hugging.jpg', slug: '2-days-1-night-amboseli-from-mombasa' },
      { title: 'Mombasa & Tsavo', image: '/Photos/Zebra-feeding.jpg', slug: '5-days-mombasa-and-tsavo' },
    ],
  },
  {
    title: 'Kenya Fly-In Safaris',
    description: 'Save time with scenic flights into Kenya’s most iconic wildlife destinations.',
    route: '#fly-in-safari',
    cards: [
      { title: 'Mara Bush Camp', image: '/Photos/Wildbeast-walking.jpg', slug: '3-days-mara-bush-camp-migration' },
      { title: 'Photography Safari', image: '/Photos/Girrafes-looking.jpg', slug: '14-days-photography-safari' },
      { title: 'African Splendours', image: '/Photos/Flamengos.jpg', slug: 'african-splendours-12-nights-flying' },
    ],
  },
  {
    title: 'Kenya Beach Safaris',
    description: 'Combine the thrill of the bush with the calm of Kenya’s Indian Ocean coastline.',
    route: '#beach-safari',
    cards: [
      { title: 'Bush & Diani Beach', image: '/Photos/palmtrees1.jpg', slug: '7-days-bush-and-diani-beach' },
      { title: 'Bush & North Coast', image: '/Photos/Hippo-plus-calf.jpg', slug: '7-days-bush-and-north-coast' },
      { title: 'Grand Kenya & Diani', image: '/Photos/Rhino-plus-calf.jpg', slug: '13-days-grand-kenya-tour' },
    ],
  },
  {
    title: 'Budget Maasai Mara Deals',
    description: 'Affordable safaris that still deliver the unforgettable Mara experience.',
    route: '#budget-mara',
    cards: [
      { title: 'Mara Join-In Safaris', image: '/Photos/Wildbeast-walking.jpg', slug: '3-day-masai-mara-join-in-landcruiser' },
      { title: 'Budget Amboseli', image: '/Photos/Girrafe-feeding.jpg', slug: 'budget-2-days-1-night-amboseli-from-mombasa' },
      { title: 'Budget Tsavo Day Trip', image: '/Photos/Zebra-feeding.jpg', slug: 'budget-1-day-tsavo-east-from-diani' },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-brand-terracotta selection:text-white">
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />

      <section className="bg-[linear-gradient(180deg,#F4F0EA_0%,#F8F6F2_100%)] px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-line-soft bg-white/80 p-8 shadow-[0_18px_50px_rgba(17,24,39,0.06)] backdrop-blur-sm md:p-12">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-terracotta uppercase">Traveler Review</p>
            <blockquote className="mt-5 text-2xl md:text-4xl font-medium leading-relaxed text-ink">
              “The planning was seamless, the wildlife was unforgettable, and the whole experience felt effortlessly premium from start to finish.”
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
              <span className="font-semibold text-ink">Ava Thompson</span>
              <span className="inline-block h-1 w-1 rounded-full bg-line-mid" />
              <span>Luxury Safari Guest</span>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="px-6 py-16 md:py-20">
        <div className="w-full">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase">Our Safaris</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-ink">Curated safari experiences</h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {safariCategories.map((category, index) => (
              <article
                key={category.title}
                className={`flex min-h-screen flex-col rounded-[2rem] border border-line px-6 py-12 shadow-[0_18px_45px_rgba(17,24,39,0.04)] md:px-12 md:py-16 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-cream-light'
                }`}
              >
                <div className="mb-12 max-w-2xl">
                  <span className="inline-flex rounded-full bg-brand-terracotta/10 px-3 py-1 text-xs font-semibold text-brand-terracotta">
                    Safari Category
                  </span>
                  <h3 className="mt-4 text-3xl font-bold text-ink md:text-4xl">{category.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{category.description}</p>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
                  {category.cards.map((card) => (
                    <a
                      key={card.slug}
                      href={`${category.route}?destination=${encodeURIComponent(card.title)}`}
                      className="group relative h-full min-h-[340px] overflow-hidden rounded-[1.75rem] border border-line bg-teal shadow-[0_18px_45px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                      <div className="relative flex h-full flex-col justify-end p-6">
                        <span className="inline-flex w-fit rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                          Safari package
                        </span>
                        <h4 className="mt-3 text-2xl font-bold leading-snug text-white">{card.title}</h4>
                        <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                          View details
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-12 flex justify-end">
                  <a
                    href={category.route}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-terracotta px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-terracotta-dark hover:shadow-lg"
                  >
                    See more safaris
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhatWeOffer />
        <Destinations />
        <Philosophy />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}