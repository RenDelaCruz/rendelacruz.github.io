import type { SectionData } from '../data/portfolio';
import { colors, mono } from '../styles';

export function SectionLabel({ section }: { section: SectionData }) {
  return (
    <p
      style={{
        ...mono,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 24,
        color: colors.mint,
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: '.16em',
        textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
      }}
    >
      <span style={{ color: colors.mint }}>{section.number}</span>
      {section.label}
      <i style={{ height: 1, width: 36, background: 'rgba(196,244,198,.6)' }} />
    </p>
  );
}
