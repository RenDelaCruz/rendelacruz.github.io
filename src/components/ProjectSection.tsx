import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { sections } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function ProjectSection() {
  return (
    <Section id={sections.projects.id} labelledBy={sections.projects.headingId}>
      <SectionLabel section={sections.projects} />
      <ProjectCard />
    </Section>
  );
}
