import NextImage, { StaticImageData } from 'next/image';

import { ReactNode } from 'react';

import clsx from 'clsx';

interface SectionWrapperProps {
  isEven?: boolean;
  children: ReactNode;
}
/** container comprising black text and yellow image sections */
export const SectionWrapper = ({
  isEven = false,
  children,
}: SectionWrapperProps) => (
  <li
    className={`flex flex-col ${
      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
    } justify-between align-middle pl-0 lg:pl-32 lg:pt-0`}
  >
    {children}
  </li>
);

/** yellow panel with images */
export const DisplayArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-yellow min-h-screen lg:w-1/2 flex justify-center items-center'>
    {children}
  </div>
);

interface MultiImageViewProps {
  images: { src: StaticImageData; alt: string }[];
  setSelectedImage: (index: number) => void;
}

export const MultiImageView = ({
  images,
  setSelectedImage,
}: MultiImageViewProps) => (
  <div className='flex flex-wrap justify-evenly gap-2 m-4'>
    {images.map(({ src, alt }, i) => (
      <div
        key={alt}
        className='flex w-80 border-4 border-solid border-white rounded-md overflow-hidden'
      >
        <NextImage
          alt={alt}
          src={src}
          style={{
            objectFit: 'fill',
            width: 'fit-content',
            cursor: 'pointer',
          }}
          placeholder='blur'
          onClick={() => setSelectedImage(i + 1)}
        />
      </div>
    ))}
  </div>
);

/** black panel with text and buttons */
export const ContentArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-black lg:w-1/2 min-h-screen flex flex-col justify-evenly gap-4 text-center p-4 lg:p-8'>
    {children}
  </div>
);

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => (
  <h2 className={clsx('text-xl lg:text-2xl font-bold', className)}>
    {children}
  </h2>
);

/** paragraphs in between title and buttons */
export const DescriptionSection = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`text-lg lg:text-xl flex flex-col text-center lg:text-left gap-4 ${className}`}
  >
    {children}
  </div>
);

export const ButtonSection = ({ children }: { children: ReactNode }) => (
  <div className='flex gap-4 lg:gap-8 justify-between'>{children}</div>
);
