import { ReactNode } from 'react';

import NextImage, { StaticImageData } from 'next/image';
import NextLink from 'next/link';

import { Button } from '~/components';

import ChardDashboardImage from '~/images/chart-dashboard.png';
import FaceImage from '~/images/face.jpg';

type Project = {
  name: string;
  descriptions: string[];
  src: StaticImageData;
  buttonMetadata: { label: string; href: string }[];
};

const PROJECT_DATA: Project[] = [
  {
    name: `Hi, I'm Rory.`,
    descriptions: [
      `I'm a 34-year-old full-stack JavaScript developer based in Edinburgh, Scotland. I've been involved in software development for 6 years and working professionally for the last 4 years at an aerospace firm in Edinburgh called Astrosat, which specialised in visualising satellite data on maps and creating custom tools with which to interact with it.`,
      'Scrolling down this page, you will find short descriptions of projects that demonstrate my knowledge and abilities, as well as links to standalone deploys and repositories for each.',
    ],
    src: ChardDashboardImage,
    buttonMetadata: [
      {
        label: 'View LinkedIn',
        href: 'www.linkedIn.com',
      },
      {
        label: 'View GitHub',
        href: 'www.github.com',
      },
    ],
  },
  {
    name: '1. Chart Dashboard',
    descriptions: [
      'This was the first full feature in Orbis that I was tasked with creating alone. Of course, the other devs at Astrosat were reviewing of my PRs, but the design choices, structure and code was left to my judgement.',
      'The brief was large, and asked for a lot of functionality. The client had requested a dashboard capable of rendering charts to visualise data from their servers as histogram charts, and the ability for individual users to input their own target data that would then be overlayed as line charts on top of the histograms.',
      'The user-inputted also had to be tracked at all times, and persisted to the Orbis database, saving whenever the user left the dashboard if changes had been made.',
      'The biggest challenge in this featue was the data transforming. The data we received from the client was in a fixed data shape, required that data to be tranformed to fit the data shape demanded by the charting library API. This led to the creation of many complex transformer functions.',
    ],
    src: ChardDashboardImage,
    buttonMetadata: [
      {
        label: 'View Deployment',
        href: 'www.google.com',
      },
      {
        label: 'View Code',
        href: 'www.github.com',
      },
    ],
  },
];

interface ListProps {
  children: ReactNode;
}

const List = ({ children }: ListProps) => <ul>{children}</ul>;

interface SectionProps {
  project: Project;
}

const Section = ({
  project: { descriptions, src, name, buttonMetadata },
}: SectionProps) => (
  <li className='flex justify-between align-middle h-screen'>
    <div className='bg-black w-1/2 flex flex-col justify-center text-center'>
      <h2 className='text-6xl font-bold'>{name}</h2>
      <div className='m-12 text-2xl flex flex-col gap-2'>
        {descriptions.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className='flex gap-4 mx-5 justify-between'>
        {buttonMetadata.map(({ label, href }) => (
          <NextLink key={label} href={href} style={{ width: '100%' }}>
            <Button label={label} />
          </NextLink>
        ))}
      </div>
    </div>

    <div className='bg-yellow w-1/2 flex flex-col justify-center'>
      <div className='border-8 border-solid border-white rounded-md overflow-hidden mx-16'>
        <NextImage
          alt={name}
          src={src}
          style={{ objectFit: 'fill' }}
          placeholder='blur'
        />
      </div>
    </div>
  </li>
);

const ProjectDisplay = () => (
  <List>
    {PROJECT_DATA.map((project) => (
      <Section key={project.name} project={project} />
    ))}
  </List>
);

export default ProjectDisplay;
