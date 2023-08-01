import {
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  DisplayArea,
  CircleImage,
} from '~/components';

import FaceImage from '~/images/face-cropped.jpg';

import { ABOUT_DATA } from '~/app/about/about-data';

const About = () =>
  ABOUT_DATA.map(({ title, descriptions }, i) => {
    const isEven = i % 2 === 0;
    return (
      <SectionWrapper key={title} isEven={!isEven}>
        <ContentArea>
          <Title>{title}</Title>
          <DescriptionSection>
            {descriptions.map((desc) => (
              <p key={desc}>{desc}</p>
            ))}
          </DescriptionSection>
        </ContentArea>
        <DisplayArea>
          <CircleImage image={FaceImage} alt='asdf' />
        </DisplayArea>
      </SectionWrapper>
    );
  });

export default About;
