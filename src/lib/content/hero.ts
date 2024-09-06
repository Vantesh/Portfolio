import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, my name is',
  title: 'Victor Muthiani.',
  tagline: 'I build things for the web & beyond.',
  description:
    "I'm a software engineer based in Nairobi, Kenya who has specialized in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
