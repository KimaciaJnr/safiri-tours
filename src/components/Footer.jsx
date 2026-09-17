import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { siteContact, whatsappLink } from '../data/site';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/', label: 'Twitter / X' },
  { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
];

const exploreLinks = [
  { label: 'Kenya Safaris from Nairobi', href: '#nairobi-safari' },
  { label: 'Kenya Safaris from the Coast', href: '#coastal-safari' },
  { label: 'Kenya Fly-In Safaris', href: '#fly-in-safari' },
  { label: 'Kenya Beach Safaris', href: '#beach-safari' },
  { label: 'Budget Maasai Mara Deals', href: '#budget-mara' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'What We Offer', href: '#safari-guide' },
  { label: 'Plan My Trip', href: '#inquiry' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      {/* Banner Callout Area */}
      <div className="relative border-b border-gray-800 bg-cover bg-center px-6 py-12" style={{ backgroundImage: `url('/Photos/Lions-on-Jeep.jpg')` }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Your seat on the next Safiri adventure is waiting
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-300 md:text-base">
            Browse upcoming group tours, check availability, and claim your spot on a trip that will change how you see Africa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={whatsappLink("Hi Safiri Expedition Tours! I'd like to see upcoming group tours and availability.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-terracotta-dark"
            >
              View Upcoming Tours <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink('Hi Safiri Expedition Tours! I have a question about your safaris.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="bg-white p-2 rounded-2xl inline-block">
            <img src="/Photos/Logo_page-0001.jpg" alt="Safiri Logo" className="h-10 w-auto" />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Affordable, well-planned group tours, road trips and adventures across Africa. We handle the logistics — you enjoy the journey and make memories that last.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-bold text-sm mb-4">Explore</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
              </li>
            ))}
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Chat with Us on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-bold text-sm mb-4">Get in touch</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-center gap-2 pt-2 text-gray-300">
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <a href={`mailto:${siteContact.email}`} className="hover:text-brand-terracotta transition-colors">{siteContact.email}</a>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <a href={`tel:${siteContact.phoneInternational}`} className="hover:text-brand-terracotta transition-colors">{siteContact.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteContact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="border-t border-gray-800/60 px-6 py-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2026 Safiri Expedition Tours. All rights reserved.</p>
          <a href="#inquiry" className="text-brand-terracotta flex items-center gap-1 font-semibold hover:underline">
            Find Your Adventure <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}