import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  nairobiDestinations,
  nairobiSafariPackages,
  coastalSafariPackages,
  flyInPackages,
  beachPackages,
  budgetMaraPackages,
  allPackages,
  getPackageBySlug,
  getRelatedPackages,
} from './safaris';

const allCategoryLists = [
  coastalSafariPackages,
  flyInPackages,
  beachPackages,
  budgetMaraPackages,
];

const requiredFields = [
  'slug',
  'title',
  'duration',
  'price',
  'image',
  'category',
  'overview',
  'pickup',
  'minPeople',
  'itinerary',
  'highlights',
  'includes',
  'excludes',
];

describe('safaris data', () => {
  it('has unique destination titles with real descriptions', () => {
    const titles = nairobiDestinations.map((d) => d.title);
    expect(new Set(titles).size).toBe(titles.length);
    nairobiDestinations.forEach((d) => {
      expect(d.title).toBeTruthy();
      expect(d.description.length).toBeGreaterThan(10);
    });
  });

  it('has complete and unique Nairobi safari packages', () => {
    const titles = nairobiSafariPackages.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
    nairobiSafariPackages.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.duration).toBeTruthy();
      expect(p.price).toMatch(/\$/);
      expect(p.slug).toBeTruthy();
      expect(p.image).toMatch(/^\/Photos\//);
      expect(p.overview.length).toBeGreaterThan(50);
      expect(p.itinerary.length).toBeGreaterThan(0);
      expect(p.highlights.length).toBeGreaterThan(0);
      expect(p.includes.length).toBeGreaterThan(0);
    });
  });

  it('has thirteen Nairobi packages to match the UI badge', () => {
    expect(nairobiSafariPackages).toHaveLength(13);
  });

  it('every category package list is non-empty and unique by slug', () => {
    allCategoryLists.forEach((list) => {
      expect(list.length).toBeGreaterThan(0);
      const slugs = list.map((p) => p.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  it('every package across all categories has all required fields', () => {
    allPackages.forEach((p) => {
      requiredFields.forEach((field) => {
        expect(p[field], `${p.title} missing ${field}`).toBeTruthy();
      });
    });
  });

  it('all package slugs are unique across the entire dataset', () => {
    const slugs = allPackages.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('every slug is URL-safe (lowercase, hyphenated, no spaces)', () => {
    allPackages.forEach((p) => {
      expect(p.slug, p.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    });
  });

  it('every package image file exists in public/Photos', () => {
    const photosDir = path.join(process.cwd(), 'public', 'Photos');
    allPackages.forEach((p) => {
      const fileName = path.basename(p.image);
      expect(fs.existsSync(path.join(photosDir, fileName)), `Missing image ${p.image}`).toBe(true);
    });
  });

  it('every package has a day-by-day itinerary with activities', () => {
    allPackages.forEach((p) => {
      expect(p.itinerary.length).toBeGreaterThan(0);
      p.itinerary.forEach((day, i) => {
        expect(day.day).toBe(i + 1);
        expect(day.title).toBeTruthy();
        expect(day.description.length).toBeGreaterThan(40);
        expect(day.mainActivity).toBeTruthy();
      });
    });
  });

  it('shared packages use the same slug across categories', () => {
    const sharedTitles = [
      '3-Day Masai Mara Join-In Safari with a Landcruiser',
      '3 Days 2 Nights Amboseli Safari',
      '2 Days 1 Night Amboseli National Park Safari',
      '4 Days 3 Nights Safari Samburu & Ol Pejeta Conservancy',
      '3 Days 2 Nights Masai Mara Safari',
    ];

    sharedTitles.forEach((title) => {
      const nairobiMatch = nairobiSafariPackages.find((p) => p.title === title);
      const budgetMatch = budgetMaraPackages.find((p) => p.title === title);
      expect(nairobiMatch, `${title} missing from Nairobi`).toBeTruthy();
      expect(budgetMatch, `${title} missing from Budget Mara`).toBeTruthy();
      expect(nairobiMatch.slug).toBe(budgetMatch.slug);
    });
  });

  it('getPackageBySlug finds a package and returns null for unknown slugs', () => {
    const pkg = getPackageBySlug('3-days-2-nights-amboseli-safari');
    expect(pkg).toBeTruthy();
    expect(pkg.title).toBe('3 Days 2 Nights Amboseli Safari');
    expect(getPackageBySlug('not-a-real-safari')).toBeNull();
  });

  it('getRelatedPackages returns packages from the same category', () => {
    const pkg = getPackageBySlug('3-days-2-nights-amboseli-safari');
    const related = getRelatedPackages(pkg, 3);
    expect(related.length).toBeLessThanOrEqual(3);
    related.forEach((p) => {
      expect(p.category).toBe(pkg.category);
      expect(p.slug).not.toBe(pkg.slug);
    });
  });

  it('contains no external tour operator links (keshitours discarded)', () => {
    const source = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'safaris.js'), 'utf8');
    expect(source).not.toMatch(/keshitours|href/);
  });
});