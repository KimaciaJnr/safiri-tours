import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import NairobiSafariPage from './NairobiSafariPage';
import CoastalSafariPage from './CoastalSafariPage';
import FlyInSafariPage from './FlyInSafariPage';
import BeachSafariPage from './BeachSafariPage';
import BudgetMaraPage from './BudgetMaraPage';
import Home from './Home';
import AboutPage from './AboutPage';
import SafariDetailPage from './SafariDetailPage';

const pages = [
  { name: 'Home', Component: Home, heading: /The journey is/i },
  { name: 'About', Component: AboutPage, heading: 'About Safiri Expedition Tours' },
  { name: 'Nairobi', Component: NairobiSafariPage, heading: /Nairobi safari packages/i },
  { name: 'Coastal', Component: CoastalSafariPage, heading: 'Coastal Safari' },
  { name: 'Fly-In', Component: FlyInSafariPage, heading: 'Fly-In Safari' },
  { name: 'Beach', Component: BeachSafariPage, heading: 'Beach & Safari' },
  { name: 'Budget Mara', Component: BudgetMaraPage, heading: 'Budget Mara' },
];

describe('page smoke tests', () => {
  afterEach(() => cleanup());

  pages.forEach(({ name, Component, heading }) => {
    it(`renders ${name} without crashing`, () => {
      render(<Component />);
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
    });
  });

  it('Nairobi page renders all 13 safari packages', () => {
    render(<NairobiSafariPage />);
    expect(screen.getAllByRole('link', { name: /View details/i })).toHaveLength(13);
  });

  it('SafariDetailPage renders the package content for a valid slug', () => {
    render(<SafariDetailPage slug="3-days-2-nights-amboseli-safari" />);
    expect(
      screen.getByRole('heading', { name: /3 Days 2 Nights Amboseli Safari/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Safari Itinerary/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Trip Highlights/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Package Includes/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Package Excludes/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Related Safaris/i })).toBeInTheDocument();
  });

  it('SafariDetailPage shows the not-found message for an unknown slug', () => {
    render(<SafariDetailPage slug="does-not-exist" />);
    expect(screen.getByRole('heading', { name: 'Safari Not Found' })).toBeInTheDocument();
  });
});