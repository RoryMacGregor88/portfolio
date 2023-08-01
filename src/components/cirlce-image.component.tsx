import NextImage, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  alt: string;
}

const CircleImage = ({ image, alt }: Props) => (
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
        alt={alt}
        src={image}
        placeholder='blur'
        style={{ objectFit: 'fill' }}
      />
    </div>
  </div>
);

export default CircleImage;
