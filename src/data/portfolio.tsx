import type { ReactNode } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import mcmasterLogo from '../../assets/mcmaster_logo.svg';
import prodigyLogo from '../../assets/prodigyedu_logo.jpeg';
import robinhoodLogo from '../../assets/robinhood_logo.jpeg';
import stripeLogo from '../../assets/stripe_logo.jpeg';

export type Experience = {
  company: string;
  roles: { title: string; period: string }[];
  location: string;
  logo: string;
};
export type SocialLinkData = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

export type SectionData = {
  id: string;
  headingId: string;
  number: string;
  label: string;
};

export type ResumeCardData = {
  kind: 'experience' | 'education';
  title: string;
  location: string;
  logo: string;
  logoAlt: string;
  logoBackground: string;
  logoObjectFit: 'cover' | 'contain';
  logoOffsetY?: number;
  logoSize?: number;
  logoRadius?: number;
  cardPadding?: { mobile: number; wide: number };
  entries: { title: string; period: string }[];
};

export const site = {
  topId: 'top',
  name: 'Ren de la Cruz',
  initials: 'R',
  hero: {
    headingId: 'hero-title',
    greeting: 'Hi, I’m',
    name: 'Ren.',
    location: 'Toronto, Canada',
    title: 'Full-Stack Software Engineer',
    mountainAlt: 'Mountain landscape',
    profileAlt: 'Ren de la Cruz',
    scrollLabel: 'Scroll to explore',
  },
  navigation: {
    id: 'primary-nav',
    label: 'Primary navigation',
    openLabel: 'Open navigation',
    closeLabel: 'Close navigation',
    links: [
      ['experience', 'Experience'],
      ['education', 'Education'],
      ['work', 'Projects'],
      ['contact', 'Contact'],
    ],
  },
  footer: {
    backToTop: 'Back to top',
  },
};

export const sections: Record<string, SectionData> = {
  experience: {
    id: 'experience',
    headingId: 'experience-title',
    number: '01',
    label: 'Experience',
  },
  education: {
    id: 'education',
    headingId: 'education-title',
    number: '02',
    label: 'Education',
  },
  projects: {
    id: 'work',
    headingId: 'work-title',
    number: '03',
    label: 'Projects',
  },
  contact: {
    id: 'contact',
    headingId: 'contact-title',
    number: '04',
    label: 'Contact',
  },
};

export const experiences: Experience[] = [
  {
    company: 'Stripe',
    roles: [{ title: 'Software Engineer', period: 'Apr 2026 — Present' }],
    location: 'Toronto, Ontario, Canada',
    logo: stripeLogo,
  },
  {
    company: 'Robinhood',
    roles: [{ title: 'Software Engineer', period: 'Jan 2025 — Apr 2026' }],
    location: 'Toronto, Ontario, Canada',
    logo: robinhoodLogo,
  },
  {
    company: 'Prodigy Education',
    roles: [
      {
        title: 'Full Stack Software Developer II',
        period: 'Jan 2024 — Dec 2024',
      },
      {
        title: 'Full Stack Software Developer I',
        period: 'Sep 2022 — Dec 2023',
      },
      {
        title: 'Backend Software Developer Co-op',
        period: 'May 2021 — Aug 2022',
      },
    ],
    location: 'Toronto, Ontario, Canada',
    logo: prodigyLogo,
  },
];

export const socialLinks: SocialLinkData[] = [
  {
    label: 'linkedin.com/in/rendelacruz',
    href: 'https://www.linkedin.com/in/rendelacruz',
    icon: <FaLinkedinIn />,
  },
  {
    label: 'ren_delacruz@outlook.com',
    href: 'mailto:ren_delacruz@outlook.com',
    icon: <FaEnvelope />,
    external: false,
  },
  {
    label: 'github.com/RenDelaCruz',
    href: 'https://github.com/RenDelaCruz',
    icon: <FaGithub />,
  },
];

export const education = {
  school: 'McMaster University',
  degree: 'Bachelor of Computer Science',
  period: '2018 — 2023',
  location: 'Hamilton, Canada',
  logo: mcmasterLogo,
};

export const resumeCards: ResumeCardData[] = [
  ...experiences.map((item) => ({
    kind: 'experience' as const,
    title: item.company,
    location: item.location,
    logo: item.logo,
    logoAlt: `${item.company} logo`,
    logoBackground: 'rgba(255,255,255,.1)',
    logoObjectFit: 'cover' as const,
    entries: item.roles,
  })),
  {
    kind: 'education' as const,
    title: education.school,
    location: education.location,
    logo: education.logo,
    logoAlt: `${education.school} logo`,
    logoBackground: 'white',
    logoObjectFit: 'contain',
    logoOffsetY: -2,
    logoSize: 56,
    logoRadius: 12,
    cardPadding: { mobile: 20, wide: 32 },
    entries: [{ title: education.degree, period: education.period }],
  },
];

export const experienceCards = resumeCards.filter(
  (item) => item.kind === 'experience'
);
export const educationCards = resumeCards.filter(
  (item) => item.kind === 'education'
);

export const project = {
  eyebrow: 'Project / 01',
  name: 'Handscribe',
  description:
    'An AI-powered ASL alphabet translator built with a custom multilayer perceptron. Practice live fingerspelling through your camera.',
  tags: ['Machine learning', 'Computer vision', 'Python'],
  repository: 'https://github.com/RenDelaCruz/handscribe',
};
