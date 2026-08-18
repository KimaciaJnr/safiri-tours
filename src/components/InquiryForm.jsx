import React from 'react';
import { Calendar, Mail, Phone, ArrowRight } from 'lucide-react';

export default function InquiryForm() {
  return (
    <section className="bg-[#FAF8F5] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-wider text-[#C96A2B] uppercase">
            YOUR ADVENTURE STARTS HERE
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ready to explore <br />
            <span className="text-[#0F5B5B] italic font-serif">Africa?</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Whether you're dreaming of a weekend getaway, a scenic road trip, or help planning something unique, our team is here to make it happen. Send an inquiry and we'll take care of the rest.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#E8732A]/10 text-[#E8732A]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Flexible scheduling</h4>
                <p className="text-xs text-gray-500">Pick a tour date or tell us your ideal window</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#0F5B5B]/10 text-[#0F5B5B]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Email us</h4>
                <p className="text-xs text-gray-500">info@safiriexpeditions.co.ke</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#E8732A]/10 text-[#E8732A]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Call us</h4>
                <p className="text-xs text-gray-500">+254 712 345 678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#0F5B5B] uppercase">BEGIN THE JOURNEY</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Plan your next adventure</h3>
            <p className="text-xs text-gray-500 mt-1">
              Tell us what you're dreaming about — we'll reply with options and availability.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E8732A]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E8732A]"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone (optional)"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E8732A]"
            />

            <input
              type="text"
              placeholder="Dream destination, e.g. Serengeti"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E8732A]"
            />

            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-500 focus:outline-none focus:border-[#E8732A]">
              <option value="">What type of trip?</option>
              <option value="group">Group Tour</option>
              <option value="roadtrip">Road Trip</option>
              <option value="custom">Custom / Private</option>
            </select>

            <textarea
              rows={3}
              placeholder="Any questions or trip ideas..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C96A2B] resize-none"
            />

            {/* Cloudflare Mock Box */}
            <div className="p-3 border border-gray-200 rounded-xl flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-[#C96A2B] rounded cursor-pointer" />
                <span className="text-xs text-gray-700">Verify you are human</span>
              </div>
              <span className="text-[10px] text-gray-400">CLOUDFLARE</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C96A2B] hover:bg-[#b15f25] text-white py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              Send My Inquiry <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-gray-400">
              Free, no-obligation inquiry · Response within 24 hours
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}