import type { ResumeCardData } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { colors, mono, useMediaQuery } from '../styles';

export function ResumeCard({ item }: { item: ResumeCardData }) {
  const wide = useMediaQuery('(min-width: 640px)');
  return (
    <GlassCard style={{ padding: wide ? 28 : 20 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: wide ? 24 : 16,
        }}
      >
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            width: wide ? 48 : 40,
            height: wide ? 48 : 40,
            flexShrink: 0,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,.15)',
            borderRadius: 8,
            background: 'rgba(255,255,255,.1)',
          }}
        >
          <img
            loading="lazy"
            decoding="async"
            src={item.logo}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: wide ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: wide ? 'baseline' : 'stretch',
              gap: 4,
            }}
          >
            <h3
              style={{
                margin: 0,
                color: 'white',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '-.025em',
              }}
            >
              {item.title}
            </h3>
            <p style={{ margin: 0, color: '#b7c8be', fontSize: 12 }}>
              {item.location}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: wide ? 8 : 12,
              marginTop: wide ? 12 : 20,
            }}
          >
            {item.entries.map((entry) => (
              <div
                key={`${entry.title}-${entry.period}`}
                style={{
                  display: 'flex',
                  flexDirection: wide ? 'row' : 'column',
                  justifyContent: 'space-between',
                  alignItems: wide ? 'baseline' : 'stretch',
                  gap: 4,
                }}
              >
                <p style={{ margin: 0, color: '#d6e2db', fontWeight: 500 }}>
                  {entry.title}
                </p>
                <span style={{ ...mono, color: colors.mint, fontSize: 12 }}>
                  {entry.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
