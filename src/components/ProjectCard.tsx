import { FaGithub } from 'react-icons/fa';
import { project, sections } from '../data/portfolio';
import { colors, mono, useMediaQuery } from '../styles';
import { GlassCard } from './GlassCard';
import { SocialLink } from './SocialLink';

export function ProjectCard() {
  const wide = useMediaQuery('(min-width: 640px)');
  return (
    <GlassCard style={{ padding: wide ? 48 : 28 }}>
      <div id={sections.projects.headingId}>
        <p
          style={{
            ...mono,
            margin: '0 0 24px',
            color: '#89a198',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '.14em',
          }}
        >
          {project.eyebrow}
        </p>
        <h3
          style={{
            margin: '0 0 16px',
            color: colors.text,
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: '-.08em',
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            maxWidth: 672,
            margin: 0,
            color: '#b5c4be',
            fontSize: 14,
            lineHeight: 2,
          }}
        >
          {project.description}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            margin: '28px 0',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                ...mono,
                padding: '8px 12px',
                border: '1px solid rgba(255,255,255,.15)',
                borderRadius: 999,
                color: colors.mint,
                fontSize: 9,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <SocialLink
          link={{
            label: 'View repository',
            href: project.repository,
            icon: <FaGithub />,
          }}
        />
      </div>
    </GlassCard>
  );
}
