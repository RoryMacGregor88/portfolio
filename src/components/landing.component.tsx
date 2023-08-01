'use client';

import NextImage from 'next/image';

import ImageViewer from 'react-simple-image-viewer';

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
import { useState } from 'react';

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
        alt='Rory MacGregor headshot'
        src={FaceImage}
        placeholder='blur'
        style={{ objectFit: 'fill' }}
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
          aerospace firm in Edinburgh called Astrosat, which specialises in
          visualising satellite data on maps and creating custom tools with
          which to interact with it.
        </p>
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

      <TechIconList title='Principal technologies: ' showAll />

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
    primaryTechnologies,
    secondaryTechnologies,
    name,
    buttonMetadata,
  },
  index,
}: ProjectSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

        <TechIconList
          primaryTechnologies={primaryTechnologies}
          secondaryTechnologies={secondaryTechnologies}
        />

        <ButtonSection>
          {buttonMetadata.map(({ label, href }) => (
            <ExternalLink key={label} href={href} label={label} />
          ))}
        </ButtonSection>
      </ContentArea>

      <DisplayArea>
        <div className='flex flex-wrap flex-row justify-evenly gap-2 m-4'>
          {images.map(({ src, alt }, i) => (
            <div
              key={alt}
              className='flex w-2/5 border-4 border-solid border-white rounded-md overflow-hidden'
            >
              <NextImage
                alt={name}
                src={src}
                style={{ objectFit: 'fill', cursor: 'pointer' }}
                placeholder='blur'
                onClick={() => setSelectedImage(i + 1)}
              />
            </div>
          ))}
        </div>
      </DisplayArea>
      {!!selectedImage ? (
        <ImageViewer
          src={images.map(({ src }) => src)}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          disableScroll={false}
          backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          closeOnClickOutside={true}
        />
      ) : null}
    </SectionWrapper>
  );
};

const Landing = () => {
  return (
    <ul>
      <IntroSection />
      {PROJECT_DATA.map((project, i) => (
        <ProjectSection key={project.name} project={project} index={i + 1} />
      ))}
    </ul>
  );
};

export default Landing;
