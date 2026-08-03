import { useEffect, useState, type CSSProperties } from 'react';

export function css(
  strings: TemplateStringsArray,
  ...values: Array<string | number>
) {
  return strings.reduce(
    (result, string, index) => `${result}${string}${values[index] ?? ''}`,
    ''
  );
}

export const colors = {
  background: '#16292a',
  text: '#edf5f0',
  mint: '#c4f4c6',
  muted: '#a6b8b0',
  body: '#e0ebe4',
} as const;

export const mono: CSSProperties = { fontFamily: "'DM Mono', monospace" };

export const glass: CSSProperties = {
  background: css`linear-gradient(135deg, rgba(12, 30, 32, 0.62), rgba(16, 38, 39, 0.42))`,
  border: '1px solid rgba(235, 255, 239, 0.28)',
  boxShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 18px 45px rgba(0, 0, 0, 0.24)',
  backdropFilter: 'blur(8px) saturate(115%)',
  WebkitBackdropFilter: 'blur(8px) saturate(115%)',
};

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);
  return matches;
};
