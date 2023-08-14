'use client';

import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import {
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  DisplayArea,
  CircleImage,
  ImageHeader,
} from '~/components';

import { ABOUT_DATA } from '~/app/about/about-data';

interface Props {
  setSelectedImageIndex: (index: number) => void;
}

const AboutSection = ({ setSelectedImageIndex }: Props) =>
  ABOUT_DATA.map(({ title, descriptions, images }, i) => {
    const isEven = i % 2 === 0,
      image = images[0];
    return (
      <SectionWrapper key={title} isEven={isEven}>
        <ContentArea>
          <Title>{title}</Title>
          <DescriptionSection>
            {descriptions.map((desc) => (
              <p key={desc}>{desc}</p>
            ))}
          </DescriptionSection>
        </ContentArea>
        <DisplayArea>
          <CircleImage onClick={() => setSelectedImageIndex(i)} {...image} />
          <ImageHeader singleImage />
        </DisplayArea>
      </SectionWrapper>
    );
  });

const About = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const galleryIsOpen = selectedImageIndex >= 0,
    slides = ABOUT_DATA.reduce(
      (acc: { src: string }[], cur) => [
        ...acc,
        ...cur.images.map(({ src }) => ({ src })),
      ],
      []
    );

  return (
    <ul>
      <AboutSection setSelectedImageIndex={setSelectedImageIndex} />
      <Lightbox
        index={selectedImageIndex}
        slides={slides}
        open={galleryIsOpen}
        close={() => setSelectedImageIndex(-1)}
      />
    </ul>
  );
};

export default About;
