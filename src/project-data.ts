import { StaticImageData } from 'next/image';

import {
  dashboard1,
  dashboard2,
  dashboard3,
  dashboard4,
  dashboard5,
} from '~/images';

import ChardDashboard1 from '~/images/chart-dashboard.png';
import ChardDashboard2 from '~/images/chart-dashboard-2.png';

export type Project = {
  name: string;
  descriptions: string[];
  images: { src: StaticImageData; alt: string }[];
  primaryTechnologies: string[];
  secondaryTechnologies: string[];
  isResponsive?: boolean;
  buttonMetadata: { label: string; href: string }[];
};

export const PROJECT_DATA: Project[] = [
  {
    name: '1. Data Visualisation Dashboard',
    descriptions: [
      'This was the first full feature in Orbis that I was tasked with creating alone. Of course, the other devs at Astrosat were reviewing of my PRs, but the design choices, structure and code was left to my judgement.',
      'The brief was large, and asked for an immense amount of functionality. The client had requested a dashboard capable of rendering charts to visualise data from their servers via various types of charts, and the ability for individual users to input their own target data that would then be overlayed as line charts on top of the histograms.',
      'The user-inputted data also had to be tracked at all times, and persisted to the Orbis database, saving automatically whenever the user left the dashboard if changes had been made. On top of this, the client requested that the data could be exported as an Excel document at any moment, with a single button click.',
      'The biggest challenge in this featue was the data transforming. The data we received from the client was in a fixed data shape, required that data to be tranformed to fit the data shape demanded by the charting library API. This led to the creation of many complex transformer functions.',
    ],
    isResponsive: false,
    images: [
      {
        src: dashboard1,
        alt: 'dashboard-1',
      },
      {
        src: dashboard2,
        alt: 'dashboard-2',
      },
      {
        src: dashboard3,
        alt: 'dashboard-3',
      },
      {
        src: dashboard4,
        alt: 'dashboard-4',
      },
      {
        src: dashboard5,
        alt: 'dashboard-5',
      },
    ],
    primaryTechnologies: [
      'React',
      'TypeScript',
      'Redux',
      'Victory',
      'MSW',
      'React Testing Library',
      'Material UI',
    ],
    secondaryTechnologies: ['React Hook Form', 'Yup'],
    buttonMetadata: [
      {
        label: 'Deployment',
        href: 'https://data-visualisation-dashboard-kohl.vercel.app/',
      },
      {
        label: 'Code',
        href: 'https://github.com/RoryMacGregor88/victory-dashboard-app',
      },
    ],
  },
  // {
  //   name: '2. Functional Player',
  //   descriptions: [
  //     `This is a long-lived training project that I've maintained for several years. It was initially created as a playground to learn more about the primaryTechnologies used as Astrosat, but quickly grew into a fully-realised production app.`,
  //     'It has since been deployed to production and testing environments, has full authentication, authorization, server-side sessions, client-side cookies, Stripe payment processing and much more.',
  //   ],
  //   images: [
  //     {
  //       src: ChardDashboard1,
  //       alt: 'chart-dashboard-1',
  //     },
  //     {
  //       src: ChardDashboard2,
  //       alt: 'chart-dashboard-2',
  //     },
  //   ],
  //   primaryTechnologies: [
  //     'Next.js',
  //     'React',
  //     'TypeScript',
  //     'Node.js',
  //     'Stripe',
  //     'React Testing Library',
  //     'Material UI',
  //   ],
  //   secondaryTechnologies: [],
  //   isResponsive: true,
  //   buttonMetadata: [
  //     {
  //       label: 'Deployment',
  //       href: 'www.google.com',
  //     },
  //     {
  //       label: 'Code',
  //       href: 'www.github.com',
  //     },
  //   ],
  // },
  // {
  //   name: '3. React-Query Auth App',
  //   descriptions: [],
  //   isResponsive: true,
  //   images: [
  //     {
  //       src: ChardDashboard1,
  //       alt: 'chart-dashboard-1',
  //     },
  //     {
  //       src: ChardDashboard2,
  //       alt: 'chart-dashboard-2',
  //     },
  //   ],
  //   primaryTechnologies: [],
  //   buttonMetadata: [
  //     {
  //       label: 'Deployment',
  //       href: 'www.google.com',
  //     },
  //     {
  //       label: 'Code',
  //       href: 'www.github.com',
  //     },
  //   ],
  // },
  // {
  //   name: '4. Deck GL Mapping App',
  //   descriptions: [],
  //   isResponsive: false,
  //   images: [
  //     {
  //       src: ChardDashboard1,
  //       alt: 'chart-dashboard-1',
  //     },
  //     {
  //       src: ChardDashboard2,
  //       alt: 'chart-dashboard-2',
  //     },
  //   ],
  //   primaryTechnologies: [],
  //   secondaryTechnologies: [],
  //   buttonMetadata: [
  //     {
  //       label: 'Deployment',
  //       href: 'www.google.com',
  //     },
  //     {
  //       label: 'Code',
  //       href: 'www.github.com',
  //     },
  //   ],
  // },
  {
    name: '5. This app!',
    descriptions: [
      `This portfolio app was created completely manually using Next.js 13, TypeScript, Tailwind CSS, React Hook Form and Yup.`,
      `I put it together fairly quickly for the purposes of hosting these demo projects, so it is not intended to be anything grand, and I'm relatively new to Tailwind CSS, so it also served as an opportunity to have a proper investigation.`,
      `It's fully responsive as far down as 200 pixels too, so feel free to have a play around.`,
    ],
    isResponsive: true,
    primaryTechnologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    secondaryTechnologies: ['React Hook Form', 'Yup'],
    images: [
      {
        src: ChardDashboard1,
        alt: 'chart-dashboard-1',
      },
      {
        src: ChardDashboard2,
        alt: 'chart-dashboard-2',
      },
    ],
    buttonMetadata: [
      {
        label: 'Deployment',
        href: 'www.google.com',
      },
      {
        label: 'Code',
        href: 'www.github.com',
      },
    ],
  },
];
