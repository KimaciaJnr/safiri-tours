import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const destinations = [
  { title: 'Masai Mara', text: 'Kenya’s iconic wildlife destination, famous for big cats, abundant wildlife, and the Great Migration.' },
  { title: 'Amboseli', text: 'Known for large elephant herds and stunning views of Mount Kilimanjaro.' },
  { title: 'Tsavo', text: 'A vast wilderness offering diverse wildlife, dramatic landscapes, and its famous red elephants.' },
  { title: 'Lake Nakuru', text: 'A great choice for birdlife, flamingos, rhinos, and scenic surroundings.' },
  { title: 'Samburu', text: 'Offers a unique northern Kenya experience with species such as Grevy’s zebra and reticulated giraffes.' },
];

const safariPackages = [
  {
    title: '6 Day Safari to Amboseli, Hell’s Gate, Nakuru & Mara',
    duration: '6 Days / 5 Nights',
    price: 'From $1,419 / person',
    image: '/Photos/Elephants-hugging.jpg',
    href: 'https://keshitours.com/tour/6-day-safari-to-amboseli-hells-gate-nakuru-mara/',
  },
  {
    title: '3-Day Masai Mara Join-In Safari with a Landcruiser',
    duration: '3 Days',
    price: 'From $385 / person',
    image: '/Photos/Wildbeast-walking.jpg',
    href: 'https://keshitours.com/tour/3-day-masai-mara-join-in-safari-with-a-landcruiser/',
  },
  {
    title: '3 Days 2 Nights Amboseli Safari',
    duration: '3 Days / 2 Nights',
    price: 'From $830 / person',
    image: '/Photos/Elelphant-img.jpg',
    href: 'https://keshitours.com/tour/3-days-2-nights-amboseli-safari-2/',
  },
  {
    title: '2 Days 1 Night Amboseli National Park Safari',
    duration: '2 Days / 1 Night',
    price: 'From $518 / person',
    image: '/Photos/Zebra-feeding.jpg',
    href: 'https://keshitours.com/tour/2-days-1-night-amboseli-national-park-safari/',
  },
  {
    title: '4 Days 3 Nights Safari Samburu & Ol Pejeta Conservancy',
    duration: '4 Days / 3 Nights',
    price: 'From $1,185 / person',
    image: '/Photos/Girrafes-looking.jpg',
    href: 'https://keshitours.com/tour/4-days-samburu-and-ol-pejeta-safari/',
  },
  {
    title: '3 Days 2 Nights Masai Mara Safari',
    duration: '3 Days / 2 Nights',
    price: 'From $975 / person',
    image: '/Photos/Lions-on-Jeep.jpg',
    href: 'https://keshitours.com/tour/3-days-2-nights-masai-mara-safari/',
  },
  {
    title: '13 Days Nairobi, Masai Mara, Hell’s Gate, Amboseli, Taita Hill Sanctuary & Diani',
    duration: '13 Days / 12 Nights',
    price: 'From $3,205 / person',
    image: '/Photos/Rhino-plus-calf.jpg',
    href: 'https://keshitours.com/tour/13-days-nairobi-masai-mara-hells-gate-amboseli-taita-hill-sanctuary-and-diani/',
  },
  {
    title: '6 Days Tour: Lake Naivasha, Nakuru, Samburu & Ol Pejeta',
    duration: '6 Days / 5 Nights',
    price: 'From $1,881 / person',
    image: '/Photos/Flamengos.jpg',
    href: 'https://keshitours.com/tour/6-days-tour-lake-naivasha-nakuru-samburu-and-ol-pejeta/',
  },
  {
    title: '16 Days 15 Nights Kenya Safari',
    duration: '16 Days / 15 Nights',
    price: 'From $4,770 / person',
    image: '/Photos/Hippo-plus-calf.jpg',
    href: 'https://keshitours.com/tour/16-days-15-nights-kenya-safari/',
  },
  {
    title: '10 Days 9 Nights Masai Mara, Nakuru, Naivasha, Amboseli & Tsavo',
    duration: '10 Days / 9 Nights',
    price: 'From $2,728 / person',
    image: '/Photos/Zebra-img.jpg',
    href: 'https://keshitours.com/tour/10-days-9-nights-masai-mara-nakuru-naivasha-amboseli-and-tsavo/',
  },
  {
    title: 'The Elephant Trail Safari',
    duration: '15 Days / 14 Nights',
    price: 'From $3,621 / person',
    image: '/Photos/Antelopes-fighting.jpg',
    href: 'https://keshitours.com/tour/the-elephant-trail-safari/',
  },
  {
    title: '11 Days Big Five Trail',
    duration: '11 Days / 10 Nights',
    price: 'From $3,210 / person',
    image: '/Photos/Cheetars-looking.jpg',
    href: 'https://keshitours.com/tour/11-days-big-five-trail/',
  },
  {
    title: '2 Days 1 Night Amboseli National Park Safari from Mombasa',
    duration: '2 Days / 1 Night',
    price: 'From $580 / person',
    image: '/Photos/Girrafe-feeding.jpg',
    href: 'https://keshitours.com/tour/2-days-1-night-amboseli-national-park-safari-start-in-mombasa/',
  },
];

