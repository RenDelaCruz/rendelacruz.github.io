import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { SocialLinkData } from '../data/portfolio';
import { colors, mono } from '../styles';

type SocialLinkProps = { link: SocialLinkData; iconOnly?: boolean };

export function SocialLink({ link, iconOnly = false }: SocialLinkProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link.href}
      target={link.external === false ? undefined : '_blank'}
      rel={link.external === false ? undefined : 'noreferrer'}
      aria-label={iconOnly ? link.label : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        iconOnly
          ? {
              display: 'grid',
              placeItems: 'center',
              width: 32,
              height: 32,
              border: '1px solid rgba(255,255,255,.25)',
              borderRadius: '50%',
              color: hovered ? colors.mint : '#d0ddd6',
              fontSize: 14,
              textDecoration: 'none',
              transition: 'color .2s ease',
            }
          : {
              ...mono,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: hovered ? colors.mint : '#c5d3ce',
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '.12em',
              textDecoration: 'none',
              transition: 'color .2s ease',
            }
      }
    >
      {iconOnly ? (
        link.icon
      ) : (
        <span
          style={{
            display: 'grid',
            placeItems: 'center',
            width: 24,
            height: 24,
            border: '1px solid rgba(255,255,255,.2)',
            borderRadius: '50%',
            color: colors.mint,
            fontSize: 11,
          }}
        >
          {link.icon}
        </span>
      )}
      {!iconOnly && link.label}
      {!iconOnly && (
        <span aria-hidden="true" style={{ marginLeft: 4, color: colors.mint }}>
          <FaExternalLinkAlt aria-hidden="true" />
        </span>
      )}
    </a>
  );
}
