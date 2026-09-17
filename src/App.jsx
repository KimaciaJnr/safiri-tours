import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import NairobiSafariPage from './pages/NairobiSafariPage';
import CoastalSafariPage from './pages/CoastalSafariPage';
import FlyInSafariPage from './pages/FlyInSafariPage';
import BeachSafariPage from './pages/BeachSafariPage';
import BudgetMaraPage from './pages/BudgetMaraPage';
import SafariDetailPage from './pages/SafariDetailPage';
import BookingPage from './pages/BookingPage';
import { getPackageBySlug } from './data/safaris';

const pageMap = {
  home: <Home />,
  about: <AboutPage />,
  'nairobi-safari': <NairobiSafariPage />,
  'coastal-safari': <CoastalSafariPage />,
  'fly-in-safari': <FlyInSafariPage />,
  'beach-safari': <BeachSafariPage />,
  'budget-mara': <BudgetMaraPage />,
};

const homeSections = ['safari-guide', 'inquiry'];

const pageTitles = {
  home: 'Safiri Expedition Tours | Kenya Safaris, Group Tours & Road Trips',
  about: 'About Us | Safiri Expedition Tours',
  'nairobi-safari': 'Kenya Safaris from Nairobi | Safiri Expedition Tours',
  'coastal-safari': 'Kenya Safaris from the Coast | Safiri Expedition Tours',
  'fly-in-safari': 'Kenya Fly-In Safaris | Safiri Expedition Tours',
  'beach-safari': 'Kenya Beach Safaris | Safiri Expedition Tours',
  'budget-mara': 'Budget Maasai Mara Deals | Safiri Expedition Tours',
};

function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleSamePageNavigation = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const hrefHash = link.getAttribute('href');
      if (!hrefHash || hrefHash !== window.location.hash) return;

      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'auto' });
      document.getElementById('main')?.focus({ preventScroll: true });
    };

    document.addEventListener('click', handleSamePageNavigation);
    return () => document.removeEventListener('click', handleSamePageNavigation);
  }, []);

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const rawKey = hash.replace('#', '').trim();
  const [key, query] = rawKey.split('?');
  const isSection = homeSections.includes(key);
  const isSafariDetail = key.startsWith('safari/');
  const isBooking = key === 'booking';
  const pageKey = pageMap[key] && !isSection && !isSafariDetail ? key : 'home';

  const safariSlug = isSafariDetail ? key.replace('safari/', '') : null;
  const safariPkg = safariSlug ? getPackageBySlug(safariSlug) : null;
  const bookingPackage = isBooking ? new URLSearchParams(query).get('package') || '' : '';

  useEffect(() => {
    if (isSafariDetail && safariPkg) {
      document.title = `${safariPkg.title} | Safiri Expedition Tours`;
    } else if (isBooking) {
      document.title = 'Book Your Safari | Safiri Expedition Tours';
    } else {
      document.title = pageTitles[pageKey] || pageTitles.home;
    }
  }, [pageKey, isSafariDetail, safariPkg, isBooking]);

  useEffect(() => {
    if (isSection) {
      const el = document.getElementById(key);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      return;
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      const main = document.getElementById('main');
      if (main) main.focus({ preventScroll: true });
    });
  }, [key, isSection]);

  if (isSection) return <Home key={query || key} />;
  if (isSafariDetail) return <SafariDetailPage slug={key.replace('safari/', '')} />;
  if (isBooking) return <BookingPage packageTitle={bookingPackage} />;
  return pageMap[key] || <Home />;
}

export default App;
