'use client';

import NextImage from 'next/image';

import {
  ExternalLink,
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  ButtonSection,
  DisplayArea,
} from '~/components';

import { PROJECT_DATA, Project } from '~/project-data';

import FaceImage from '~/images/face-cropped.jpg';
import { TechIconList } from '~/components';

const ProfilePicture = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 2.5rem',
    }}
  >
    <div
      style={{
        border: '4px solid #fff',
        borderRadius: '50%',
        maxHeight: '30em',
        maxWidth: '30em',
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
  </div>
);

/** first black/yellow panel that is unique from the others */
const IntroSection = () => (
  <SectionWrapper isEven={true}>
    <ContentArea>
      <Title className='text-2xl lg:text-4xl text-center lg:text-left'>
        Hi, I&apos;m Rory.
      </Title>

      <DescriptionSection>
        <p>
          I&apos;m a 34-year-old full-stack TypeScript developer based in
          Edinburgh, Scotland. I&apos;ve been involved in software development
          for 6 years and have worked professionally for the last 4 years at an
          aerospace firm in Edinburgh called Astrosat.
        </p>
        <p>
          Astrosat specialises in visualising satellite data on maps and
          creating custom tools with which to interact with it.
        </p>
      </DescriptionSection>

      <div className='flex flex-col items-center'>
        <h3 className='text-lg lg:text-xl text-center mb-4'>
          Principal technologies:
        </h3>
        <TechIconList showAll />
      </div>

      <DescriptionSection>
        <p>
          Scrolling down this page, you will find short descriptions of projects
          that demonstrate my knowledge and experience, as well as links to
          standalone deploys and repositories for each.
        </p>
        <p>
          Please keep in mind that all projects shown here are currently under
          development, and not reflective of finished applications.
        </p>
      </DescriptionSection>

      <ButtonSection>
        <ExternalLink
          href='https://www.linkedin.com/in/rory-macgregor-8910aa27a'
          label='LinkedIn'
        />
        <ExternalLink
          href='https://github.com/rorymacgregor88'
          label='Github'
        />
      </ButtonSection>
    </ContentArea>

    <DisplayArea>
      <ProfilePicture />
    </DisplayArea>
  </SectionWrapper>
);

interface ProjectSectionProps {
  project: Project;
  index: number;
}

/** black/yellow panels for project images and descriptions */
const ProjectSection = ({
  project: {
    descriptions,
    isResponsive,
    images,
    technologies,
    name,
    buttonMetadata,
  },
  index,
}: ProjectSectionProps) => {
  const isEven = index % 2 === 0;
  return (
    <SectionWrapper isEven={isEven}>
      <ContentArea>
        <Title>{name}</Title>

        <h4 className='text-xl'>
          Screen size: {isResponsive ? 'responsive' : 'desktop only'}
        </h4>

        <DescriptionSection>
          {descriptions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </DescriptionSection>

        <TechIconList technologies={technologies} />

        <ButtonSection>
          {buttonMetadata.map(({ label, href }) => (
            <ExternalLink key={label} href={href} label={label} />
          ))}
        </ButtonSection>
      </ContentArea>

      <DisplayArea>
        <div className='flex flex-col gap-2 justify-evenly h-full my-2'>
          {images.map(({ src, alt }) => (
            <div
              key={alt}
              className='border-4 border-solid border-white rounded-md overflow-hidden mx-8 lg:mx-16 my-8 lg:my-0'
            >
              <NextImage
                alt={name}
                src={src}
                style={{ objectFit: 'fill' }}
                placeholder='blur'
              />
            </div>
          ))}
        </div>
      </DisplayArea>
    </SectionWrapper>
  );
};

const ProjectDisplay = () => (
  <ul>
    <IntroSection />
    {PROJECT_DATA.map((project, i) => (
      <ProjectSection key={project.name} index={i + 1} project={project} />
    ))}
  </ul>
);

export default ProjectDisplay;
