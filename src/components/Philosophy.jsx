import React from 'react';
import { Users, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="about" className="bg-cream-light py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image with Floating Card */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/Photos/Lions-on-Jeep.jpg"
              alt="Group on Bus Tour"
              className="w-full h-[450px] object-cover rounded-3xl shadow-md"
            />
            {/* Floating Overlay Badge */}
            <div className="absolute bottom-6 right-2 sm:-right-6 bg-teal-light text-white p-5 rounded-2xl max-w-xs shadow-xl">
              <h4 className="font-bold text-lg leading-snug">Trip, meet people.</h4>
              <p className="text-xs text-gray-200 mt-1 leading-relaxed">
                More than a ride — a community that explores the continent together.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-wider text-brand-orange uppercase">
            OUR PHILOSOPHY
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            We don't sell itineraries. <span className="text-teal-light italic font-serif">We create experiences.</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Safiri Expedition Tours organizes group tours, road trips, excursions, and adventures that let you discover Africa while enjoying the journey itself. We take care of the transport, schedules, and planning — so you can relax, connect with others, and be fully present in every moment.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            We believe memorable travel shouldn't be reserved for the few. We design every trip for value, comfort, and meaning.
          </p>

          {/* Feature List */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-teal-light/10 text-teal-light">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Social, small-group trips that turn strangers into friends
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-teal-light/10 text-teal-light">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Hand-crafted routes across Africa's most exciting destinations
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-teal-light/10 text-teal-light">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Transport, schedules & activities coordinated for you
              </span>
            </div>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all pt-2"
          >
            Learn more about Safiri <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}