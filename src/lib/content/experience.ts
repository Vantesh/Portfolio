import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'Work Experience',
  experiences: [
    {
      company: 'Freelancer',
      companyUrl: '#',
      role: 'Python developer',
      started: 'september 2023',
      upto: 'present',
      tasks: [
        'learn Django and Flask',
        'Create a command-line tool that converts a CSV file to a JSON file.',
        'Build a RESTful API using Flask and test it using Postman.',
        'Develop a simple Django web application that allows users to create, read, update, and delete data from a database.',
      ],
    },
    {
      company: 'Nairobi GOVT',
      companyUrl: 'https://nairobi.go.ke/',
      role: 'frontend developer intern',
      started: 'june 2023',
      upto: 'september 2023',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Developed and maintained design systems that separates design logic.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'Lavington H&S',
      companyUrl: '##',
      role: 'IT intern',
      started: 'june 2022',
      upto: 'september 2022',
      tasks: [
        'Developed and maintained the company website using WordPress.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
      ],
    },
  ],
};
