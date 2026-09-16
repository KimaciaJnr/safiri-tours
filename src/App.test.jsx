import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, act, cleanup } from '@testing-library/react';
import App from './App';

const navigateTo = (hash) => {
  window.history.pushState(null, '', `#${hash}`);
  window.dispatchEvent(new Event('hashchange'));
};

describe('App routing', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/');
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    window.history.replaceState(null, '', '/');
  });

  it('renders the Home page by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /The journey is/i })).toBeInTheDocument();
  });

  it('renders Home for an empty hash', () => {
    window.history.replaceState(null, '', '#');
    render(<App />);
    expect(screen.getByRole('heading', { name: /The journey is/i })).toBeInTheDocument();
  });

  it('opens Nairobi category cards to the destination-filtered category page', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /Masai Mara/i })).toHaveAttribute(
      'href', '#nairobi-safari?destination=Masai%20Mara',
    );
  });

  it('renders the Nairobi safari page for #nairobi-safari with a preselected destination', () => {
    window.history.replaceState(null, '', '#nairobi-safari?destination=Masai%20Mara');
    render(<App />);
    expect(screen.getByRole('heading', { name: /Masai Mara safaris/i })).toBeInTheDocument();
  });

  it('routes homepage category cards to destination-filtered category pages', () => {
    render(<App />);

    const expectedLinks = [
      { label: /Masai Mara/i, href: '#nairobi-safari?destination=Masai%20Mara' },
      { label: /Mara Bush Camp/i, href: '#fly-in-safari?destination=Mara%20Bush%20Camp' },
      { label: /Bush & Diani Beach/i, href: '#beach-safari?destination=Bush%20%26%20Diani%20Beach' },
      { label: /Budget Amboseli/i, href: '#budget-mara?destination=Budget%20Amboseli' },
    ];

    expectedLinks.forEach(({ label, href }) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href);
    });
  });

  it('renders the Nairobi safari page for #nairobi-safari', () => {
    window.history.replaceState(null, '', '#nairobi-safari');
    render(<App />);
    expect(screen.getByRole('heading', { name: /Nairobi safari packages/i })).toBeInTheDocument();
  });

  it('renders each safari page for its route hash', () => {
    const cases = [
      { hash: '#coastal-safari', heading: 'Safaris from the Coast' },
      { hash: '#fly-in-safari', heading: 'Fly-In Safaris' },
      { hash: '#beach-safari', heading: 'Bush & Beach Safaris' },
      { hash: '#budget-mara', heading: 'Budget Safaris' },
    ];

    cases.forEach(({ hash, heading }) => {
      window.history.replaceState(null, '', hash);
      cleanup();
      render(<App />);
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
    });
  });

  it('navigates from Home to a safari page via hashchange', async () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /The journey is/i })).toBeInTheDocument();

    act(() => {
      navigateTo('nairobi-safari');
    });

    expect(screen.getByRole('heading', { name: /Nairobi safari packages/i })).toBeInTheDocument();
  });

  it('renders the About page for #about', () => {
    window.history.replaceState(null, '', '#about');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'About Safiri Expedition Tours' })).toBeInTheDocument();
  });

  it('resets to the top for page navigation instead of preserving the old page scroll position', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    render(<App />);

    act(() => {
      navigateTo('about');
    });

    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
  });

  it('renders Home and scrolls to the section for a section hash', () => {
    const scrollSpy = vi.spyOn(Element.prototype, 'scrollIntoView').mockImplementation(() => {});

    window.history.replaceState(null, '', '#inquiry');
    render(<App />);

    expect(screen.getByRole('heading', { name: /The journey is/i })).toBeInTheDocument();
    expect(scrollSpy).toHaveBeenCalled();
  });

  it('falls back to Home for unknown hashes', () => {
    window.history.replaceState(null, '', '#does-not-exist');
    render(<App />);
    expect(screen.getByRole('heading', { name: /The journey is/i })).toBeInTheDocument();
  });

  it('renders a safari detail page for #safari/:slug', () => {
    window.history.replaceState(null, '', '#safari/3-days-2-nights-amboseli-safari');
    render(<App />);
    expect(screen.getByRole('heading', { name: /3 Days 2 Nights Amboseli Safari/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Safari Itinerary/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Trip Highlights/i })).toBeInTheDocument();
  });

  it('renders a not-found message for an unknown safari slug', () => {
    window.history.replaceState(null, '', '#safari/not-a-real-safari');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Safari Not Found' })).toBeInTheDocument();
  });

  it('navigates to a safari detail page via hashchange', () => {
    render(<App />);
    act(() => {
      navigateTo('safari/6-day-amboseli-hells-gate-nakuru-mara');
    });
    expect(screen.getByRole('heading', { name: /6 Day Safari to Amboseli/i })).toBeInTheDocument();
  });
});