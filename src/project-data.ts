export type Project = {
  name: string;
  descriptions: string[];
  images?: { src: string; alt: string }[];
  primaryTechnologies: string[];
  secondaryTechnologies: string[];
  buttonMetadata?: { label: string; href: string }[];
};

export const PROJECT_DATA: Project[] = [
  {
    name: '1. Data Visualisation Dashboard',
    descriptions: [
      `This was a feature that I was tasked with solo (outside of PR reviews).
      The client had asked for a lot of functionality, and the data shapes from their APIs
      were fixed, which required the development of many custom transformer functions to map
      the data to the formats demanded by Victory, the charting library I chose to use.`,
      `Users can add their own data for 'target' values, which are then either conditionally
      rendered as additional graphs in some charts, or used to calculate percentages from the
      API data in others.`,
      `All user interactions are tracked at all times, and automatically persisted to the database
      (mocked here) whenever the user navigates away from the dashboard or closes the tab/browser.`,
      `Users can also export the data from the dashboard in its current state with a single button
      click, which is saved to an Excel file, and separated by dataset into multiple pages.`,
      `The API data here is 100% mocked, and has actually been significantly simplified. The live
      data originally used was much more complex, and combined with the complexity of the functionality,
      created many edge cases that needed to be addressed, meaning that heavy testing of the utility
      and transformer functions was critical.`,
    ],
    images: [1, 2, 3, 4, 5, 6].map((num) => ({
      src: `/dashboard-${num}.png`,
      alt: `dashboard-${num}`,
    })),
    primaryTechnologies: [
      'React',
      'TypeScript',
      'Redux',
      'Victory',
      'MSW',
      'React Testing Library',
      'Material UI',
    ],
    secondaryTechnologies: [
      'Vite',
      'Vitest',
      'React Hook Form',
      'Yup',
      'File-Saver',
      'Numeral',
      'Visx',
    ],
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
      `It is, for all intents and purposes, a real app. I always enjoy developing this project,
      as I consider it to be an example of clean, terse, efficient and logical code, with test coverage
      over 90%.`,
      `NOTE: I have noticed that the Next.js serverless endpoints can sometimes time out, causing an error
      to be thrown. This due to the restrictions on Vercel's free tier for deployments and cannot be helped,
      so apologies if you encounter this.`,
    ],
    images: [1, 2, 3, 4, 5, 6].map((num) => ({
      src: `/functional-player-${num}.png`,
      alt: `functional-player-${num}`,
    })),
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
    secondaryTechnologies: [
      'Nodemailer',
      'Bcrypt',
      'Date-Fns',
      'Iron-Session',
      'Fetch-Mock',
    ],
    buttonMetadata: [
      {
        label: 'Deployment',
        href: 'https://www.functionalplayer.com',
      },
      {
        label: 'Code',
        href: 'https://github.com/RoryMacGregor88/functional-player',
      },
    ],
  },
  // {
  //   name: '3. React-Query Auth App',
  //   descriptions: [
  //     `This was originally a playground app used to test an updated authentication and authorization system
  //     for Astrosat's flagship application. Almost all of the functionality is under-the-hood,
  //     so the UI is very basic.`,
  //     `The idea was to use a two-token system to mitigate potential security vulnerabilities. The first would
  //     be a "refresh token", which would last for a longer period, anywhere from a day to a week or more, while
  //     the second would be an "access token", which would be an http-only cookie, and have a much shorter lifespan
  //     of maybe only an hour. Should the access token expire, the refresh token would be used to generate a new one, until the refresh
  //     token eventually expires, at that point forcing a logout.`,
  //     `Using this system, if the access token is somehow compromised, the user will only be vulnerable for the length
  //     of time before the access token expires.`,
  //   ],
  //   images: [1, 2, 3].map((num) => ({
  //     src: `/portfolio-${num}.png`,
  //     alt: `portfolio-${num}`,
  //   })),
  //   primaryTechnologies: [
  //     'React Query',
  //     'TypeScript',
  //     'Node.js',
  //     'MongoDB',
  //     'Tailwind CSS',
  //   ],
  //   secondaryTechnologies: ['jwt-token'],
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
    name: 'Wildfire Simulation Dynamic Map Form',
    descriptions: [
      `This large, dynamic form was originally part of an app called SAFERS, which Astrosat,
      and myself in particular, was tasked with developing. The app was already significantly
      developed by the time Astrosat took over, but these large simulation forms (three in total) had not
      yet been created.`,
      `The purpose of the form is to collect information about a hypothetical forest fire scenario,
      which would be used to generate a simulation that could then be used to plan emergency responses.
      The form itself is complex and dynamic, with several fields working conditionally, depending on
      the state of other fields.`,
      `The form is also linked to the map, which can be used to draw GeoJson features that are then
      automatically converted into Well-Known Text format and displayed in the form. This, of course,
      works in reverse too, where WKT can be pasted directly into the form, where it is immediately rendered
      as GeoJson onto the map.`,
      `This feature also required the development of several custom form validator functions, as the
      standard Yup methods were not flexible enough to accommodate the functionality demanded.`,
      `SAFERS was written in JavaScript, and although I am currently migrating this feature to TypeScript,
      it may only partially complete, depending on when you are reading this.`,
    ],
    primaryTechnologies: [
      'TypeScript',
      'Next.js',
      'Redux',
      'React Testing Library',
      'Sass',
      'Tailwind CSS',
    ],
    secondaryTechnologies: [
      'Deck.gl',
      'Nebula.gl',
      'React Map GL',
      'Turf.js',
      'Formik',
      'Yup',
      'Moment',
      'Reactstrap',
      'WKT',
    ],
    images: [1, 2, 3, 4, 5, 6].map((num) => ({
      src: `/wildfire-${num}.png`,
      alt: `wildfire-${num}`,
    })),
    buttonMetadata: [
      {
        label: 'Deployment',
        href: 'https://wildfire-simulation.vercel.app/',
      },
      {
        label: 'Code',
        href: 'https://github.com/RoryMacGregor88/wildfire-simulation',
      },
    ],
  },
  {
    name: 'Snake! Functional React style',
    descriptions: [
      `This is a re-creation of the classic Nokia game Snake II. I created this mostly as
      an exercise in functional programming and custom React hooks, but also for fun, as I enjoy
      working out complex logic such as the game mechanics here.`,
      `Although this is not the first time someone has re-created Snake in React, the others are quite
      simple, and I haven't come across one with as much functionality as this one. I also intentionally
      shielded myself from any kind of example as a personal challenge, so the game logic here is 100% my
      own creation.`,
      `The game includes all of the gameplay features of the original, such as: wrapping when hitting
      walls or floor/ceiling, the snake's body growing each time he eats, prevention of turning 180
      degrees and game over when hitting his own tail.`,
      `I also added a few additional features that I thought improved the fun, such as:
      the snake getting faster each time he eats, a look-ahead hint of where the next lizard will appear,
      randomly spawning bonuses/booby traps and the snake's head icon rotating to face the direction he
      is moving.`,
      `I included this here because it ended up being a surptisingly complex application, as well as just
      generally pretty cool, and I consider it to be an example of extremely clean, organised, maintainable,
      and readable functional programming.`,
    ],
    primaryTechnologies: [
      'React',
      'TypeScript',
      'React Testing Library',
      'Sass',
    ],
    secondaryTechnologies: ['Vite', 'Vitest', 'Date-Fns'],
    images: [1, 2, 3, 4, 5, 6].map((num) => ({
      src: `/snake-${num}.png`,
      alt: `snake-${num}`,
    })),
    buttonMetadata: [
      {
        label: 'Deployment',
        href: 'https://snake-five-peach.vercel.app/',
      },
      {
        label: 'Code',
        href: 'https://github.com/RoryMacGregor88/snake',
      },
    ],
  },
  {
    name: '5. This app!',
    descriptions: [
      `This portfolio app was created manually using Next.js 13, TypeScript, Tailwind CSS, React Photo Album, React Hook Form and Yup.`,
      `I put it together fairly quickly for the purposes of hosting these demo projects, so it is not intended to be anything grand,
      but serves as a good example of how effective component composition in React can be.`,
      `I'm also relatively new to Tailwind CSS, so it served as an opportunity to have a proper investigation.`,
      `It's fully responsive as far down as 250 pixels too, so feel free to have a play around.`,
    ],
    primaryTechnologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    secondaryTechnologies: [
      'React Hook Form',
      'Yup',
      'React Photo Album',
      'Nodemailer',
      'Fetch-Mock',
    ],
    buttonMetadata: [
      {
        label: 'Code',
        href: 'https://github.com/RoryMacGregor88/portfolio',
      },
    ],
  },
];
