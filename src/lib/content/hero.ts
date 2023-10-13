import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Victor Muthiani.',
  tagline: 'I Build innovative solutions for the web.',
  description:
    "I'm a software engineering student based in Nairobi, Kenya who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
