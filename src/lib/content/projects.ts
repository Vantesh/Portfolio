import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'One Dark Sweet',
      url: 'https://marketplace.visualstudio.com/items?itemName=Vantesh.one-dark-sweet',
      repo: 'https://github.com/vantesh/one-dark-sweet',
      img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/121645908/274759596-896cb003-78b7-469a-a0d6-061f0af7a265.png',
      year: 2023,
      tags: ['VScode', 'Themes', 'One Dark'],
    },
    {
      id: getId(),
      name: 'Apple Emoji for linux',
      url: 'https://github.com/Vantesh/Apple-Emoji',
      repo: 'https://github.com/Vantesh/Apple-Emoji',
      img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/121645908/274759842-3613c363-19d8-499d-91db-6028c8d89c8e.png',
      year: 2023,
      tags: ['Apple', 'IOS', 'Linux'],
    },
    {
      id: getId(),
      name: 'rock paper scissors',
      url: 'https://rock-paper-scissors-js-phi.vercel.app/',
      repo: 'https://rock-paper-scissors-js-phi.vercel.app/',
      img: 'https://user-images.githubusercontent.com/121645908/274758121-93cd7766-ed7c-43b6-929a-ec43e106e98a.png',
      year: 2022,
      tags: ['Javascript', 'HTML', 'CSS'],
    },
  ],
};
