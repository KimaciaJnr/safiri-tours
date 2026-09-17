import React, { useEffect, useState } from 'react';
import { Calendar, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteContact, whatsappLink } from '../data/site';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  tripType: '',
  message: '',
};

function getPackageFromHash() {
  const raw = window.location.hash.replace('#', '').trim();
  const query = raw.split('?')[1] || '';
  const params = new URLSearchParams(query);
  return params.get('package');
}

export default function InquiryForm() {
  const [form, setForm] = useState(() => {
    const prefill = getPackageFromHash();
    if (!prefill) return initialForm;
    return {
      ...initialForm,
      destination: prefill,
      message: `I'm interested in the ${prefill} safari. Please share availability, dates, and options.`,
    };
  });
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const prefill = getPackageFromHash();
      if (!prefill) return;
      setForm((prev) => ({
        ...prev,
        destination: prefill,
        message: `I'm interested in the ${prefill} safari. Please share availability, dates, and options.`,
      }));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpening(true);

    const lines = [
      'Hello Safiri Expedition Tours! I\'d like to inquire about a safari.',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      ...(form.phone ? [`Phone: ${form.phone}`] : []),
      `Destination: ${form.destination}`,
      ...(form.tripType ? [`Trip type: ${form.tripType}`] : []),
      '',
      `Details: ${form.message || 'Please get in touch with options and availability.'}`,
    ];

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange';

  return (
    <section id="inquiry" className="bg-cream-light px-6 py-12 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        
        {/* Left Content */}
        <div className="space-y-5 lg:pt-4">
          <span className="text-xs font-semibold tracking-wider text-brand-terracotta uppercase">
            YOUR ADVENTURE STARTS HERE
          </span>

          <h2 className="max-w-lg text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Ready to explore <span className="font-serif italic text-teal">Africa?</span>
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Whether you're dreaming of a weekend getaway, a scenic road trip, or help planning something unique, our team is here to make it happen. Send an inquiry and we'll take care of the rest.
          </p>

          <div className="grid gap-4 pt-1 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-orange/10 p-3 text-brand-orange">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Flexible scheduling</h4>
                <p className="text-xs text-gray-500">Pick a tour date or tell us your ideal window</p>
              </div>
            </div>

            <a href={`mailto:${siteContact.email}`} className="flex items-start gap-4 group">
              <div className="p-3 rounded-2xl bg-teal/10 text-teal">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-teal transition-colors">Email us</h4>
                <p className="text-xs text-gray-500">{siteContact.email}</p>
              </div>
            </a>

            <a href={`tel:${siteContact.phoneInternational}`} className="flex items-start gap-4 group">
              <div className="p-3 rounded-2xl bg-brand-orange/10 text-brand-orange">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-brand-orange transition-colors">Call us</h4>
                <p className="text-xs text-gray-500">{siteContact.phoneDisplay}</p>
              </div>
            </a>

            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
              <div className="p-3 rounded-2xl bg-teal/10 text-teal">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-teal transition-colors">WhatsApp us</h4>
                <p className="text-xs text-gray-500">Chat with a safari planner directly</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 md:p-8">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-teal uppercase">BEGIN THE JOURNEY</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Plan your next adventure</h3>
            <p className="text-xs text-gray-500 mt-1">
              Tell us what you're dreaming about — we'll reply with options and availability.
            </p>
          </div>

          <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Your name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                aria-label="Email address"
                required
                className={inputClass}
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              aria-label="Phone (optional)"
              className={inputClass}
            />

            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="Dream destination, e.g. Serengeti"
              aria-label="Dream destination"
              required
              className={inputClass}
            />

            <select
              name="tripType"
              value={form.tripType}
              onChange={handleChange}
              aria-label="What type of trip?"
              className={`${inputClass} text-gray-500`}
            >
              <option value="">What type of trip?</option>
              <option value="Group Tour">Group Tour</option>
              <option value="Road Trip">Road Trip</option>
              <option value="Custom / Private">Custom / Private</option>
            </select>

            <textarea
              name="message"
              rows={2}
              value={form.message}
              onChange={handleChange}
              placeholder="Any questions or trip ideas..."
              aria-label="Any questions or trip ideas"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-terracotta resize-none"
            />

            {/* Cloudflare Mock Box */}
            <div className="p-3 border border-gray-200 rounded-xl flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-brand-terracotta rounded cursor-pointer" required />
                <span className="text-xs text-gray-700">Verify you are human</span>
              </div>
              <span className="text-[10px] text-gray-400">CLOUDFLARE</span>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              {opening ? 'Opening WhatsApp…' : 'Send My Inquiry'} <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-gray-400">
              Free, no-obligation inquiry · Response within 24 hours · Opens WhatsApp with your message ready to send
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}