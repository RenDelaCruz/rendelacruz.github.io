import type { CSSProperties, ReactNode } from 'react';
import { glass } from '../styles';

export function GlassCard({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <div style={{ ...glass, borderRadius: 16, ...style }}>{children}</div>;
}
