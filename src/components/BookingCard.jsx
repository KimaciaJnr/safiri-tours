import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { siteContact, whatsappLink } from '../data/site';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const initialYear = new Date().getFullYear();
const years = [initialYear, initialYear + 1, initialYear + 2];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  month: '',
  day: '',
  year: '',
  adults: 2,
  kids: 0,
  message: '',
};

const fieldClass =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-terracotta';
const selectClass =
  'w-full px-2 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-terracotta text-gray-700';

export default function BookingCard({ packageTitle }) {
  const [form, setForm] = useState(initialForm);
  const [opening, setOpening] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpening(true);

    const date =
      form.month && form.day && form.year ? `${form.month} ${form.day}, ${form.year}` : 'Not specified';

    const lines = [
      `Booking request: ${packageTitle}`,
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Requested date: ${date}`,
      `Group size: ${form.adults || 0} adult(s), ${form.kids || 0} kid(s)`,
      '',
      `Questions & comments: ${form.message || 'None'}`,
    ];

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Booking Request Form */}
      <div className="rounded-3xl border border-cream-sand bg-white p-6 shadow-[0_18px_45px_rgba(17,24,39,0.06)] md:p-7">
        <div className="mb-5">
          <span className="text-[10px] font-bold tracking-widest text-teal uppercase">Booking Request</span>
          <h2 className="mt-1 text-xl font-bold text-ink">Reserve Your Safari</h2>
          <p className="mt-1 text-xs text-gray-500 leading-relaxed">
            Tell us your travel dates and group size — we'll confirm availability and hold your spot.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="bk-name" className="mb-1 block text-xs font-semibold text-gray-700">
              Full Name *
            </label>
            <input
              id="bk-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Jane Wanjiku"
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="bk-email" className="mb-1 block text-xs font-semibold text-gray-700">
              Email Address *
            </label>
            <input
              id="bk-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="bk-phone" className="mb-1 block text-xs font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              id="bk-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 0712 345 678"
              className={fieldClass}
            />
          </div>

          <div>
            <span className="mb-1 block text-xs font-semibold text-gray-700">Date requested</span>
            <div className="grid grid-cols-3 gap-2">
              <select name="month" value={form.month} onChange={handleChange} aria-label="Requested month" className={selectClass}>
                <option value="">Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select name="day" value={form.day} onChange={handleChange} aria-label="Requested day" className={selectClass}>
                <option value="">Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select name="year" value={form.year} onChange={handleChange} aria-label="Requested year" className={selectClass}>
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <span className="mb-1 block text-xs font-semibold text-gray-700">Group size</span>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="bk-adults" className="mb-1 block text-[11px] text-gray-500">
                  Adults (18+)
                </label>
                <input
                  id="bk-adults"
                  name="adults"
                  type="number"
                  min="1"
                  value={form.adults}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="bk-kids" className="mb-1 block text-[11px] text-gray-500">
                  Kids (17 &amp; under)
                </label>
                <input
                  id="bk-kids"
                  name="kids"
                  type="number"
                  min="0"
                  value={form.kids}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="bk-message" className="mb-1 block text-xs font-semibold text-gray-700">
              Questions &amp; Comments
            </label>
            <textarea
              id="bk-message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="Any questions or special requests..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-terracotta py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-terracotta-dark"
          >
            {opening ? 'Opening WhatsApp…' : 'Send Booking Request'} <Send className="h-4 w-4" />
          </button>

          <p className="text-center text-[10px] text-gray-400">
            No obligation · Opens WhatsApp with your booking details ready to send
          </p>
        </form>
      </div>

      {/* Have a Question */}
      <div className="rounded-3xl border border-cream-sand bg-white p-6 shadow-[0_18px_45px_rgba(17,24,39,0.06)] md:p-7">
        <h2 className="text-lg font-bold text-ink">Have a Question?</h2>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          Feel free to reach out and we're happy to answer any questions you may have.
        </p>
        <div className="mt-4 space-y-3">
          <a
            href={`tel:${siteContact.phoneInternational}`}
            className="flex items-center gap-3 rounded-2xl bg-cream-soft px-4 py-3 text-sm font-semibold text-teal transition-colors hover:bg-cream"
          >
            <Phone className="h-4 w-4" />
            {siteContact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteContact.email}`}
            className="flex items-center gap-3 rounded-2xl bg-cream-soft px-4 py-3 text-sm font-semibold text-teal transition-colors hover:bg-cream"
          >
            <Mail className="h-4 w-4" />
            {siteContact.email}
          </a>
          <a
            href={whatsappLink('Hello Safiri Expedition Tours! I have a question about a safari.')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-cream-soft px-4 py-3 text-sm font-semibold text-teal transition-colors hover:bg-cream"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}