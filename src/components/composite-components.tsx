import NextImage from 'next/image';

import { ReactNode } from 'react';

import ReactPhotoAlbum, { RenderPhotoProps } from 'react-photo-album';

import clsx from 'clsx';

interface SectionWrapperProps {
  isEven?: boolean;
  children: ReactNode;
}

/** container comprising black text and blue image sections */
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

/** blue panel with images */
export const DisplayArea = ({ children }: { children: ReactNode }) => (
  <div className='bg-blue min-h-screen lg:w-1/2 flex flex-col justify-center items-center p-4'>
    {children}
  </div>
);

/** from react-photo-album docs, for use with Next images */
const NextJsImage = ({ photo, imageProps, wrapperStyle }: RenderPhotoProps) => {
  const { alt, title, sizes, className, onClick } = imageProps;
  return (
    <div
      style={{
        ...wrapperStyle,
        position: 'relative',
      }}
    >
      <NextImage
        fill
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        alt={alt}
        title={title}
        sizes={sizes}
        className={className}
        onClick={onClick}
      />
    </div>
  );
};

export const ImageHeader = ({ singleImage }: { singleImage?: boolean }) => (
  <p className='text-black text-center text-lg font-bold my-4'>
    {`Click image${singleImage ? '' : 's'} for full screen`}
  </p>
);

interface PhotoAlbumProps {
  photos: { src: string; width: number; height: number }[];
  onClick: (index: number) => void;
}

export const PhotoAlbum = ({ photos, onClick }: PhotoAlbumProps) => (
  <div className='w-full m-4'>
    <ImageHeader />
    <ReactPhotoAlbum
      layout='rows'
      columns={2}
      photos={photos}
      renderPhoto={NextJsImage}
      onClick={({ index }: { index: number }) => onClick(index)}
    />
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
  <h1 className={clsx('text-xl lg:text-2xl font-bold', className)}>
    {children}
  </h1>
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
