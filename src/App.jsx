import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import NairobiSafariPage from './pages/NairobiSafariPage';
import CoastalSafariPage from './pages/CoastalSafariPage';
import FlyInSafariPage from './pages/FlyInSafariPage';
import BeachSafariPage from './pages/BeachSafariPage';
import BudgetMaraPage from './pages/BudgetMaraPage';

const pageMap = {
  home: <Home />,
  'nairobi-safari': <NairobiSafariPage />,
  'coastal-safari': <CoastalSafariPage />,
  'fly-in-safari': <FlyInSafariPage />,
  'beach-safari': <BeachSafariPage />,
  'budget-mara': <BudgetMaraPage />,
  about: <Home />,
};

function App() {
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '').trim();
    return hash || 'home';
  });

  useEffect(() => {
    const updatePage = () => {
      const hash = window.location.hash.replace('#', '').trim();
      setActivePage(hash || 'home');
    };

    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  return pageMap[activePage] || <Home />;
}

export default App;
