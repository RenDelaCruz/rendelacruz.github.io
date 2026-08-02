import type { ResumeCardData, SectionData } from '../data/portfolio';
import { Section } from './Section';
import { SectionLabel } from './SectionLabel';
import { ResumeCard } from './ResumeCard';

export function ResumeSection({
  section,
  items,
}: {
  section: SectionData;
  items: ResumeCardData[];
}) {
  return (
    <Section id={section.id} labelledBy={section.headingId}>
      <SectionLabel section={section} />
      <div
        id={section.headingId}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        {items.map((item) => (
          <ResumeCard item={item} key={item.title} />
        ))}
      </div>
    </Section>
  );
}
