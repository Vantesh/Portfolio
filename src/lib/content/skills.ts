import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Learning backend development using Django',
        'Building Python RESTful APIs using Flask',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'Linux', icon: 'logos:linux-tux' },
        { name: 'python', icon: 'logos:python' },
        { name: 'Bash', icon: 'logos:bash-icon' },
        { name: 'javaScript', icon: 'skill-icons:javascript' },
        {
          name: 'typeScript',
          icon: 'logos:typescript-icon-round',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'React', icon: 'logos:react' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'CLI', icon: 'devicon:powershell' },
      ],
    },
    {
      id: getId(),
      title: 'Cloud Computing & Networking',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience of working on multiple cloud platforms',
        'Experience of using AWS services like EC2, S3, Route 53, CloudFront, etc.',
        'Building CI/CD pipelines for automated testing & deployment using Github Actions',
        'Experience of working with databases like MySQL, PostgreSQL, MongoDB, etc.',
      ],
      softwareSkills: [
        { name: 'AWS', icon: 'fontisto:aws' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Heroku', icon: 'devicon-plain:heroku' },
        { name: 'Netlify', icon: 'vscode-icons:file-type-light-netlify' },
        { name: 'Vercel', icon: 'logos:vercel-icon' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'Github actions', icon: 'logos:github-actions' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'Github', icon: 'cib:github' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Gitlab', icon: 'devicon:gitlab' },
        { name: 'Nginx', icon: 'logos:nginx' },
      ],
    },
  ],
};
