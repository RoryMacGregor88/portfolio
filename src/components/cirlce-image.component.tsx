import NextImage, { StaticImageData } from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const CircleImage = ({ src, alt }: Props) => (
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
        border: '6px solid #fff',
        borderRadius: '50%',
        maxHeight: '30em',
        maxWidth: '30em',
        overflow: 'hidden',
        objectFit: 'contain',
      }}
    >
      <NextImage
        alt={alt}
        src={src}
        height='500'
        width='500'
        placeholder='empty'
        style={{ objectFit: 'fill' }}
      />
    </div>
  </div>
);

export default CircleImage;
