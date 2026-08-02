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
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '.16em',
      }}
    >
      <span style={{ color: '#71857e' }}>{section.number}</span>
      {section.label}
      <i style={{ height: 1, width: 36, background: 'rgba(196,244,198,.6)' }} />
    </p>
  );
}
