import { useState } from 'react';
import { NavLink } from 'react-router';
import { NAV_LINKS } from '../data';
import logoRaioX from '../imports/RAIO.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--card)', borderBottom: '2px solid var(--line)' }}>
      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '0.9rem 1.25rem' }}>

        <NavLink to="/" aria-label="Raio-X do Golpe — Página inicial" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} className="header-brand">
          <span className="header-logo">
            <img src={logoRaioX} alt="Raio-X do Golpe" />
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="desktop-nav" style={{ gap: '0.15rem', flexWrap: 'wrap' }}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobileNav"
          className="mobile-menu-btn btn btn-outline"
          style={{ minHeight: '52px', padding: '0.5rem 1.1rem', fontSize: '1rem' }}
        >
          {mobileOpen ? '✕ Fechar' : '☰ Menu'}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div id="mobileNav" role="navigation" aria-label="Menu mobile" style={{ borderTop: '2px solid var(--line)', background: 'var(--card)' }}>
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                textDecoration: 'none',
                color: isActive ? 'var(--trust-dark)' : 'var(--ink)',
                borderBottom: '1px solid var(--line)',
                fontSize: '1.05rem',
                fontWeight: 700,
                minHeight: '62px',
                background: isActive ? 'var(--trust-light)' : 'transparent',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
