import { ContactSection } from './components/ContactSection';
import {
  experienceCards,
  educationCards,
  sections,
  site,
} from './data/portfolio';
import { GlobalStyles } from './components/GlobalStyles';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { ResumeSection } from './components/ResumeSection';

function App() {
  return (
    <>
      <GlobalStyles />
      <SiteHeader />
      <main id={site.topId}>
        <Hero />
        <ResumeSection section={sections.experience} items={experienceCards} />
        <ResumeSection section={sections.education} items={educationCards} />
        <ProjectSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
