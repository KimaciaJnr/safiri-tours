import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Compass, House, Menu, X } from 'lucide-react';

const safariLinks = [
  { label: 'Kenya Safaris from Nairobi', href: '#nairobi-safari' },
  { label: 'Kenya Safaris from Coast (Mombasa, Diani, Watamu)', href: '#coastal-safari' },
  { label: 'Kenya Fly-In Safaris', href: '#fly-in-safari' },
  { label: 'Kenya Beach Safaris', href: '#beach-safari' },
  { label: 'Budget Maasai Mara Deals', href: '#budget-mara' },
];

const navLinks = [
  { label: 'Mountain Climbing', href: '#mountain-climbing' },
  { label: 'Safari Guide', href: '#safari-guide' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const firstLink = mobileMenuRef.current?.querySelector('a');
    firstLink?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-line">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/Photos/Logo_page-0001.jpg"
            alt="Safiri Expedition Tours"
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 xl:gap-8 font-medium text-ink text-sm" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2 hover:text-brand-terracotta transition-colors">
            <House size={16} />
            <span>Home</span>
          </a>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 hover:text-brand-terracotta transition-colors focus:outline-none"
            >
              <Compass size={16} />
              <span>Safaris</span>
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-80 rounded-xl border border-line bg-white shadow-xl py-2">
                {safariLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-ink hover:bg-cream hover:text-teal transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-brand-terracotta transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#inquiry"
            className="hidden sm:inline-flex bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Find Your Adventure
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2 text-ink hover:text-brand-terracotta transition-colors focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          ref={mobileMenuRef}
          aria-label="Mobile navigation"
          className="md:hidden border-t border-line bg-cream px-6 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <a href="#home" onClick={() => setMenuOpen(false)} className="block py-2.5 text-ink font-medium hover:text-brand-terracotta">
            Home
          </a>
          <p className="pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">Safaris</p>
          {safariLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-ink hover:text-teal transition-colors"
            >
              {item.label}
            </a>
          ))}
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-ink font-medium hover:text-brand-terracotta transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block text-center bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
          >
            Find Your Adventure
          </a>
        </nav>
      )}
    </header>
  );
}