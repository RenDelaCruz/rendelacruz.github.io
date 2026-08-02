import { ContactCard } from './ContactCard';
import { Section } from './Section';
import { sections } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function ContactSection() {
  return (
    <Section id={sections.contact.id} labelledBy={sections.contact.headingId}>
      <SectionLabel section={sections.contact} />
      <ContactCard />
    </Section>
  );
}
