export type Project = {
  name: string;
  descriptions: string[];
  images: { src: string; alt: string }[];
  primaryTechnologies: string[];
  secondaryTechnologies: string[];
  isResponsive?: boolean;
  buttonMetadata: { label: string; href: string }[];
};

export const PROJECT_DATA: Project[] = [
  {
    name: '1. Data Visualisation Dashboard',
    descriptions: [
      `This was a feature that I was tasked with completely alone (outside of PR reviews).
      The client had asked for a lot of functionality, and the data shapes from their APIs
      were fixed, which required the development of many custom transformer functions to map
      the data to the formats demanded by Victory, the charting library I chose to use.`,
      `Users can add their own data for 'target' values, which are then either conditionally
      rendered as additional graphs in some charts, or used to calculate percentages from the
      API data in others.`,
      `User-inputted data is tracked at all times, and automatically persisted to the database
      (mocked here) whenever the user navigates away from the dashboard or closes the tab/browser.`,
      `Users can also export the data from the dashboard in its current state with a single button
      click, which is saved to an Excel file, and separated by dataset into multiple pages.`,
      `The API data here is 100% mocked, and has actually been significantly simplified. The live
      data originally used was much more complex, and combined with the complexity of the functionality,
      created many edge cases that needed to be addressed, meaning that heavy testing of the utility
      and transformer functions was paramount.`,
    ],
    isResponsive: false,
    images: [
      {
        src: '/dashboard-1.png',
        alt: 'dashboard-1',
      },
      {
        src: '/dashboard-2.png',
        alt: 'dashboard-2',
      },
      {
        src: '/dashboard-3.png',
        alt: 'dashboard-3',
      },
      {
        src: '/dashboard-4.png',
        alt: 'dashboard-4',
      },
      {
        src: '/dashboard-5.png',
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
  {
    name: '2. Functional Player',
    descriptions: [
      `This is a long-lived training app that I've been developing for several years. It is a fictional
      streaming platform, although the functionality is that of an enterprise application, and it has since
      been deployed to a production environment.`,
      `I created it so that I could gain deeper experience in full-stack development, authentication,
      authorization, session management, security, payment processing and deployment.`,
      `Notable features include:
      Full authentication, all CRUD actions, including automated session management
      and the ability to create/maintain sessions across multiple devices.
      Server-side token authorization and protected API routes.
      Full payment processing with Stripe (using Stripe's testing environment).
      Client and server-side form validation/sanitation.
      Automated app-wide toast notifications for error/success states.
      Automated e-mailing, custom domain, and much more. `,
      `It is, for all intents and purposes, a real app. I am particularly proud of this project,
      as I consider it to be an example of clean, terse, efficient and logical code, with test coverage
      over 90%.`,
    ],
    images: [
      {
        src: '/dashboard-1.png',
        alt: 'chart-dashboard-1',
      },
      {
        src: '/dashboard-1.png',
        alt: 'chart-dashboard-2',
      },
    ],
    primaryTechnologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Figma',
      'Node.js',
      'MongoDB',
      'Stripe',
      'React Testing Library',
      'Material UI',
    ],
    secondaryTechnologies: ['fetch-mock, node-mailer'],
    isResponsive: true,
    buttonMetadata: [
      {
        label: 'Deployment',
        href: 'www.functionalplayer.com',
      },
      {
        label: 'Code',
        href: 'https://github.com/RoryMacGregor88/functional-player',
      },
    ],
  },
  {
    name: '3. React-Query Auth App',
    descriptions: [
      `This was originally a playground app used to test an updated authentication and authorization system
      for Astrosat's flagship application. Almost all of the functionality is under-the-hood,
      so the UI is very basic.`,
      `The idea was to use a two-token system to mitigate potential security vulnerabilities. The first would
      be a "refresh token", which would last for a longer period, anywhere from a day to a week or more, while
      the second would be an "access token", which would be an http-only cookie, and have a much shorter lifespan
      of maybe only an hour. Should the access token expire, the refresh token would be used to generate a new one, until the refresh
      token eventually expires, at that point forcing a logout.`,
      `Using this system, if the access token is somehow compromised, the user will only be vulnerable for the length
      of time before the access token expires.`,
    ],
    isResponsive: false,
    images: [
      {
        src: '/portfolio-1.png',
        alt: 'chart-dashboard-1',
      },
      {
        src: '/portfolio-1.png',
        alt: 'chart-dashboard-2',
      },
    ],
    primaryTechnologies: [
      'React Query',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    secondaryTechnologies: ['jwt-token'],
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
  {
    name: '5. This app!',
    descriptions: [
      `This portfolio app was created completely manually using Next.js 13, TypeScript, Tailwind CSS, React Hook Form and Yup.`,
      `I put it together fairly quickly for the purposes of hosting these demo projects, so it is not intended to be anything grand, and I'm relatively new to Tailwind CSS, so it also served as an opportunity to have a proper investigation.`,
      `It's fully responsive as far down as 250 pixels too, so feel free to have a play around.`,
    ],
    isResponsive: true,
    primaryTechnologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    secondaryTechnologies: [
      'React Hook Form',
      'Yup',
      'React Photo Album',
      'fetch-mock',
      'Nodemailer',
    ],
    images: [
      {
        src: '/portfolio-1.png',
        alt: 'portfolio-1',
      },
      {
        src: '/portfolio-2.png',
        alt: 'portfolio-2',
      },
      {
        src: '/portfolio-3.png',
        alt: 'portfolio-2',
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
