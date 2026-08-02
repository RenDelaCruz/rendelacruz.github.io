import { useState, type CSSProperties } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { site } from '../data/portfolio';
import { colors, glass, mono, useMediaQuery } from '../styles';

const links = site.navigation.links;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const desktop = useMediaQuery('(min-width: 768px)');
  const navStyle: CSSProperties = desktop
    ? {
        position: 'static',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 28,
        border: 0,
        background: 'transparent',
        padding: 0,
      }
    : {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 68,
        display: menuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: 4,
        border: '1px solid rgba(255,255,255,.15)',
        borderRadius: 12,
        background: '#091a1cf5',
        padding: 8,
      };
  return (
    <header
      style={{
        ...glass,
        position: 'fixed',
        zIndex: 20,
        top: desktop ? 24 : 16,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        width: 'calc(100% - 4rem)',
        maxWidth: 1152,
        height: desktop ? 64 : 56,
        padding: desktop ? '0 20px' : '0 16px',
        borderRadius: 12,
      }}
    >
      <a
        href={`#${site.topId}`}
        onClick={() => setMenuOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: colors.text,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '-.025em',
          textDecoration: 'none',
        }}
      >
        <span
          style={{
            ...mono,
            display: 'grid',
            placeItems: 'center',
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: colors.mint,
            color: '#10241c',
            fontSize: 12,
            lineHeight: 1,
          }}
        >
          {site.initials}
        </span>
        {site.name}
      </a>
      {!desktop && (
        <button
          style={{
            ...mono,
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: 0,
            background: 'transparent',
            color: colors.muted,
            fontSize: 10,
            textTransform: 'uppercase',
          }}
          aria-expanded={menuOpen}
          aria-controls={site.navigation.id}
          aria-label={
            menuOpen ? site.navigation.closeLabel : site.navigation.openLabel
          }
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes
              aria-hidden="true"
              style={{
                color: colors.mint,
                fontSize: 16,
                transform: 'rotate(90deg)',
                transition: 'transform .2s ease',
              }}
            />
          ) : (
            <FaBars
              aria-hidden="true"
              style={{ color: colors.mint, fontSize: 16 }}
            />
          )}
        </button>
      )}
      <nav
        id={site.navigation.id}
        aria-label={site.navigation.label}
        style={navStyle}
      >
        {links.map(([href, label]) => (
          <a
            key={href}
            href={`#${href}`}
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setHoveredLink(href)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              ...mono,
              padding: desktop ? 0 : '12px',
              color: hoveredLink === href ? colors.text : colors.muted,
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '.1em',
              textDecoration: 'none',
              transition: 'color .2s ease',
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
