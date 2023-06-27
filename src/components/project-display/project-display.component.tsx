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
  responsive?: boolean;
  buttonMetadata: { label: string; href: string }[];
};

const PROJECT_DATA: Project[] = [
  {
    name: '1. Chart Dashboard',
    descriptions: [
      'This was the first full feature in Orbis that I was tasked with creating alone. Of course, the other devs at Astrosat were reviewing of my PRs, but the design choices, structure and code was left to my judgement.',
      'The brief was large, and asked for a lot of functionality. The client had requested a dashboard capable of rendering charts to visualise data from their servers as histogram charts, and the ability for individual users to input their own target data that would then be overlayed as line charts on top of the histograms.',
      'The user-inputted also had to be tracked at all times, and persisted to the Orbis database, saving whenever the user left the dashboard if changes had been made.',
      'The biggest challenge in this featue was the data transforming. The data we received from the client was in a fixed data shape, required that data to be tranformed to fit the data shape demanded by the charting library API. This led to the creation of many complex transformer functions.',
    ],
    responsive: false,
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
  {
    name: '2. Functional Player',
    descriptions: [
      `This is a long-lived training project that I've maintained for several years. It was initially created as a playground to learn more about the technogies used as Astrosat, but quickly developed into a production app.`,
      'It has since been deployed to production and testing environments, has full authentication, authorization, server-side sessions, client-side cookies, Stripe payment processing and much more.',
    ],
    src: ChardDashboardImage,
    responsive: true,
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
  {
    name: '3. React-Query Auth App',
    descriptions: [],
    responsive: true,
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
  {
    name: '4. Deck GL Mapping App',
    descriptions: [],
    responsive: false,
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
  {
    name: '5. This site!',
    descriptions: [
      `Yes, everything about this portfolio app was created manually using Next.js 13, Typescript and Tailwind CSS.`,
      `I'm relatively new to Tailwind, so I thought this would serve as an opportunity to try it out. It's fully responsive, so feel free to have a play around.`,
    ],
    responsive: true,
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

const List = ({ children }: { children: ReactNode }) => <ul>{children}</ul>;

interface SectionWrapperProps {
  isEven: boolean;
  children: ReactNode;
}

/** container comprising black text and yellow image sections */
const SectionWrapper = ({ isEven, children }: SectionWrapperProps) => (
  <li
    className={`flex flex-col ${
      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
    } justify-between align-middle lg:h-screen lg:pl-12`}
  >
    {children}
  </li>
);

/** black panel with text and buttons */
const ContentArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-black lg:w-1/2 flex flex-col justify-center text-center py-8 lg:py-0'>
    {children}
  </div>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h2 className='text-4xl lg:text-6xl font-bold'>{children}</h2>
);

/** paragraphs in between title and buttons */
const DescriptionSection = ({ children }: { children: ReactNode }) => (
  <div className='m-6 text-lg lg:text-2xl flex flex-col gap-2'>{children}</div>
);

const ButtonSection = ({ children }: { children: ReactNode }) => (
  <div className='flex gap-4 mx-5 justify-between'>{children}</div>
);

/** yellow panel with images */
const ImageArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-yellow lg:w-1/2 flex flex-col justify-center'>
    {children}
  </div>
);

/** first black/yellow panel that is unique from the others */
const IntroSection = () => (
  <SectionWrapper isEven={true}>
    <ContentArea>
      <Title>Hi, I&apos;m Rory.</Title>
      <DescriptionSection>
        <p>
          I&apos;m a 34-year-old full-stack JavaScript developer based in
          Edinburgh, Scotland. I&apos;ve been involved in software development
          for 6 years and working professionally for the last 4 years at an
          aerospace firm in Edinburgh called Astrosat, which specialised in
          visualising satellite data on maps and creating custom tools with
          which to interact with it.
        </p>
        <p>
          Scrolling down this page, you will find short descriptions of projects
          that demonstrate my knowledge and abilities, as well as links to
          standalone deploys and repositories for each.
        </p>
      </DescriptionSection>

      <ButtonSection>
        <NextLink href={'www.google.com'} style={{ width: '100%' }}>
          <Button label={'View LinkedIn'} className='lg:p-4' />
        </NextLink>
        <NextLink href={'www.google.com'} style={{ width: '100%' }}>
          <Button label={'View Github'} className='lg:p-4' />
        </NextLink>
      </ButtonSection>
    </ContentArea>

    <ImageArea>
      <div
        style={{
          border: '8px solid #fff',
          borderRadius: '50%',
          margin: '10rem',
          overflow: 'hidden',
          objectFit: 'contain',
        }}
      >
        <NextImage
          alt={`Rory MacGregor headshot`}
          src={FaceImage}
          style={{ objectFit: 'fill' }}
          placeholder='blur'
        />
      </div>
    </ImageArea>
  </SectionWrapper>
);

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection = ({
  project: { descriptions, responsive, src, name, buttonMetadata },
  index,
}: ProjectSectionProps) => {
  const isEven = index % 2 === 0;
  return (
    <SectionWrapper isEven={isEven}>
      <ContentArea>
        <Title>{name}</Title>

        <DescriptionSection>
          {descriptions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </DescriptionSection>

        <>
          <h4 className='mb-6 text-xl lg:text-3xl'>
            Screen size: {responsive ? 'Responsive' : 'Desktop'}
          </h4>
          <ButtonSection>
            {buttonMetadata.map(({ label, href }) => (
              <NextLink key={label} href={href} style={{ width: '100%' }}>
                <Button label={label} className='lg:p-4' />
              </NextLink>
            ))}
          </ButtonSection>
        </>
      </ContentArea>

      <ImageArea>
        <div className='border-8 border-solid border-white rounded-md overflow-hidden mx-8 lg:mx-16 my-8 lg:my-0'>
          <NextImage
            alt={name}
            src={src}
            style={{ objectFit: 'fill' }}
            placeholder='blur'
          />
        </div>
      </ImageArea>
    </SectionWrapper>
  );
};

const ProjectDisplay = () => (
  <List>
    <IntroSection />
    {PROJECT_DATA.map((project, i) => (
      <ProjectSection key={project.name} index={i + 1} project={project} />
    ))}
  </List>
);

export default ProjectDisplay;
