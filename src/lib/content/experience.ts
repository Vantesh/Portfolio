import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'Work Experience',
  experiences: [
    {
      company: 'Freelancer',
      companyUrl: '#',
      role: 'Python Developer',
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
      role: 'Software Engineering intern',
      started: 'june 2023',
      upto: 'september 2023',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Worked with the backend team to integrate frontend and backend services.',
        'Implemented data validation and error handling on the frontend.',
        'Collaborated with UX/UI designers to implement user-friendly interfaces.',
        'Debugged and fixed issues reported by users and performed code reviews.',
        'Participated in Agile development process and attended weekly stand-up meetings.',
        'Contributed to the improvement of development processes and best practices.',
        'Continuously learned and stayed updated on new frontend technologies and frameworks.',
      ],
    },
    {
      company: 'Lavington H&S',
      companyUrl: '##',
      role: 'IT & Tech Support intern',
      started: 'june 2022',
      upto: 'september 2022',
      tasks: [
        'Developed and maintained the company website using WordPress.',
        'Provided technical support to employees and resolved IT-related issues.',
        'Assisted in the setup and configuration of computer systems and software.',
        'Performed routine maintenance tasks, such as system updates and backups.',
        'Assisted in the management of network infrastructure and troubleshooting network issues.',
        'Documented IT processes and procedures for future reference.',
        'Collaborated with team members on various IT projects and initiatives.',
        'Continuously learned and stayed updated on new technologies and industry trends.',
      ],
    },
  ],
};
