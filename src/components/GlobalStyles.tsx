import { colors, css } from '../styles';
import mountainImage from '../../assets/annapurna-optimized.jpg';

export function GlobalStyles() {
  return (
    <style>{css`
      @keyframes pulse {
        50% {
          box-shadow: 0 0 0 8px rgba(196, 244, 198, 0.03);
        }
      }
      * {
        box-sizing: border-box;
      }
      :root {
        font-family: 'Manrope', sans-serif;
        color: ${colors.text};
        background: ${colors.background};
        font-synthesis: none;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        margin: 0;
        min-width: 320px;
        overflow-x: hidden;
        background-color: ${colors.background};
        background-image: ${css`url(${mountainImage}), linear-gradient(90deg, #6b9994 0%, #98b5a7 100%)`};
        background-position: 58% center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
      a:focus-visible,
      button:focus-visible {
        outline: 2px solid ${colors.mint};
        outline-offset: 5px;
      }
      @media (prefers-reduced-motion: reduce) {
        *,
        html {
          scroll-behavior: auto !important;
          animation: none !important;
          transition: none !important;
        }
      }
    `}</style>
  );
}
