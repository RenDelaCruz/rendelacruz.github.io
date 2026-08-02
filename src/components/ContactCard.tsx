import { sections, socialLinks } from '../data/portfolio';
import { useMediaQuery } from '../styles';
import { GlassCard } from './GlassCard';
import { SocialLink } from './SocialLink';

export function ContactCard() {
  const wide = useMediaQuery('(min-width: 640px)');
  return (
    <GlassCard style={{ padding: wide ? 32 : 24 }}>
      <div
        id={sections.contact.headingId}
        style={{
          display: 'flex',
          flexDirection: wide ? 'row' : 'column',
          alignItems: wide ? 'center' : 'stretch',
          gap: wide ? 32 : 20,
        }}
      >
        {socialLinks.map((link) => (
          <SocialLink key={link.label} link={link} />
        ))}
      </div>
    </GlassCard>
  );
}
