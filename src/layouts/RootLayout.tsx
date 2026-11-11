import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import Header from '../components/Header';
import A11yBar from '../components/A11yBar';
import Footer from '../components/Footer';

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)', color: 'var(--ink)' }}>
      <Header />
      <A11yBar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