export default function NairobiSafariPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#1E2928]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <header className="mb-12 overflow-hidden rounded-[2rem] border border-[#E7DDD0] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold tracking-[0.22em] text-[#C96A2B] uppercase">Nairobi Gateway</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1E2928] md:text-6xl">Kenya Safaris from Nairobi</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Nairobi is an ideal starting point for discovering Kenya’s wildlife, landscapes, and culture. With Jomo Kenyatta International Airport and Wilson Airport providing convenient connections, travelers can easily begin their safari from the capital and venture into Kenya’s renowned national parks and reserves.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/Logo_page-0001.jpg" alt="Safiri logo" className="h-12 w-auto rounded-xl bg-white p-2 shadow-sm" />
                <span className="text-sm font-medium text-[#0F5B5B]">Luxury safari planning, made easy</span>
              </div>
            </div>
            <div className="relative min-h-[280px]">
              <img src="/Photos/Lions-on-Jeep.jpg" alt="Lions beside a safari vehicle" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F5B5B]/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mb-12 rounded-[2rem] border border-[#E7DDD0] bg-white p-6 md:p-8 shadow-sm">
          <div className="space-y-6 text-[#1E2928]">
            <div className="max-w-4xl space-y-4">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong className="font-semibold text-[#0F5B5B]">Where You Can Go:</strong> From Nairobi, you can explore a variety of destinations, each offering a different safari experience:
              </p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {destinations.map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-[#EFE5D9] bg-[#FAF8F5] p-4">
                    <h2 className="mb-2 text-lg font-bold text-[#1E2928]">{item.title}</h2>
                    <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#F8F3EC] p-6">
                <h3 className="mb-3 text-2xl font-bold text-[#1E2928]">Safari Options</h3>
                <p className="text-gray-700 leading-relaxed">
                  There is a safari for almost every schedule. <span className="font-semibold text-[#0F5B5B]">Day trips</span> provide a quick escape into nature, with Nairobi National Park being especially convenient. <span className="font-semibold text-[#0F5B5B]">2–4 day safaris</span> are ideal for destinations such as Amboseli and Lake Nakuru, while longer itineraries can combine several parks for a richer and more diverse experience.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#F8F3EC] p-6">
                <h3 className="mb-3 text-2xl font-bold text-[#1E2928]">Safaris for Every Budget</h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose an experience that matches your travel style and budget. <span className="font-semibold text-[#C96A2B]">Budget group safaris</span> offer affordable shared transport and accommodation, while <span className="font-semibold text-[#C96A2B]">mid-range packages</span> provide added comfort and smaller groups. For a more exclusive experience, <span className="font-semibold text-[#C96A2B]">private and luxury safaris</span> offer personalized guides, premium accommodation, private vehicles, and greater flexibility.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[#0F5B5B] p-6 text-white shadow-[0_18px_45px_rgba(15,91,91,0.12)]">
              <h3 className="mb-3 text-2xl font-bold">Road or Fly-In?</h3>
              <p className="text-gray-100 leading-relaxed">
                <span className="font-semibold text-[#F7D9A6]">Road safaris</span> are a popular choice for travelers who want flexibility and the opportunity to enjoy Kenya’s changing landscapes along the way. <span className="font-semibold text-[#F7D9A6]">Fly-in safaris</span> reduce travel time and are ideal for shorter trips or travelers seeking additional comfort.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#E7DDD0] bg-[#F7F1E5] p-6 text-center">
              <p className="text-xl font-semibold leading-relaxed text-[#1E2928]">
                <span className="font-serif italic text-[#C96A2B]">From Nairobi to the heart of the wild, your Kenyan adventure starts here.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C96A2B] uppercase">Featured Packages</p>
              <h2 className="mt-3 text-3xl font-bold text-[#1E2928] md:text-4xl">Nairobi safari packages</h2>
            </div>
            <div className="hidden rounded-full border border-[#E7DDD0] bg-white px-4 py-2 text-sm font-medium text-[#0F5B5B] md:block">
              13 curated safari options
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {safariPackages.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.75rem] border border-[#E7DDD0] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,24,39,0.08)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F5B5B]/60 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F5B5B]">
                    {item.duration}
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C96A2B]">Safari package</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-[#1E2928]">{item.title}</h3>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-[#EFE5D9] pt-3">
                    <span className="text-sm font-semibold text-[#0F5B5B]">{item.price}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C96A2B]">
                      View details
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
