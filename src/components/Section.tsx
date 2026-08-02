import type { CSSProperties, ReactNode } from 'react';
import { useMediaQuery } from '../styles';

type SectionProps = {
  id: string;
  labelledBy?: string;
  children: ReactNode;
  style?: CSSProperties;
};

export function Section({ id, labelledBy, children, style }: SectionProps) {
  const wide = useMediaQuery('(min-width: 640px)');
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      style={{
        position: 'relative',
        zIndex: 1,
        margin: '0 auto',
        width: 'calc(100% - 4rem)',
        maxWidth: 1152,
        scrollMarginTop: 96,
        padding: wide ? '128px 0' : '80px 0',
        ...style,
      }}
    >
      {children}
    </section>
  );
}
