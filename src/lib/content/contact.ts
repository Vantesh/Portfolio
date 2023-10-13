import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'Contact me',
  subtitle: "Let's work together!",
  paragraphs: [
    'I am always open to discussing product design work or partnership opportunities.',
    'If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.',
  ],
  link: `mailto:${author.email}`,
};
