import { FaArrowDown } from 'react-icons/fa';
import mountainImage from '../../assets/annapurna-optimized.jpg';
import profileImage from '../../assets/profile-optimized.jpg';
import { sections, site, socialLinks } from '../data/portfolio';
import { colors, css, mono, useMediaQuery } from '../styles';
import { SocialLink } from './SocialLink';

export function Hero() {
  const row = useMediaQuery('(min-width: 480px)');
  const small = useMediaQuery('(min-width: 640px)');
  const medium = useMediaQuery('(min-width: 768px)');
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '100svh',
        minHeight: '100svh',
        width: '100vw',
        overflow: 'visible',
        paddingTop: 96,
      }}
    >
      <style>
        {css`
          @keyframes pulse {
            50% {
              box-shadow: 0 0 0 8px rgba(196, 244, 198, 0.03);
            }
          }
          @keyframes photo-zoom-in {
            from {
              transform: scale(1.05);
            }
            to {
              transform: scale(1.28);
            }
          }
          @keyframes hero-pop {
            from {
              opacity: 0;
              transform: translateY(18px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @supports (animation-timeline: scroll()) {
            [data-photo-parallax] {
              animation: photo-zoom-in linear both;
              animation-timeline: scroll(root);
              animation-range: 0% 100%;
            }
          }
          @supports (height: 100dvh) {
            [data-hero] {
              height: 100dvh !important;
              min-height: 100dvh !important;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            [data-photo-parallax] {
              animation: none !important;
              transform: scale(1.05) !important;
            }
          }
        `}
      </style>
      <div
        data-photo-parallax
        role="img"
        aria-label={site.hero.mountainAlt}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 0,
          overflow: 'hidden',
          boxShadow: 'none',
          backgroundImage: css`url(${mountainImage})`,
          backgroundPosition: '58% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        data-hero-content
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: row ? 'row' : 'column',
          alignItems: 'center',
          gap: row ? 32 : 24,
          width: 'calc(100% - 4rem)',
          maxWidth: 1152,
          margin: '0 auto',
          animation: reduced
            ? 'none'
            : 'hero-pop 1.4s cubic-bezier(.22, 1, .36, 1) both',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: medium ? 208 : small ? 176 : row ? 128 : 112,
            aspectRatio: '1',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              border: '1px solid rgba(225,255,228,.7)',
              borderRadius: '50%',
              background: '#172d29',
              boxShadow: '0 18px 40px rgba(0,0,0,.4)',
            }}
          >
            <img
              src={profileImage}
              alt={site.hero.profileAlt}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                filter: 'saturate(.88) contrast(1.04)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                inset: 0,
                background: css`linear-gradient(145deg, rgba(196,244,198,.2), transparent 35%, rgba(3,13,17,.28))`,
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.72)',
          }}
        >
          <p
            style={{
              ...mono,
              display: 'flex',
              justifyContent: row ? 'flex-start' : 'center',
              alignItems: 'center',
              gap: 8,
              margin: '0 0 20px',
              color: colors.mint,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '.16em',
              textShadow: '0 2px 18px rgba(0, 0, 0, 0.95)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: colors.mint,
                boxShadow: '0 0 0 5px rgba(196,244,198,.12)',
                animation: reduced ? 'none' : 'pulse 2.2s ease-in-out infinite',
              }}
            />
            {site.hero.location}
          </p>
          <h1
            id={site.hero.headingId}
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: row ? 'flex-start' : 'center',
              width: '100%',
              color: colors.text,
              textAlign: row ? 'left' : 'center',
              fontSize: 'clamp(5rem, 14vw, 9.5rem)',
              fontWeight: 700,
              lineHeight: '.82',
              letterSpacing: small ? '-.1em' : 'normal',
            }}
          >
            <span
              style={{
                display: 'block',
                margin: 0,
                padding: 0,
                textIndent: 0,
                fontSize: '.4em',
                lineHeight: 1.2,
                letterSpacing: '-.07em',
              }}
            >
              {site.hero.greeting}
            </span>
            <span
              style={{
                display: 'block',
                margin: 0,
                padding: 0,
                textIndent: '-0.04em',
                color: colors.mint,
                textAlign: row ? 'left' : 'center',
                letterSpacing: small ? '-.04em' : '-.02em',
                fontWeight: 700,
              }}
            >
              {site.hero.name}
            </span>
          </h1>
          <p
            style={{
              margin: '20px 0 0',
              paddingLeft: 0,
              color: colors.body,
              textAlign: row ? 'left' : 'center',
              fontSize: small ? 24 : 18,
              letterSpacing: '-.025em',
            }}
          >
            {site.hero.title}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: row ? 'flex-start' : 'center',
              alignItems: 'center',
              gap: 10,
              marginTop: 28,
            }}
          >
            {socialLinks.map((link) => (
              <SocialLink key={link.label} link={link} iconOnly />
            ))}
          </div>
        </div>
      </div>
      <a
        href={`#${sections.experience.id}`}
        style={{
          ...mono,
          position: 'absolute',
          bottom: 24,
          left: small ? 'max(2rem, calc((100vw - 72rem) / 2))' : 32,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          color: '#d1dfd7',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '.13em',
          textDecoration: 'none',
          textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
        }}
      >
        <span>{site.hero.scrollLabel}</span>
        <i
          style={{
            display: 'grid',
            placeItems: 'center',
            width: 28,
            height: 28,
            border: '1px solid rgba(255,255,255,.3)',
            borderRadius: '50%',
            color: colors.mint,
            fontStyle: 'normal',
          }}
        >
          <FaArrowDown aria-hidden="true" />
        </i>
      </a>
    </section>
  );
}
