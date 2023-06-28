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
          that demonstrate my knowledge and experience, as well as links to
          standalone deploys and repositories for each.
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2.5rem',
        }}
      >
        <div
          style={{
            border: '8px solid #fff',
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
    </DisplayArea>
  </SectionWrapper>
);

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection = ({
  project: {
    descriptions,
    responsive,
    src,
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

        <DescriptionSection>
          {descriptions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </DescriptionSection>

        <div className=''>
          <h4 className='text-3xl'>Technologies used:</h4>
          <ol className='flex flex-wrap list-disc'>
            {technologies.map((tech) => (
              <li className='text-xl text-left text-yellow ml-28' key={tech}>
                {tech}
              </li>
            ))}
          </ol>
        </div>

        <>
          <h4 className='text-xl lg:text-3xl'>
            Screen size: {responsive ? 'Responsive' : 'Desktop'}
          </h4>
          <ButtonSection>
            {buttonMetadata.map(({ label, href }) => (
              <ExternalLink key={label} href={href} label={label} />
            ))}
          </ButtonSection>
        </>
      </ContentArea>

      <DisplayArea>
        <div className='border-8 border-solid border-white rounded-md overflow-hidden mx-8 lg:mx-16 my-8 lg:my-0'>
          <NextImage
            alt={name}
            src={src}
            style={{ objectFit: 'fill' }}
            placeholder='blur'
          />
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
