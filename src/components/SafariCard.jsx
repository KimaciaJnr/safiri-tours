import React from 'react';

export default function SafariCard({ pkg }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_18px_45px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
      <div className="relative h-32 overflow-hidden md:h-36">
        <a href={`#safari/${pkg.slug}`} className="block h-full">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent" />
        </a>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
          {pkg.duration}
        </span>
      </div>

      <div className="space-y-2 p-4 md:p-4.5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-terracotta">Safari package</p>
          <h3 className="mt-2 text-lg font-bold leading-snug text-ink">
            <a href={`#safari/${pkg.slug}`} className="hover:text-teal transition-colors">{pkg.title}</a>
          </h3>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-cream-sand pt-3">
          <span className="text-sm font-semibold text-teal">{pkg.price}</span>
          <a href={`#safari/${pkg.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-terracotta">
            View details
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="border-t border-cream-sand pt-3">
          <p className="text-sm font-medium text-ink">Does this look like fun? Book tickets today!</p>
          <a
            href={`#safari/${pkg.slug}?booking=1`}
            className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-brand-terracotta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-terracotta-dark"
          >
            Book Tour
          </a>
        </div>
      </div>
    </article>
  );
}
