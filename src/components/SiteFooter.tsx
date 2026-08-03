import { FaArrowUp } from 'react-icons/fa';
import { site } from '../data/portfolio';
import { mono, useMediaQuery } from '../styles';

export function SiteFooter() {
  const wide = useMediaQuery('(min-width: 640px)');
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        minHeight: 96,
        width: 'calc(100% - 4rem)',
        maxWidth: 1152,
        margin: '0 auto',
        borderTop: '1px solid rgba(255,255,255,.15)',
        padding: wide ? 0 : '28px 0',
        ...mono,
        color: '#71817d',
        fontSize: 10,
      }}
    >
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <a
        href={`#${site.topId}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          color: '#a6b8b0',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {site.footer.backToTop}{' '}
        <FaArrowUp aria-hidden="true" style={{ display: 'block' }} />
      </a>
    </footer>
  );
}
