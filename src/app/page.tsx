'use client';

import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import {
  ExternalLink,
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  ButtonSection,
  DisplayArea,
  TechIconList,
  CircleImage,
  PhotoAlbum,
  ImageHeader,
} from '~/components';

import { PROJECT_DATA, Project } from '~/project-data';

/** first black/blue panel that is unique from the others */
const IntroSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const galleryIsOpen = selectedImageIndex >= 0,
    imageData = { src: '/face-cropped.jpg', alt: 'Rory MacGregor headshot' };

  return (
    <SectionWrapper isEven={true}>
      <ContentArea>
        <Title className='text-2xl lg:text-4xl text-center lg:text-left'>
          Hi, I&apos;m Rory.
        </Title>

        <DescriptionSection>
          <p>
            I&apos;m a 34-year-old full-stack React/TypeScript/Node.js developer
            with GIS experience, based in Edinburgh, Scotland.
          </p>
          <p>
            I&apos;ve been involved in software development for 6 years and have
            worked professionally for the last 4 years at an aerospace firm in
            Edinburgh called Astrosat, which specialises in visualising
            satellite data in mapping applications and creating custom tools
            with which to interact with it.
          </p>
          <p>
            Scrolling down this page, you will find short descriptions of
            projects that demonstrate my knowledge and experience, as well as
            links to standalone deploys and repositories for each.
          </p>
          <p>
            PLEASE NOTE: All projects presented here &#40;including this
            app&#41; are currently under active development, and therefore not
            reflective of finished applications.
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
        <CircleImage onClick={() => setSelectedImageIndex(0)} {...imageData} />
        <ImageHeader singleImage />
      </DisplayArea>

      <Lightbox
        index={selectedImageIndex}
        slides={[{ src: imageData.src }]}
        open={galleryIsOpen}
        close={() => setSelectedImageIndex(-1)}
      />
    </SectionWrapper>
  );
};

interface ProjectSectionProps {
  project: Project;
  index: number;
}

/** black/blue panels for project images and descriptions */
const ProjectSection = ({ project, index }: ProjectSectionProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const {
    descriptions,
    images,
    primaryTechnologies,
    secondaryTechnologies,
    name,
    buttonMetadata,
  } = project;

  const isEven = index % 2 === 0,
    galleryIsOpen = selectedImageIndex >= 0;

  /** approximate 16:9 aspect ratio in pixels, close enough for thumbnails */
  const width = 499,
    height = 280;

  const slides = images?.map(({ src }) => ({ src })),
    photos = slides?.map(({ src }) => ({ src, width, height }));
  return (
    <SectionWrapper isEven={isEven}>
      <ContentArea>
        <Title>{name}</Title>

        <DescriptionSection>
          {descriptions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </DescriptionSection>

        <TechIconList
          primaryTechnologies={primaryTechnologies}
          secondaryTechnologies={secondaryTechnologies}
        />

        {!!buttonMetadata ? (
          <ButtonSection>
            {buttonMetadata.map(({ label, href }) => (
              <ExternalLink key={label} href={href} label={label} />
            ))}
          </ButtonSection>
        ) : null}
      </ContentArea>

      {!!photos && !!slides ? (
        <>
          <DisplayArea>
            <PhotoAlbum photos={photos} onClick={setSelectedImageIndex} />
          </DisplayArea>

          <Lightbox
            index={selectedImageIndex}
            slides={slides}
            open={galleryIsOpen}
            close={() => setSelectedImageIndex(-1)}
          />
        </>
      ) : (
        <DisplayArea>
          <h1 className='text-black font-bold text-2xl text-center mb-2'>
            Coming soon:
          </h1>
          <p className='text-black font-bold text-xl text-center'>
            Interactive vector maps with drawing tools, using Deck.gl,
            Nebula.gl, React Map GL, Turf.js and Supercluster.
          </p>
        </DisplayArea>
      )}
    </SectionWrapper>
  );
};

const Landing = () => (
  <>
    <IntroSection />
    {PROJECT_DATA.map((project, i) => (
      <ProjectSection key={project.name} project={project} index={i + 1} />
    ))}
  </>
);

export default Landing;
